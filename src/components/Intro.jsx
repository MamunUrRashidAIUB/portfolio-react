import { motion } from "framer-motion";

const Intro = () => {
  const text1 = "Hi";
  const text2Part1 = "I'm"; // Split I'm Rashid into two parts
  const text2Part2 = "Rashid";
  const text3Part1 = "Web";
  const text3Part2 = "Developer";

  const spanVariants = {
    visible: { y: 0, scaleY: 1 },
    hover: {
      y: [-1, -2, -2.8, 0.9],
      scaleY: [1, 1.3, 0.8, 1, 1.2],
      color:"#FFD700"
      
    },
  };

  return (
    <div className="h-screen p-40 text-8xl font-bold text-white">
      <div className="font-comforter">
        <h1 className="">
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

        <h1 className="">
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

          <span className="mx-4"></span>
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

        <h1 className="">
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
          <span className="mx-4"></span>
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
