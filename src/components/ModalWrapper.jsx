import React from "react";
import { useUIContext } from "../context/UIContext";
import { motion } from "framer-motion";

const ModalWrapper = ({ children, name }) => {
  const { closeModal } = useUIContext();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal"
      onClick={(e) => {
        e.stopPropagation();
        closeModal();
      }}
    >
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        transition={{ duration: 0.2 }}
        className={`modal-content ${name}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ModalWrapper;
