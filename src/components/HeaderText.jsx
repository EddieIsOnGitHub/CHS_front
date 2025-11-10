// src/components/HeaderText.jsx
import { motion } from "framer-motion";

const slideInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function HeaderText({ children, as = "h1", className = "" }) {
  const MotionTag = motion[as] || motion.h1;

  return (
    <MotionTag
      className={className}
      variants={slideInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }} // 60% of the element must be visible
    >
      {children}
    </MotionTag>
  );
}
