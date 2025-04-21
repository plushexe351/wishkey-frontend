import React, { createContext, useContext, useState } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [searchBarOpen, setSearchBarOpen] = useState(false);

  return (
    <UIContext.Provider
      value={{
        searchBarOpen,
        setSearchBarOpen,
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
