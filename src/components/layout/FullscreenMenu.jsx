import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function FullscreenMenu({ isOpen, onClose }) {
  const menuItems = [
    "Work",
    "Services",
    "About",
    "Contact",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] bg-black text-white"
        >
          <div className="flex justify-end p-8">
            <button
              onClick={onClose}
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            >
              <X size={26} />
            </button>
          </div>

          <div className="h-[80vh] flex flex-col items-center justify-center gap-8">
            {menuItems.map((item, index) => (
              <motion.h2
                key={item}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                className="text-5xl md:text-7xl font-bold cursor-pointer hover:text-gray-400 transition-colors"
              >
                {item}
              </motion.h2>
            ))}
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-gray-400 text-sm tracking-[0.3em] uppercase">
            Instagram • YouTube • Email
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FullscreenMenu;