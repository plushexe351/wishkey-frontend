import { AnimatePresence, motion } from "framer-motion";
import { Search as Sr } from "react-feather";
import { useUIContext } from "../context/UIContext";
import { useEffect, useRef } from "react";

const Search = ({ value }) => {
  const { searchBarOpen, setSearchBarOpen } = useUIContext();
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchBarOpen && inputRef.current) {
      inputRef.current?.focus();
    }
  }, [searchBarOpen]);

  return (
    <div className="searchContainer">
      <AnimatePresence>
        <motion.div
          className={`search ${searchBarOpen ? "active" : ""}`}
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{
            width: searchBarOpen ? "calc(100% - 2rem)" : "40px",
          }}
        >
          <Sr
            className="icon"
            onClick={(e) => {
              e.stopPropagation();
              setSearchBarOpen(true);
            }}
          />
          {searchBarOpen && (
            <motion.input
              ref={inputRef}
              initial={{ opacity: 0, width: "0%", x: -50 }}
              animate={{ opacity: 1, width: "100%", x: 0 }}
              exit={{ opacity: 0, width: "0%", x: -50 }}
              transition={{ duration: 0.2 }}
              type="text"
              placeholder={`Search ${value}...`}
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Search;
