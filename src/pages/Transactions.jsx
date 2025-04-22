import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import TransactionsMenu from "../components/TransactionsMenu";
import { motion } from "framer-motion";

const Transactions = () => {
  return (
    <div className="page transactions">
      <motion.div
        className={`page-main`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0, y: -50 }}
      >
        <div className="title">Transactions</div>
        <div className="page-main">
          <TransactionsMenu />
          <Outlet />
        </div>
      </motion.div>
      <Navbar />
    </div>
  );
};

export default Transactions;
