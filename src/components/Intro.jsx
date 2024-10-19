import { motion } from "framer-motion";

const Intro = () => {
  const text1 = "Hi";
  const text2Part1 = "I'm";
  const text2Part2 = "Rashid";
  const text3Part1 = "Web";
  const text3Part2 = "Developer";

  const spanVariants = {
    visible: { y: 0, scaleY: 1 },
    hover: {
      y: [-1, -2, -2.8, 0.9],
      scaleY: [1, 1.3, 0.8, 1, 1.2],
      color: "#FFD700",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <div className="h-screen p-8 sm:p-16 md:p-20 lg:p-40 text-white">
      <div className="font-comforter">
        {/* Hi Text */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
          {text1.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={spanVariants}
              initial="visible"
              whileHover="hover"
              animate="visible"
              className="inline-block"
            >
              {l}
            </motion.span>
          ))}
        </h1>

        {/* I'm Rashid Text */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-2">
          {text2Part1.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={spanVariants}
              initial="visible"
              whileHover="hover"
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
              animate="visible"
              className="inline-block"
            >
              {l}
            </motion.span>
          ))}
        </h1>

        {/* Web Developer Text */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
          {text3Part1.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={spanVariants}
              initial="visible"
              whileHover="hover"
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
