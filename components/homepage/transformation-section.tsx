"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 870 870" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 0 C26.94909849 -0.65331148 51.07607722 5.70341472 72.6796875 22.15625 C73.6696875 22.81625 74.6596875 23.47625 75.6796875 24.15625 C75.6796875 24.81625 75.6796875 25.47625 75.6796875 26.15625 C76.25203125 26.38828125 76.824375 26.6203125 77.4140625 26.859375 C91.30871598 34.8128663 99.58376784 57.89413539 103.8671875 72.09375 C113.90430234 109.20679156 107.06182805 147.54125448 94.6796875 183.15625 C94.3604834 184.08453613 94.0412793 185.01282227 93.71240234 185.96923828 C87.58547173 203.59436527 79.8210722 220.39531989 71.6796875 237.15625 C71.36864075 237.797901 71.05759399 238.439552 70.73712158 239.10064697 C62.78863883 255.48137951 54.42408309 271.53818508 45.31103516 287.30810547 C43.01881772 291.31005228 40.78854526 295.34547854 38.55322266 299.37939453 C32.68942375 309.94929734 26.61430651 320.3661846 20.3581543 330.70825195 C14.56654108 340.29558326 8.97099923 349.98956124 3.39453125 359.703125 C0.90530573 364.0371206 -1.60251357 368.35943873 -4.12890625 372.671875 C-4.74459473 373.72310547 -5.3602832 374.77433594 -5.99462891 375.85742188 C-7.19591372 377.90465023 -8.3999424 379.95027141 -9.60693359 381.99414062 C-11.9846703 386.04141011 -14.33538861 390.06125573 -16.36328125 394.296875 C-19.6898004 401.2185633 -22.45313756 404.44472844 -29.16015625 408.171875 C-57.65431722 426.06437658 -75.18015972 460.67686053 -83.3203125 492.15625 C-83.63742187 493.36667969 -83.95453125 494.57710937 -84.28125 495.82421875 C-88.61153374 514.11002088 -89.31452002 533.18979035 -87.5703125 551.84375 C-87.4779834 552.97611084 -87.4779834 552.97611084 -87.38378906 554.13134766 C-86.86331425 558.91172526 -85.87776818 561.86112468 -82.3203125 565.15625 C-78.70481399 566.22960112 -75.289775 565.57883622 -71.8828125 564.09375 C-69.57000106 561.22586381 -69.50803928 558.7856345 -69.3203125 555.15625 C-69.47653076 554.39948975 -69.63274902 553.64272949 -69.79370117 552.86303711 C-76.16039497 520.13817197 -66.39663115 481.25523305 -48.29418945 453.78417969 C-35.03422975 434.37936061 -17.63129623 418.65711034 6.09375 413.81640625 C33.80886181 409.23014164 60.9914081 416.14099396 83.6796875 432.15625 C90.39265943 436.97207769 90.39265943 436.97207769 92.6796875 439.15625 C92.6796875 439.81625 92.6796875 440.47625 92.6796875 441.15625 C93.3396875 441.15625 93.9996875 441.15625 94.6796875 441.15625 C94.6796875 441.81625 94.6796875 442.47625 94.6796875 443.15625 C95.6696875 443.48625 96.6596875 443.81625 97.6796875 444.15625 C124.67239517 472.55821551 137.22044172 512.19493863 142.6796875 550.15625 C142.85701416 551.32333496 143.03434082 552.49041992 143.21704102 553.69287109 C144.89718717 565.57212804 145.01872631 577.41018234 144.99536133 589.39208984 C144.99221188 592.75521634 145.01571315 596.11745082 145.04101562 599.48046875 C145.0834019 613.92956082 144.00110173 627.8961074 141.6796875 642.15625 C141.48624756 643.35282227 141.29280762 644.54939453 141.09350586 645.78222656 C140.61159257 648.52552988 140.07698607 651.24570114 139.4921875 653.96875 C139.28352051 654.94408691 139.07485352 655.91942383 138.85986328 656.92431641 C129.07369584 700.86777062 109.64488723 740.46290107 78.6796875 773.15625 C78.18339844 773.68653809 77.68710937 774.21682617 77.17578125 774.76318359 C49.84440217 803.81588034 13.85301321 819.82213718 -25.3203125 825.15625 C-26.29097656 825.28902344 -27.26164063 825.42179688 -28.26171875 825.55859375 C-70.85238763 830.30534005 -117.73621719 821.0023425 -152.3203125 795.15625 C-153.1453125 794.55554688 -153.9703125 793.95484375 -154.8203125 793.3359375 C-174.31574914 778.52197084 -187.84141473 759.50709013 -199.3203125 738.15625 C-199.68753418 737.47401367 -200.05475586 736.79177734 -200.43310547 736.08886719 C-223.02313524 693.24314609 -228.29234442 641.84254724 -229.3203125 594.15625 C-229.34899414 592.8976416 -229.37767578 591.6390332 -229.40722656 590.34228516 C-231.44753256 485.11156648 -216.13415591 376.06239547 -186.3203125 252.15625 C-185.95893937 250.76107937 -185.59761129 249.36589706 -185.23632812 247.97070312 C-165.75968592 173.05418572 -138.78582039 89.20075497 -52.6953125 15.09375 C-36.74828169 6.0026353 -18.2972747 0.86104822 0 0 Z"
        fill="currentColor"
        transform="translate(477.3203125,29.84375)"
      />
    </svg>
  )
}

