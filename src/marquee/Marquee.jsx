import React from "react";
import { motion, useInView, useAnimation, animate } from "framer-motion";
import "./Marquee.css";

// const marqueeVariants = {
//   animate: {
//     x: [0, -1035],
//     transition: {
//       x: {
//         repeat: Infinitely,
//       },
//     },
//   },
// };

function Marquee() {
  return (
    <div>
      <div className="marquee">
        <motion.div
          animate={{
            x: [0, -1035],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 5,
              ease: "linear",
            },
          }}
          className="track"
        >
          <h1>
            About. About. About. About. About. About. About. About. About.
            About. About. About. About. About. About. About. About. About.
            About. About. About. About. About. About. About. About. About.
            About. About. About. About. About. About. About. About. About.
            About. About. About. About. About. About. About. About. About.
            About. About. About. About.
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
