import React from "react";
import Skills from "../Components/Skills";
import { MainLayout } from "../styles/Layouts";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.6, duration: 0.6 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
function ResumePage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <MainLayout>
        <Skills />
      </MainLayout>
    </motion.div>
  );
}

export default ResumePage;
