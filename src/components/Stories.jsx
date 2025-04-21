import React from "react";
import pfp from "../assets/pfp.jpeg";
import pfp2 from "../assets/pfp2.jpeg";
import pfp3 from "../assets/pfp3.jpeg";
import pfp4 from "../assets/pfp4.jpeg";
import pfp5 from "../assets/pfp5.jpeg";
import { Plus } from "lucide-react";

const Stories = () => {
  return (
    <div className="stories">
      <div className="story">
        <img src={pfp} alt="" className="profile-image" />
        <div className="story--info">
          <h4 className="story--name">Big Snoop</h4>
        </div>
        <button className="btn--addStory">
          <Plus className="icon" size={15} />
        </button>
      </div>
      <div className="story">
        <img src={pfp2} alt="" className="profile-image" />
        <div className="story--info">
          <h4 className="story--name">Big Snoop</h4>
        </div>
      </div>
      <div className="story">
        <img src={pfp3} alt="" className="profile-image" />
        <div className="story--info">
          <h4 className="story--name">Big Snoop</h4>
        </div>
      </div>
      <div className="story">
        <img src={pfp4} alt="" className="profile-image" />
        <div className="story--info">
          <h4 className="story--name">Big Snoop</h4>
        </div>
      </div>
      <div className="story">
        <img src={pfp5} alt="" className="profile-image" />
        <div className="story--info">
          <h4 className="story--name">Big Snoop</h4>
        </div>
      </div>
      <div className="story">
        <img src={pfp2} alt="" className="profile-image" />
        <div className="story--info">
          <h4 className="story--name">Big Snoop</h4>
        </div>
      </div>
      <div className="story">
        <img src={pfp4} alt="" className="profile-image" />
        <div className="story--info">
          <h4 className="story--name">Big Snoop</h4>
        </div>
      </div>
      <div className="story">
        <img src={pfp3} alt="" className="profile-image" />
        <div className="story--info">
          <h4 className="story--name">Big Snoop</h4>
        </div>
      </div>
      <div className="story">
        <img src={pfp} alt="" className="profile-image" />
        <div className="story--info">
          <h4 className="story--name">Big Snoop</h4>
        </div>
      </div>
      <div className="story">
        <img src={pfp5} alt="" className="profile-image" />
        <div className="story--info">
          <h4 className="story--name">Big Snoop</h4>
        </div>
      </div>
    </div>
  );
};

export default Stories;
