import { motion } from "framer-motion";

const Intro = () => {
  const text1 = "Hi";
  const text2Part1 = "I'm";
  const text2Part2 = "Rashid,";
  const text3Part1 = "Web";
  const text3Part2 = "Developer";

  const spanVariants = {
    visible: { y: 0, scaleY: 1 },
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

  return (
    <div className="h-screen p-12 sm:p-16 md:p-40 lg:p-40 text-white">
      <div className="font-comforter">
        {/* Hi Text */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl font-bold">
          {text1.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={spanVariants}
              initial="visible"
              whileHover="hover"
              whileTap="tap" // Added for click animation
              animate="visible"
              className="inline-block"
            >
              {l}
            </motion.span>
          ))}
        </h1>

        {/* I'm Rashid Text */}
        <h1 className="text-5xl sm:text-7xl md:text-7xl lg:text-8xl mt-2">
          {text2Part1.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={spanVariants}
              initial="visible"
              whileHover="hover"
              whileTap="tap" // Added for click animation
              animate="visible"
              className="inline-block"
            >
              {l}
            </motion.span>
          ))}
          <span className="mx-2"></span>
          {text2Part2.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={spanVariants}
              initial="visible"
              whileHover="hover"
              whileTap="tap" // Added for click animation
              animate="visible"
              className="inline-block"
            >
              {l}
            </motion.span>
          ))}
        </h1>

        {/* Web Developer Text */}
        <h1 className="text-4xl sm:text-7xl md:text-7xl lg:text-8xl mt-2">
          {text3Part1.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={spanVariants}
              initial="visible"
              whileHover="hover"
              whileTap="tap" // Added for click animation
              animate="visible"
              className="inline-block"
            >
              {l}
            </motion.span>
          ))}
          <span className="mx-2"></span>
          {text3Part2.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={spanVariants}
              initial="visible"
              whileHover="hover"
              whileTap="tap" // Added for click animation
              animate="visible"
              className="inline-block"
            >
              {l}
            </motion.span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default Intro;
