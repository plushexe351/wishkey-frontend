import { AnimatePresence, motion } from "framer-motion";
import {
  FolderPlus,
  Gift,
  Plus,
  ShoppingBag,
  UserPlus,
  Users,
  Cloud,
} from "react-feather";
import { useNavigate, useLocation } from "react-router";
import { useUIContext } from "../context/UIContext";
import ModalWrapper from "./ModalWrapper";

const navitems = [
  { name: "My dreams", icon: Gift, path: "/mydreams" },
  { name: "Transactions", icon: ShoppingBag, path: "/transactions" },
  { name: "Connections", icon: Users, path: "/connections" },
];

const Navbar = () => {
  const { openModal, activeModal } = useUIContext();

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="navbar">
      {navitems.map((item, index) => (
        <motion.div
          whileTap={{ scale: 0.9 }}
          key={index}
          className={`nav-item ${
            location.pathname.startsWith(item.path) ? "active" : ""
          }`}
          onClick={() => {
            navigate(item.path);
          }}
        >
          {<item.icon size={20} className="icon" />}
          {location.pathname.startsWith(item.path) && (
            <motion.p
              initial={{ opacity: 0, x: -50, width: "0%" }}
              animate={{ opacity: 1, x: 0, width: "auto" }}
              exit={{ opacity: 0, x: -50, width: 0 }}
              transition={{ duration: 0.2 }}
              className="item-name"
            >
              {item.name}
            </motion.p>
          )}
        </motion.div>
      ))}
      <button className="btn--menu-add" onClick={() => openModal("menu-add")}>
        <Plus size={30} className="icon" />
      </button>
      <AnimatePresence>
        {activeModal === "menu-add" && (
          <ModalWrapper name="menu-add">
            <div className="action">
              Add Dream <Cloud size={15} className="icon" />
            </div>
            <div className="action">
              Add Category <FolderPlus size={15} className="icon" />
            </div>
            <div className="action">
              Add Connection <UserPlus size={15} className="icon" />
            </div>
          </ModalWrapper>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
