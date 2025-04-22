import { useLocation, useNavigate } from "react-router";
import { useUIContext } from "../context/UIContext";

// Note : Hardcoded data for now
// TODO : Fetch data from the server

const menuItems = [
  { name: "All", path: "/transactions/all" },
  { name: "You Gifted", path: "/transactions/giftsReceived" },
  { name: "They Gifted", path: "/transactions/giftsSent" },
];

const TransactionsMenu = () => {
  const { searchBarOpen } = useUIContext();
  const Navigate = useNavigate();
  const Location = useLocation();
  return (
    <div className={`tabs-menu ${searchBarOpen ? "blur" : ""}`}>
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`menu-item ${
            Location.pathname.startsWith(item.path) ? "active" : ""
          }`}
          onClick={() => {
            Navigate(item.path);
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default TransactionsMenu;
