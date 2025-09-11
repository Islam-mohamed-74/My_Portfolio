"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AppLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const onLoaded = () => setTimeout(() => setShow(false), 600);
    if (document.readyState === "complete") onLoaded();
    else window.addEventListener("load", onLoaded);
    return () => window.removeEventListener("load", onLoaded);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] bg-[var(--eerie-black-2)] flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.9, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-3"
          >
            <motion.div
              className="w-[86px] h-[86px] rounded-full border-4 border-[var(--jet)] border-t-[var(--orange-yellow-crayola)]"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
            />
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-[var(--light-gray)] text-[14px]"
            >
              Loading...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
