import React from "react";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function Designation() {
  return (
    <div
      className="designtaion"
      style={{ overflow: "hidden", position: "relative" }}
    >
      <motion.h3
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 100, opacity: 0 }}
        transition={{ delay: 2 }}
        style={{ position: "absolute" }}
      >
        Full Stack Developer
      </motion.h3>
      <motion.h3
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 200, opacity: 1 }}
        transition={{}}
        style={{ position: "absolute" }}
      >
        iOS App Developer
      </motion.h3>
    </div>
  );
}

export default Designation;
