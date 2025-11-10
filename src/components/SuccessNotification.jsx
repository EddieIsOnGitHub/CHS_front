import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const SuccessNotification = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-8 right-8 z-50 bg-green-100 border border-green-400 text-green-800 px-6 py-4 rounded-2xl shadow-xl flex items-center space-x-3"
        >
          <CheckCircle2 className="w-6 h-6 text-green-600" />
          <div className="text-sm font-semibold">
            Form submitted successfully!
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessNotification;
