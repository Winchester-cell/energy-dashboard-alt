import { motion } from "framer-motion";

export default function ECG({ bpm = 40 }) {

  const duration = 60 / bpm; 

  return (
    <svg viewBox="0 0 150 50" className="h-full w-full text-blue-400">
      <motion.path
        d="M0 25 L20 25 L30 5 L40 45 L50 25 L600 25 L100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ strokeDasharray: 600, strokeDashoffset: 600 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </svg>
  );
}
