import { Edit2, Plus } from "react-feather";
import pfp from "../assets/pfp.jpeg";

const MyDreamsMenu = ({ blur }) => {
  return (
    <div className={`menu ${blur ? "blur" : ""}`}>
      <div className="row all-dreams">
        <div className="all-dreams-title">All dreams</div>
        <div className="number-of-dreams">3</div>
      </div>
      <div className="row">
        <div className="categories">
          <div className="actions">
            <div className="btn--add-category">
              <Plus className="icon" />
            </div>
            <div className="btn--add-category">
              <Edit2 className="icon" />
            </div>
          </div>

          <div className="category">
            <div className="category-title">X-mas</div>
            <div className="items-in-category">4</div>
          </div>
          <div className="category">
            <div className="category-title">Happy Birthday</div>
            <div className="items-in-category">3</div>
          </div>
          <div className="category">
            <div className="category-title">
              Happy Birthday long category name
            </div>
            <div className="items-in-category">3</div>
          </div>
        </div>
        <div className="friends">
          <div className="friends-title">Friends</div>
          <div className="friends-info">
            <div className="number-of-friends">21</div>
            <div className="friends-list">
              <img src={pfp} alt="friend" className="friend-image" />
              <img src={pfp} alt="friend" className="friend-image" />
              <img src={pfp} alt="friend" className="friend-image" />
              <img src={pfp} alt="friend" className="friend-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDreamsMenu;
