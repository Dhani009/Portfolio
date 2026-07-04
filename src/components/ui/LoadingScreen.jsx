import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const timer = setInterval(() => {
      value += 2;
      setProgress(value);

      if (value >= 100) {
        clearInterval(timer);

        setTimeout(() => {
          setLoading(false);
        }, 400);
      }
    }, 25);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{
            opacity: 0,
          }}
          className="fixed inset-0 z-[9999] bg-slate-950 flex items-center justify-center"
        >
          <div className="text-center w-80">

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="text-5xl font-black text-white"
            >
              Ahmad
              <span className="text-blue-500">
                {" "}Dhani
              </span>
            </motion.h1>

            <p className="text-gray-400 mt-3">
              Frontend Developer
            </p>

            <div className="mt-10 h-2 bg-slate-700 rounded-full overflow-hidden">

              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                animate={{
                  width: `${progress}%`,
                }}
              />

            </div>

            <p className="mt-4 text-blue-400 font-semibold">
              {progress}%
            </p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}