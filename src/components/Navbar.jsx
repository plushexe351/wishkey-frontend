import { AnimatePresence, motion } from "framer-motion";
import { Gift, Plus, ShoppingBag, Users } from "react-feather";
import { useNavigate, useLocation } from "react-router";

const navitems = [
  { name: "My dreams", icon: Gift, path: "/mydreams" },
  { name: "Transactions", icon: ShoppingBag, path: "/transactions" },
  { name: "Connections", icon: Users, path: "/friends" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="navbar">
      {navitems.map((item, index) => (
        <motion.div
          whileTap={{ scale: 0.9 }}
          key={index}
          className={`nav-item ${
            location.pathname === item.path ? "active" : ""
          }`}
          onClick={() => {
            navigate(item.path);
          }}
        >
          {<item.icon size={20} className="icon" />}
          {location.pathname === item.path && (
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
      <button className="btn--add-dream">
        <Plus size={30} className="icon" />
      </button>
    </div>
  );
};

export default Navbar;
