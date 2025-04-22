import Search from "../components/Search";
import pfp from "../assets/pfp.jpeg";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useUIContext } from "../context/UIContext";
import Stories from "../components/Stories";
import FriendsList from "../components/FriendsList";
import { Outlet } from "react-router";
import ConnectionsMenu from "../components/ConnectionsMenu";

const Connections = () => {
  const { setSearchBarOpen } = useUIContext();
  return (
    <div
      className="page connections"
      onClick={(e) => {
        e.stopPropagation();
        setSearchBarOpen(false);
      }}
    >
      <h1 className="title">Connections</h1>
      <motion.div
        className={`page-main `}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
      >
        <Search value="friends" />
        <Stories />
        <ConnectionsMenu />
        <Outlet />
      </motion.div>
      <Navbar />
    </div>
  );
};

export default Connections;
