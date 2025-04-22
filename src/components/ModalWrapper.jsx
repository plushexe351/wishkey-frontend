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
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
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
