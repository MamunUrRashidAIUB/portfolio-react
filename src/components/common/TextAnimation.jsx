import { motion } from "framer-motion";

export const spanVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.3,
    },
  }),
  hover: {
    y: [-1, -2, -2.8, 0.9],
    scaleY: [1, 1.3, 0.8, 1, 1.2],
    color: "#00ffdd",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      duration: 0.8,
    },
  },
  tap: {
    y: [-1, -2, -2.8, 0.9],
    scaleY: [1, 1.3, 0.8, 1, 1.2],
    color: "#00ffdd",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      duration: 0.8,
    },
  },
};

export const renderAnimatedText = (text, customStartIndex = 0) =>
  text.split("").map((l, i) => (
    <motion.span
      key={i}
      variants={spanVariants}
      initial="hidden"
      whileHover="hover"
      whileTap="tap"
      animate="visible"
      custom={i + customStartIndex}
      className="inline-block"
    >
      {l}
    </motion.span>
  ));