export default function TransformationSection() {
  const [animationState, setAnimationState] = useState<'chaos' | 'fixing' | 'clarity'>('chaos')

  const handleFix = () => {
    setAnimationState('fixing')
    // Staggered sequence to form the pile
    // Total duration of pile formation is ~1.5s (last item delay) + 0.6s (movement) = 2.1s
    // We wait 2.5s before transitioning to the clarity state to allow for a brief pause
    setTimeout(() => {
      setAnimationState('clarity')
    }, 2500)
  }

  return (
    <section className="w-full py-12 px-3 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-1">
          <h2 className="text-xl font-bold md:text-4xl text-balance">
            <span className="relative inline-block">
              <span className="relative z-10">Get clarity. Fast.</span>
              <svg
                className="absolute bottom-0 left-0 w-full h-[6px] md:h-[10px] text-primary select-none pointer-events-none"
                viewBox="0 0 200 40"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M5 20c40-5 90-5 130 2c35 5 55 5 65-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="28"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </svg>
            </span>{" "}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            No heavy setup. No months of onboarding. Just three steps from PDF chaos to controlled, searchable agreements.
          </p>
        </div>

        {/* Chaos Visual Container */}
        <div className="relative max-w-7xl mx-auto min-h-[400px] md:min-h-[550px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {animationState !== 'clarity' ? (
              <motion.div
                key="chaos"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.5, 
                  filter: "blur(10px)",
                  transition: { duration: 0.5, ease: "easeIn" } 
                }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-[400px] md:h-[500px]"
              >
                {/* Image Placeholder 3 - Center Biggest (Stays in position) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={animationState === 'fixing' ? { 
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                    rotate: 0,
                    zIndex: 20,
                  } : {
                    opacity: 1, 
                    scale: 1, 
                    rotate: 0,
                  }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-1/2 md:bottom-1/3 left-1/2 -translate-x-1/2 translate-y-1/2 w-44 md:w-[36rem] bg-white rounded-sm md:rounded-md shadow-xl border border-gray-200 overflow-hidden z-20"
                >
                  <img src="https://cdn.prod.website-files.com/66b1de5cb0d672ddaa14ef22/690dc9afa7b83318570a6d32_Monday.com.png" alt="Main chaotic document" className="w-full h-28 md:h-80 object-cover" />
                </motion.div>

                {/* Image Placeholder 1 - Left 1 (moves to top of 3) */}
                <motion.div
                  initial={{ opacity: 0, x: -20, rotate: -8 }}
                  animate={animationState === 'fixing' ? {
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                    rotate: 0,
                    zIndex: 21,
                    opacity: 1,
                  } : {
                    opacity: 1,
                    x: 0,
                    rotate: -5,
                  }}
                  transition={animationState === 'fixing' ? { duration: 0.6, delay: 0.1 } : { delay: 0.1 }}
                  className="absolute top-24 md:top-10 left-0 md:left-[12.5%] w-40 md:w-[32rem] bg-white rounded-sm md:rounded-md shadow-lg border border-gray-200 overflow-hidden z-10"
                >
                  <img src="https://cdnb.ganttpro.com/uploads/2021/11/wrike-for-small-business-project-management.png" alt="Chaos document 1" className="w-full h-28 md:h-80 object-cover" />
                </motion.div>

                {/* Image Placeholder 4 - Left 2 (moves to top of pile) */}
                <motion.div
                  initial={{ opacity: 0, x: -25, rotate: 2 }}
                  animate={animationState === 'fixing' ? {
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                    rotate: 0,
                    zIndex: 23,
                    opacity: 1,
                  } : {
                    opacity: 1,
                    x: 0,
                    rotate: 10,
                  }}
                  transition={animationState === 'fixing' ? { duration: 0.6, delay: 0.5 } : { delay: 0.4 }}
                  className="absolute bottom-24 md:bottom-8 left-0 md:left-12 w-32 md:w-[28rem] bg-white rounded-sm md:rounded-md shadow-lg border border-gray-200 overflow-hidden z-25"
                >
                  <img src="https://sanity-images.imgix.net/production/790addddeddb4b254864c57b547c780765f28232-1096x720.png?w=1096&auto=format%2Ccompress" alt="Chaos document 2" className="w-full h-24 md:h-72 object-cover" />
                </motion.div>

                {/* Image Placeholder 2 - Right 1 (moves to top of 3 and 1) */}
                <motion.div
                  initial={{ opacity: 0, x: 10, rotate: 0 }}
                  animate={animationState === 'fixing' ? {
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                    rotate: 0,
                    zIndex: 22,
                    opacity: 1,
                  } : {
                    opacity: 1,
                    x: 0,
                    rotate: -1,
                  }}
                  transition={animationState === 'fixing' ? { duration: 0.6, delay: 0.3 } : { delay: 0.2 }}
                  className="absolute top-28 md:top-8 right-0 md:right-[12.5%] w-36 md:w-[28rem] bg-white rounded-sm md:rounded-md shadow-lg border border-gray-200 overflow-hidden z-15"
                >
                  <img src="https://sanity-images.imgix.net/production/790addddeddb4b254864c57b547c780765f28232-1096x720.png?w=1096&auto=format%2Ccompress" alt="Chaos document 3" className="w-full h-24 md:h-76 object-cover" />
                </motion.div>

                {/* Image Placeholder 5 - Right 2 (moves to top of pile) */}
                <motion.div
                  initial={{ opacity: 0, x: 5, rotate: -5 }}
                  animate={animationState === 'fixing' ? {
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                    rotate: 0,
                    zIndex: 24,
                    opacity: 1,
                  } : {
                    opacity: 1,
                    x: 0,
                    rotate: -3,
                  }}
                  transition={animationState === 'fixing' ? { duration: 0.6, delay: 0.7 } : { delay: 0.45 }}
                  className="absolute bottom-28 md:bottom-16 right-0 md:right-10 w-36 md:w-[28rem] bg-white rounded-sm md:rounded-md shadow-lg border border-gray-200 overflow-hidden z-20"
                >
                  <img src="https://cdnb.ganttpro.com/uploads/2021/11/asana-for-small-business-project-management.png" alt="Chaos document 4" className="w-full h-24 md:h-[17rem] object-cover" />
                </motion.div>

                {/* Card 1 - Slack notification (moves to top of pile) */}
                <motion.div
                  initial={{ opacity: 0, rotate: -2 }}
                  animate={animationState === 'fixing' ? {
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                    rotate: 0,
                    zIndex: 25,
                    opacity: 1,
                  } : {
                    opacity: 1,
                    x: 0,
                    rotate: -5,
                  }}
                  transition={animationState === 'fixing' ? { duration: 0.6, delay: 0.9 } : { delay: 0.35 }}
                  className="absolute top-[38%] md:top-1/3 left-0 md:left-8 -translate-y-1/2 w-32 md:w-72 bg-white rounded-sm md:rounded-md shadow-lg border border-gray-200 px-2 py-2 z-30"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0">
                      <Logo className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-xs text-gray-500 line-clamp-1">New message in <span className="font-medium text-gray-700">#reminders</span></p>
                      <p className="text-[10px] md:text-sm font-medium text-gray-900">fmSMS</p>
                      <p className="text-[8px] md:text-xs text-gray-500">received</p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 2 - Email notification (moves to top of pile) */}
                <motion.div
                  initial={{ opacity: 0, rotate: 2 }}
                  animate={animationState === 'fixing' ? {
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                    rotate: 0,
                    zIndex: 26,
                    opacity: 1,
                  } : {
                    opacity: 1,
                    x: 0,
                    rotate: 5,
                  }}
                  transition={animationState === 'fixing' ? { duration: 0.6, delay: 1.1 } : { delay: 0.5 }}
                  className="absolute bottom-[42%] md:bottom-[38%] right-0 md:right-32 -translate-y-1/2 w-32 md:w-72 bg-white rounded-sm md:rounded-md shadow-lg border border-gray-200 px-2 py-2 z-30"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center text-white shrink-0">
                      <Logo className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-sm font-medium text-gray-900">Anna Huber</p>
                      <p className="text-[8px] md:text-xs text-gray-500">Contract update needed?</p>
                    </div>
                  </div>
                </motion.div>

                {/* Yellow Sticky Note - Top Right (moves to top of pile) */}
                <motion.div
                  initial={{ opacity: 0, rotate: -8 }}
                  animate={animationState === 'fixing' ? {
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                    rotate: 0,
                    zIndex: 27,
                    opacity: 1,
                  } : {
                    opacity: 1,
                    x: 0,
                    rotate: -10,
                  }}
                  transition={animationState === 'fixing' ? { duration: 0.6, delay: 1.3 } : { delay: 0.25 }}
                  className="absolute top-20 md:top-2 right-10 md:right-36 w-20 md:w-48 h-14 md:h-40 z-40 font-(family-name:--font-caveat)"
                >
                  {/* Long perspective shadow connected to top corners */}
