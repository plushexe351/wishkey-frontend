import React, { createContext, useContext, useState } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [showEditCategoryModal, setShowEditCategoryModal] = useState(false);
  const [showCategoryActions, setShowCategoryActions] = useState(false);

  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  return (
    <UIContext.Provider
      value={{
        searchBarOpen,
        setSearchBarOpen,

        showAddCategoryModal,
        setShowAddCategoryModal,

        showEditCategoryModal,
        setShowEditCategoryModal,

        showCategoryActions,
        setShowCategoryActions,

        activeModal,
        openModal,
        closeModal,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUIContext = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUIContext must be used within a UIProvider");
  }
  return context;
};
