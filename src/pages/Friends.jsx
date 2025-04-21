import Search from "../components/Search";
import pfp from "../assets/pfp.jpeg";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useUIContext } from "../context/UIContext";
import Stories from "../components/Stories";

const Friends = () => {
  const { searchBarOpen, setSearchBarOpen } = useUIContext();
  return (
    <div
      className="page friends"
      onClick={(e) => {
        e.stopPropagation();
        setSearchBarOpen(false);
      }}
    >
      <h1 className="title">Friends</h1>
      <Stories />
      <motion.div
        className={`page-main padded `}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
      >
        <Search value="friends" />
        <div className={`friends-list ${searchBarOpen ? "blur" : ""}`}>
          <div className="friend">
            <img src={pfp} alt="" className="profile-image" />
            <div className="friend--info">
              <h3 className="friend--name">Big Snoop</h3>
              <p className="friend--date-added">Date</p>
            </div>
          </div>
          <div className="friend">
            <img src={pfp} alt="" className="profile-image" />
            <div className="friend--info">
              <h3 className="friend--name">Big Snoop</h3>
              <p className="friend--date-added">Date</p>
            </div>
          </div>
          <div className="friend">
            <img src={pfp} alt="" className="profile-image" />
            <div className="friend--info">
              <h3 className="friend--name">Big Snoop</h3>
              <p className="friend--date-added">Date</p>
            </div>
          </div>
          <div className="friend">
            <img src={pfp} alt="" className="profile-image" />
            <div className="friend--info">
              <h3 className="friend--name">Big Snoop</h3>
              <p className="friend--date-added">Date</p>
            </div>
          </div>
          <div className="friend">
            <img src={pfp} alt="" className="profile-image" />
            <div className="friend--info">
              <h3 className="friend--name">Big Snoop</h3>
              <p className="friend--date-added">Date</p>
            </div>
          </div>
          <div className="friend">
            <img src={pfp} alt="" className="profile-image" />
            <div className="friend--info">
              <h3 className="friend--name">Big Snoop</h3>
              <p className="friend--date-added">Date</p>
            </div>
          </div>
          <div className="friend">
            <img src={pfp} alt="" className="profile-image" />
            <div className="friend--info">
              <h3 className="friend--name">Big Snoop</h3>
              <p className="friend--date-added">Date</p>
            </div>
          </div>
          <div className="friend">
            <img src={pfp} alt="" className="profile-image" />
            <div className="friend--info">
              <h3 className="friend--name">Big Snoop</h3>
              <p className="friend--date-added">Date</p>
            </div>
          </div>
          <div className="friend">
            <img src={pfp} alt="" className="profile-image" />
            <div className="friend--info">
              <h3 className="friend--name">Big Snoop</h3>
              <p className="friend--date-added">Date</p>
            </div>
          </div>
          <div className="friend">
            <img src={pfp} alt="" className="profile-image" />
            <div className="friend--info">
              <h3 className="friend--name">Big Snoop</h3>
              <p className="friend--date-added">Date</p>
            </div>
          </div>
          <div className="friend">
            <img src={pfp} alt="" className="profile-image" />
            <div className="friend--info">
              <h3 className="friend--name">Big Snoop</h3>
              <p className="friend--date-added">Date</p>
            </div>
          </div>
        </div>
      </motion.div>
      <Navbar />
    </div>
  );
};

export default Friends;
