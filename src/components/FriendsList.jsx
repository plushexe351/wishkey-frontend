import React from "react";
import pfp from "../assets/pfp.jpeg";
import pfp2 from "../assets/pfp2.jpeg";
import pfp3 from "../assets/pfp3.jpeg";
import pfp4 from "../assets/pfp4.jpeg";
import pfp5 from "../assets/pfp5.jpeg";
import { useUIContext } from "../context/UIContext";
import { motion } from "framer-motion";

const FriendsList = () => {
  const { searchBarOpen } = useUIContext();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.2 }}
      className={`friends-list ${searchBarOpen ? "blur" : ""}`}
    >
      <div className="friend">
        <img src={pfp} alt="" className="profile-image" />
        <div className="friend--info">
          <h3 className="friend--name">Big Snoop</h3>
          <p className="friend--date-added">Date</p>
        </div>
      </div>
      <div className="friend">
        <img src={pfp2} alt="" className="profile-image" />
        <div className="friend--info">
          <h3 className="friend--name">Big Snoop</h3>
          <p className="friend--date-added">Date</p>
        </div>
      </div>
      <div className="friend">
        <img src={pfp3} alt="" className="profile-image" />
        <div className="friend--info">
          <h3 className="friend--name">Big Snoop</h3>
          <p className="friend--date-added">Date</p>
        </div>
      </div>
      <div className="friend">
        <img src={pfp5} alt="" className="profile-image" />
        <div className="friend--info">
          <h3 className="friend--name">Big Snoop</h3>
          <p className="friend--date-added">Date</p>
        </div>
      </div>
      <div className="friend">
        <img src={pfp4} alt="" className="profile-image" />
        <div className="friend--info">
          <h3 className="friend--name">Big Snoop</h3>
          <p className="friend--date-added">Date</p>
        </div>
      </div>
      <div className="friend">
        <img src={pfp2} alt="" className="profile-image" />
        <div className="friend--info">
          <h3 className="friend--name">Big Snoop</h3>
          <p className="friend--date-added">Date</p>
        </div>
      </div>
      <div className="friend">
        <img src={pfp3} alt="" className="profile-image" />
        <div className="friend--info">
          <h3 className="friend--name">Big Snoop</h3>
          <p className="friend--date-added">Date</p>
        </div>
      </div>
      <div className="friend">
        <img src={pfp5} alt="" className="profile-image" />
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
        <img src={pfp3} alt="" className="profile-image" />
        <div className="friend--info">
          <h3 className="friend--name">Big Snoop</h3>
          <p className="friend--date-added">Date</p>
        </div>
      </div>
      <div className="friend">
        <img src={pfp4} alt="" className="profile-image" />
        <div className="friend--info">
          <h3 className="friend--name">Big Snoop</h3>
          <p className="friend--date-added">Date</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FriendsList;