<div 
  className="absolute top-0 left-0 w-[300%] h-[150%]" // Wider container to allow drawing to the right
  style={{
    background: 'linear-gradient(to bottom right, rgba(0,0,0,0.18), rgba(0,0,0,0.1))',
    clipPath: 'polygon(0% 0%, 33.33% 0%, 43% 100%, 10% 100%)', // Reduced the rightward skew
    zIndex: -1,
    filter: 'blur(10px)',
    maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)', // Tiny distance fade
  }}
/>
                  {/* Card content */}
                  <div className="relative w-full h-full bg-[#fdec44] flex flex-col overflow-hidden border border-black/5">
                    <div className="h-3 md:h-6 bg-[#eadf2c] w-full" />
                    <div className="flex-1 flex items-start justify-start p-1.5 md:p-5">
                      <p className="text-sm md:text-2xl text-gray-800 leading-tight text-left">Why is this so slow?</p>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Button - Center */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: animationState === 'chaos' ? 1 : 0, 
                    scale: animationState === 'chaos' ? 1 : 0.8,
                    pointerEvents: animationState === 'chaos' ? 'auto' : 'none'
                  }}
                  transition={{ delay: animationState === 'chaos' ? 0.6 : 0, duration: 0.3 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
                >
                  <motion.div 
                    className="relative p-px md:p-[4px] rounded-full bg-gradient-to-r from-primary via-[#f3f1ef] to-primary animate-pulse hover:animate-none overflow-hidden group shadow-xl transition-transform hover:scale-105 active:scale-95"
                  >
                    <motion.button
                      onClick={handleFix}
                      className="relative px-3 py-2 md:px-4 md:py-3 text-[10px] md:text-base font-bold bg-black text-white rounded-full flex items-center gap-2 cursor-pointer transition-colors group-hover:bg-black/90"
                    >
                      Click to fix the chaos
                      <svg 
                        className="-ml-1 w-3 h-3 md:w-5 md:h-5 group-hover:rotate-12 transition-transform outline-none" 
                        viewBox="0 0 50 50" 
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M46.4375 -0.03125C46.269531 -0.0390625 46.097656 -0.0234375 45.9375 0C45.265625 0.09375 44.6875 0.421875 44.28125 1.03125L44.25 1.09375L44.21875 1.125L35.65625 17.21875C34.691406 16.859375 33.734375 16.648438 32.84375 16.625C31.882813 16.601563 30.976563 16.75 30.15625 17.09375C28.574219 17.753906 27.378906 19.046875 26.59375 20.6875C26.558594 20.738281 26.527344 20.789063 26.5 20.84375C26.496094 20.851563 26.503906 20.867188 26.5 20.875C26.488281 20.894531 26.476563 20.917969 26.46875 20.9375C26.457031 20.976563 26.445313 21.019531 26.4375 21.0625C25.894531 22.417969 25.269531 23.636719 24.5625 24.71875C24.554688 24.730469 24.539063 24.738281 24.53125 24.75C24.441406 24.828125 24.367188 24.925781 24.3125 25.03125C24.308594 25.039063 24.316406 25.054688 24.3125 25.0625C24.277344 25.113281 24.246094 25.164063 24.21875 25.21875C21.832031 28.636719 18.722656 30.695313 15.78125 31.96875C11.773438 33.703125 7.9375 33.886719 7.09375 33.8125C6.691406 33.773438 6.304688 33.976563 6.113281 34.332031C5.925781 34.6875 5.964844 35.125 6.21875 35.4375C17.613281 49.5 34.375 50 34.375 50C34.574219 50.003906 34.769531 49.949219 34.9375 49.84375C34.9375 49.84375 37.007813 48.53125 39.5 45.40625C41.371094 43.058594 43.503906 39.664063 45.34375 34.96875C45.355469 34.957031 45.363281 34.949219 45.375 34.9375C45.605469 34.722656 45.722656 34.410156 45.6875 34.09375C45.6875 34.082031 45.6875 34.074219 45.6875 34.0625C46.171875 32.753906 46.640625 31.378906 47.0625 29.875C47.078125 29.8125 47.089844 29.75 47.09375 29.6875C47.09375 29.675781 47.09375 29.667969 47.09375 29.65625C48.425781 26.21875 46.941406 22.433594 43.75 20.78125L49.9375 3.625L49.9375 3.59375L49.96875 3.5625C50.171875 2.851563 49.9375 2.167969 49.5625 1.625C49.207031 1.113281 48.6875 0.710938 48.0625 0.4375L48.0625 0.40625C48.042969 0.398438 48.019531 0.414063 48 0.40625C47.988281 0.402344 47.980469 0.378906 47.96875 0.375C47.480469 0.144531 46.945313 -0.0117188 46.4375 -0.03125 Z M 46.3125 2.0625C46.539063 2.027344 46.835938 2.027344 47.15625 2.1875L47.1875 2.21875L47.21875 2.21875C47.542969 2.347656 47.8125 2.566406 47.9375 2.75C48.0625 2.933594 48.027344 3.042969 48.03125 3.03125L41.9375 19.9375C41.203125 19.605469 40.695313 19.371094 39.65625 18.90625C38.882813 18.558594 38.148438 18.222656 37.5 17.9375L45.9375 2.15625C45.929688 2.164063 46.085938 2.097656 46.3125 2.0625 Z M 4 8C1.800781 8 0 9.800781 0 12C0 14.199219 1.800781 16 4 16C6.199219 16 8 14.199219 8 12C8 9.800781 6.199219 8 4 8 Z M 4 10C5.117188 10 6 10.882813 6 12C6 13.117188 5.117188 14 4 14C2.882813 14 2 13.117188 2 12C2 10.882813 2.882813 10 4 10 Z M 13 11C11.894531 11 11 11.894531 11 13C11 14.105469 11.894531 15 13 15C14.105469 15 15 14.105469 15 13C15 11.894531 14.105469 11 13 11 Z M 11.5 18C8.472656 18 6 20.472656 6 23.5C6 26.527344 8.472656 29 11.5 29C14.527344 29 17 26.527344 17 23.5C17 20.472656 14.527344 18 11.5 18 Z M 32.8125 18.625C33.507813 18.644531 34.269531 18.785156 35.125 19.125C35.144531 19.136719 35.167969 19.148438 35.1875 19.15625C35.414063 19.511719 35.839844 19.6875 36.25 19.59375C36.363281 19.640625 36.351563 19.636719 36.46875 19.6875C37.144531 19.980469 37.996094 20.339844 38.84375 20.71875C40.085938 21.273438 40.871094 21.613281 41.59375 21.9375C41.613281 21.960938 41.632813 21.980469 41.65625 22C41.871094 22.296875 42.230469 22.453125 42.59375 22.40625C42.605469 22.40625 42.613281 22.40625 42.625 22.40625C45.015625 23.5 46.070313 26.105469 45.25 28.625C44.855469 28.613281 44.554688 28.632813 43.8125 28.46875C43.257813 28.347656 42.71875 28.152344 42.3125 27.90625C41.90625 27.660156 41.671875 27.417969 41.5625 27.09375C41.476563 26.8125 41.269531 26.585938 40.996094 26.472656C40.726563 26.355469 40.417969 26.367188 40.15625 26.5C39.820313 26.667969 38.972656 26.605469 38.21875 26.21875C37.84375 26.027344 37.507813 25.757813 37.28125 25.53125C37.054688 25.304688 36.992188 25.089844 37 25.125C36.945313 24.832031 36.765625 24.578125 36.503906 24.433594C36.246094 24.289063 35.933594 24.269531 35.65625 24.375C35.628906 24.386719 35.296875 24.417969 34.90625 24.34375C34.515625 24.269531 34.0625 24.109375 33.625 23.90625C33.1875 23.703125 32.785156 23.457031 32.53125 23.25C32.277344 23.042969 32.253906 22.828125 32.28125 23.09375C32.214844 22.566406 31.75 22.179688 31.21875 22.21875C30.214844 22.3125 29.273438 21.574219 28.71875 21.09375C29.304688 20.105469 30.03125 19.316406 30.9375 18.9375C31.492188 18.707031 32.117188 18.605469 32.8125 18.625 Z M 11.5 20C13.445313 20 15 21.554688 15 23.5C15 25.445313 13.445313 27 11.5 27C9.554688 27 8 25.445313 8 23.5C8 21.554688 9.554688 20 11.5 20 Z M 27.8125 22.96875C28.507813 23.46875 29.472656 23.988281 30.625 24.09375C30.808594 24.363281 31.007813 24.582031 31.25 24.78125C31.683594 25.140625 32.21875 25.457031 32.78125 25.71875C33.34375 25.980469 33.933594 26.199219 34.53125 26.3125C34.839844 26.371094 35.15625 26.253906 35.46875 26.25C35.617188 26.476563 35.683594 26.777344 35.875 26.96875C36.28125 27.375 36.765625 27.71875 37.3125 28C38.125 28.417969 39.101563 28.5625 40.0625 28.4375C40.390625 28.929688 40.785156 29.34375 41.25 29.625C41.933594 30.035156 42.679688 30.285156 43.375 30.4375C43.863281 30.542969 44.308594 30.589844 44.71875 30.625C44.441406 31.523438 44.140625 32.367188 43.84375 33.1875C43.484375 33.175781 43.042969 33.15625 42.5625 33.0625C41.46875 32.851563 40.433594 32.367188 40 31.53125C39.765625 31.09375 39.246094 30.894531 38.78125 31.0625C38.285156 31.238281 37.386719 31.164063 36.625 30.8125C35.863281 30.460938 35.285156 29.851563 35.15625 29.40625C35.074219 29.136719 34.878906 28.914063 34.621094 28.796875C34.367188 28.675781 34.074219 28.671875 33.8125 28.78125C33.570313 28.882813 32.625 28.855469 31.84375 28.5C31.0625 28.144531 30.558594 27.546875 30.5 27.21875C30.449219 26.941406 30.285156 26.703125 30.046875 26.554688C29.808594 26.40625 29.519531 26.363281 29.25 26.4375C28.304688 26.691406 27.566406 26.355469 26.96875 25.90625C26.761719 25.753906 26.609375 25.585938 26.46875 25.4375C26.953125 24.667969 27.402344 23.851563 27.8125 22.96875 Z M 25.3125 27.09375C25.460938 27.230469 25.601563 27.363281 25.78125 27.5C26.519531 28.054688 27.65625 28.449219 28.9375 28.375C29.402344 29.246094 30.15625 29.914063 31.03125 30.3125C31.894531 30.707031 32.816406 30.832031 33.71875 30.71875C34.21875 31.535156 34.914063 32.226563 35.78125 32.625C36.707031 33.050781 37.746094 33.160156 38.75 33C39.683594 34.167969 41.011719 34.804688 42.1875 35.03125C42.5 35.089844 42.808594 35.128906 43.09375 35.15625C41.429688 39.175781 39.566406 42.117188 37.9375 44.15625C35.851563 46.769531 34.441406 47.757813 34.125 47.96875C33.769531 47.953125 31.164063 47.769531 27.5 46.75C27.800781 46.554688 28.125 46.351563 28.46875 46.09375C30.136719 44.84375 32.320313 42.804688 34.4375 39.65625C34.660156 39.332031 34.675781 38.910156 34.472656 38.574219C34.269531 38.234375 33.890625 38.046875 33.5 38.09375C33.207031 38.125 32.945313 38.285156 32.78125 38.53125C30.796875 41.484375 28.753906 43.375 27.25 44.5C25.820313 45.570313 24.992188 45.902344 24.90625 45.9375C22.65625 45.144531 20.164063 44.058594 17.625 42.53125C17.992188 42.410156 18.382813 42.25 18.8125 42.0625C20.710938 41.234375 23.25 39.6875 25.84375 36.78125C26.15625 36.46875 26.226563 35.988281 26.019531 35.601563C25.808594 35.210938 25.371094 35.003906 24.9375 35.09375C24.707031 35.132813 24.496094 35.257813 24.34375 35.4375C21.9375 38.128906 19.683594 39.496094 18.03125 40.21875C16.378906 40.941406 15.4375 41 15.4375 41C15.394531 41.007813 15.351563 41.019531 15.3125 41.03125C13.238281 39.570313 11.167969 37.792969 9.21875 35.65625C11.121094 35.507813 13.570313 35.121094 16.59375 33.8125C19.578125 32.519531 22.761719 30.410156 25.3125 27.09375Z"/>
                      </svg>
                    </motion.button>
                  </motion.div>
                </motion.div>

                {/* Bottom Right Handwritten Note (moves to top of pile) */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={animationState === 'fixing' ? {
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                    rotate: 0,
                    zIndex: 28,
                    opacity: 1,
                  } : {
                    opacity: 1,
                    x: 0,
                    rotate: 0,
                  }}
                  transition={animationState === 'fixing' ? { duration: 0.6, delay: 1.5 } : { delay: 0.7 }}
                  className="absolute bottom-8 md:-bottom-12 right-5 md:right-32 flex flex-col items-center text-center font-(family-name:--font-caveat) z-30"
                >
                  <div className="relative w-full">
                    {animationState === 'chaos' && (
                      <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-400 mx-auto" viewBox="0 0 100 100" fill="none">
                        <path
                          d="M50 80 C 60 60, 50 30, 20 20"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          fill="none"
                        />
                        <path
                          d="M28 15 L 18 20 L 25 28"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    )}
                  </div>
                  <p className={`text-xs md:text-lg text-gray-500 leading-tight ${animationState === 'chaos' ? '-rotate-12' : ''}`}>
                    {animationState === 'chaos' ? (
                      <>Don't be shy, click the button.<br />We know you want it.</>
                    ) : (
                      "Organizing..."
                    )}
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="clarity"
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  type: "spring", 
                  damping: 15, 
                  stiffness: 100,
                  duration: 0.8
                }}
                className="relative w-full h-full flex items-center justify-center min-h-[400px] md:min-h-[550px]"
              >
                {/* Clean Dashboard Preview */}
                <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                  <img 
                    src="/heroimage.png" 
                    alt="Clean Dashboard" 
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Reset Button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  onClick={() => setAnimationState('chaos')}
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-sm text-neutral-500 hover:text-neutral-600 underline cursor-pointer"
                >
                  ← Back to chaos
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
