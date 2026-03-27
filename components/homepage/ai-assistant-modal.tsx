"use client";

import React, { useState, useRef, useEffect, useCallback, memo } from "react";
import type { CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bot, Mic, MicOff, ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogPortal, DialogOverlay } from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/utils";

interface AiAssistantModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface Message {
  id: number;
  type: "user" | "bot";
  content: string;
  isNew?: boolean;
}

const SUGGESTED_QUESTIONS = [
  "What services do you offer?",
  "Can I see your portfolio?",
  "How can I start a project?",
];

/* Word-by-word typing animation component */
interface TypingTextProps {
  text: string;
  onComplete?: () => void;
  speed?: number;
}

function TypingText({ text, onComplete, speed = 25 }: TypingTextProps) {
  const [displayedWords, setDisplayedWords] = useState<number>(0);
  const words = text.split(/(\s+)/); // Split but keep whitespace

  useEffect(() => {
    if (displayedWords < words.length) {
      const timer = setTimeout(() => {
        setDisplayedWords((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [displayedWords, words.length, speed, onComplete]);

  const visibleText = words.slice(0, displayedWords).join("");
  return <>{formatBotMessage(visibleText)}</>;
}

/* Format bot message: links become clickable, titles become bold */
function formatBotMessage(content: string) {
  const lines = content.split("\n");
  
  // Function to parse and linkify text
  const linkifyText = (text: string, lineKey: string) => {
    const combinedPattern = /(https?:\/\/[^\s]+)|((?:[a-zA-Z0-9][a-zA-Z0-9-]*\.)+[a-zA-Z]{2,}(?:\/[^\s]*)?)|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;
    let partIndex = 0;
    
    while ((match = combinedPattern.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      
      const matchedText = match[0];
      
      if (match[1]) {
        parts.push(
          <a
            key={`${lineKey}-link-${partIndex}`}
            href={matchedText}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#226fd3] hover:text-[#1a5bb5] underline underline-offset-2 cursor-pointer transition-colors"
          >
            {matchedText}
          </a>
        );
      } else if (match[2]) {
        parts.push(
          <a
            key={`${lineKey}-domain-${partIndex}`}
            href={`https://${matchedText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#226fd3] hover:text-[#1a5bb5] underline underline-offset-2 cursor-pointer transition-colors"
          >
            {matchedText}
          </a>
        );
      } else if (match[3]) {
        parts.push(
          <a
            key={`${lineKey}-email-${partIndex}`}
            href={`mailto:${matchedText}`}
            className="text-[#226fd3] hover:text-[#1a5bb5] underline underline-offset-2 cursor-pointer transition-colors"
          >
            {matchedText}
          </a>
        );
      }
      
      lastIndex = match.index + matchedText.length;
      partIndex++;
    }
    
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    
    return parts.length > 0 ? parts : text;
  };
  
  return lines.map((line: string, index: number) => {
    const trimmedLine = line.trim();
    const isTitle = trimmedLine.endsWith(":") && trimmedLine.length < 60;
    const isBulletPoint = /^[-•*]\s/.test(trimmedLine);
    const isNumberedList = /^\d+[.)]\s/.test(trimmedLine);
    const labelMatch = trimmedLine.match(/^([^:]+):\s*(.+)$/);
    const isLabelValue = labelMatch && labelMatch[1].length < 30 && !trimmedLine.startsWith("http");
    
    if (!trimmedLine) {
      return <br key={index} />;
    }
    
    const lineKey = `line-${index}`;
    
    if (isTitle) {
      return (
        <span key={lineKey} className="block mt-3 first:mt-0">
          <strong className="font-semibold text-gray-900">{trimmedLine}</strong>
          {index < lines.length - 1 && <br />}
        </span>
      );
    }
    
    if (isLabelValue && labelMatch) {
      return (
        <span key={lineKey}>
          <strong className="font-medium text-gray-700">{labelMatch[1]}:</strong>{" "}
          <span>{linkifyText(labelMatch[2], lineKey)}</span>
          {index < lines.length - 1 && <br />}
        </span>
      );
    }
    
    if (isBulletPoint || isNumberedList) {
      return (
        <span key={lineKey} className="block pl-2">
          {linkifyText(trimmedLine, lineKey)}
          {index < lines.length - 1 && <br />}
        </span>
      );
    }
    
    return (
      <span key={lineKey}>
        {linkifyText(trimmedLine, lineKey)}
        {index < lines.length - 1 && <br />}
      </span>
    );
  });
}

function AiAssistantModalComponent({ open, onOpenChange }: AiAssistantModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot",
      content: "Hey! I'm Nexus, the AI assistant for NexusDWeb. I can tell you about our services, showcase our portfolio, or help you start a project. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const recognitionRef = useRef<any>(null);
  const lenis = useLenis();

  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    document.body.classList.add("no-scroll");
    document.documentElement.classList.add("no-scroll");
    return () => {
      lenis?.start();
      document.body.classList.remove("no-scroll");
      document.documentElement.classList.remove("no-scroll");
    };
  }, [open, lenis]);

  const messagesRef = useRef<Message[]>(messages);
  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const id = window.setTimeout(() => {
      el.scrollTop = el.scrollHeight;
    }, 0);
    return () => clearTimeout(id);
  }, [messages]);

  const handleTextareaChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 150)}px`;
    }
  }, []);

  const toggleRecording = useCallback(() => {
    if (isRecording) {
      recognitionRef.current?.stop();
      setIsRecording(false);
      return;
    }
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in your browser.");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.onstart = () => setIsRecording(true);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput((prev) => (prev ? `${prev} ${transcript}` : transcript));
      if (textareaRef.current) {
        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
          }
        }, 0);
      }
    };
    recognition.onerror = () => setIsRecording(false);
    recognition.onend = () => setIsRecording(false);
    recognitionRef.current = recognition;
    recognition.start();
  }, [isRecording]);

  const handleSend = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMessage: Message = { id: Date.now(), type: "user", content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    setHasStartedChat(true);
    try {
      const conversationHistory = [...messagesRef.current, userMessage].map((m: Message) => ({ role: m.type, content: m.content }));
      const response = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: conversationHistory }) });
      if (!response.ok) throw new Error("Failed to fetch response");
      const data = await response.json();
      if (data?.text) {
        setMessages((prev) => [...prev, { id: Date.now() + 1, type: "bot", content: data.text, isNew: true }]);
      } else {
        setMessages((prev) => [...prev, { id: Date.now() + 1, type: "bot", content: "I didn't get a reply — please try again.", isNew: true }]);
      }
    } catch (err) {
      console.error("Error sending message:", err);
      setMessages((prev) => [...prev, { id: Date.now() + 1, type: "bot", content: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsTyping(false);
    }
  }, [input]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="z-10000" />
        <DialogContent
          className={cn(
            "bg-white! border-none! outline-none! text-gray-900 p-0 gap-0 overflow-hidden transition-all duration-300 ease-in-out [&>button]:hidden flex flex-col rounded-lg",
            "max-w-6xl! h-[85vh] z-10001"
          )}
        >
          <VisuallyHidden.Root>
            <DialogTitle>Nexus AI Assistant</DialogTitle>
            <DialogDescription>Chat with Nexus, the NexusDWeb AI assistant, to learn about our services.</DialogDescription>
          </VisuallyHidden.Root>

          {/* Header */}
          <div className="bg-gray-100 px-4 py-2 flex items-center justify-between shrink-0 z-10 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <button
                onClick={() => onOpenChange(false)}
                className="w-4 h-4 bg-[#ff5f57] border border-black/5 rounded-full flex items-center justify-center hover:bg-[#ff5f57]/90 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-2 h-2 text-white" strokeWidth={3} />
              </button>
              {/* Only the close button remains */}
              <div className="w-4 h-4 bg-[#ffbd2e]/50 border border-black/5 rounded-full" />
              <div className="w-4 h-4 bg-[#28c840]/50 border border-black/5 rounded-full" />
            </div>
            
            <div className="flex-1 mx-4 bg-gray-200 rounded-md h-5 max-w-md flex items-center justify-center">
              <span className="text-[10px] font-medium text-gray-500 uppercase tracking-widest">Nexus AI — NexusDWeb</span>
            </div>

            <div className="w-10 flex justify-end">
              <Bot className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Chat area */}
          <div className="flex flex-col flex-1 min-h-0 bg-white">
            {!hasStartedChat ? (
              <div className="flex-1 overflow-y-auto ai-chat-scrollbar p-6 flex flex-col" data-lenis-prevent>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full m-auto flex flex-col items-center max-w-6xl px-4"
                  >
                    <motion.h3 
                      layoutId="chat-title"
                      className="font-semibold text-gray-900 mb-8 text-center text-3xl"
                    >
                      Hey! I'm Nexus 👋 <br className="hidden sm:block" /> Ask me about NexusDWeb
                    </motion.h3>
                    
                    <div className="w-full mb-6 max-w-3xl px-4">
                      {/* Box shadow removed as per instructions */}
                      <div className="relative flex items-center gap-2 bg-neutral-50 rounded-full p-2 pl-3 border border-neutral-200">
                        <motion.button
                          type="button"
                          onClick={toggleRecording}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className={cn(
                            "w-9 h-9 flex items-center justify-center transition-colors shrink-0 rounded-full cursor-pointer",
                            isRecording ? "bg-red-500 text-white animate-pulse" : "text-gray-400 hover:text-gray-600"
                          )}
                          aria-label={isRecording ? "Stop recording" : "Start recording"}
                        >
                          {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                        </motion.button>
                        <textarea
                          ref={textareaRef}
                          value={input}
                          onChange={handleTextareaChange}
                          onFocus={() => setIsFocused(true)}
                          onBlur={() => setIsFocused(false)}
                          onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); void handleSend(); } }}
                          placeholder="Ask me anything..."
                          rows={1}
                          className="flex-1 bg-transparent border-0 ring-0 focus:ring-0 outline-none focus:outline-none text-gray-900 placeholder:text-gray-400 py-2.5 resize-none text-[15px] leading-relaxed max-h-[150px] min-h-[24px]"
                        />
                        <div className="shrink-0 mb-1 mr-1">
                          <motion.button onClick={() => void handleSend()} disabled={!input.trim()} whileTap={input.trim() ? { scale: 0.95 } : {}} className={cn("h-9 w-9 rounded-full flex items-center justify-center transition-all duration-200", input.trim() ? "bg-[#226fd3] text-white cursor-pointer" : "bg-gray-200 text-gray-400 cursor-not-allowed")} aria-label="Send message">
                            <ArrowUp className="h-5 w-5" />
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 w-full max-w-6xl px-4">
                      {SUGGESTED_QUESTIONS.map((question, idx) => (
                        <motion.button key={idx} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 + idx * 0.1 }} onClick={() => setInput(question)} className="px-4 py-2 rounded-full border border-gray-200 text-gray-500 text-sm hover:border-[#226fd3] hover:text-[#226fd3] transition-all bg-white cursor-pointer">
                          {question}
                        </motion.button>
                      ))}
                    </div>
                </motion.div>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto ai-chat-scrollbar" ref={scrollRef} data-lenis-prevent>
                <div className="flex flex-col pb-4">
                  {messages.map((message) => (
                    <div key={message.id} className="px-4 py-6 w-full text-base">
                      <div className="mx-auto flex gap-4 max-w-5xl px-4">
                        <div className={cn("relative flex-1 overflow-hidden leading-7", message.type === "user" && "max-w-[85%] ml-auto flex justify-end")}>
                          {message.type === "user" ? (
                            <div className="bg-[#226fd3] px-5 py-2.5 rounded-3xl text-white">{message.content}</div>
                          ) : (
                            <div className="text-gray-700 pt-1">
                              {message.isNew ? <TypingText text={message.content} onComplete={() => setMessages((prev) => prev.map((m) => m.id === message.id ? { ...m, isNew: false } : m))} /> : formatBotMessage(message.content)}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="px-4 py-6 w-full">
                      <div className="mx-auto flex gap-4 max-w-5xl px-4">
                        <div className="pt-2">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-[#226fd3] animate-bounce" style={{ animationDelay: "0ms" } as CSSProperties} />
                            <div className="w-2 h-2 rounded-full bg-[#226fd3] animate-bounce" style={{ animationDelay: "150ms" } as CSSProperties} />
                            <div className="w-2 h-2 rounded-full bg-[#226fd3] animate-bounce" style={{ animationDelay: "300ms" } as CSSProperties} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {hasStartedChat && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="px-4 py-1 shrink-0 bg-linear-to-t from-white via-white to-transparent">
                <div className="mx-auto max-w-5xl px-4">
                  <div className="relative flex items-center gap-2 bg-neutral-50 rounded-full p-2 pl-3 border border-neutral-200">
                    <motion.button type="button" onClick={toggleRecording} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className={cn("w-9 h-9 flex items-center justify-center transition-colors shrink-0 rounded-full cursor-pointer", isRecording ? "bg-red-500 text-white animate-pulse" : "text-gray-400 hover:text-gray-600")} aria-label={isRecording ? "Stop recording" : "Start recording"}>
                      {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                    </motion.button>
                    <textarea ref={textareaRef} value={input} onChange={handleTextareaChange} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); void handleSend(); } }} placeholder="Continue the conversation..." rows={1} className="flex-1 bg-transparent border-0 ring-0 focus:ring-0 outline-none focus:outline-none text-gray-900 placeholder:text-gray-400 py-2.5 resize-none text-[15px] leading-relaxed max-h-[150px] min-h-[24px]" />
                    <div className="shrink-0 mb-1 mr-1">
                      <motion.button onClick={() => void handleSend()} disabled={!input.trim()} whileTap={input.trim() ? { scale: 0.95 } : {}} className={cn("h-9 w-9 rounded-full flex items-center justify-center transition-all duration-200", input.trim() ? "bg-[#226fd3] text-white cursor-pointer" : "bg-gray-200 text-gray-400 cursor-not-allowed")} aria-label="Send message">
                        <ArrowUp className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>
                  <div className="text-center mt-1">
                    <p className="text-[11px] text-gray-400">Nexus can make mistakes. Check important info.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}

export const AiAssistantModal = memo(AiAssistantModalComponent);
