import { Edit2, Plus } from "react-feather";
import pfp from "../assets/pfp.jpeg";
import pfp2 from "../assets/pfp2.jpeg";
import pfp3 from "../assets/pfp3.jpeg";
import pfp4 from "../assets/pfp4.jpeg";

const MyDreamsMenu = ({ blur }) => {
  const categories = [
    { name: "X-mas", items: 4 },
    { name: "Happy Birthday", items: 3 },
    { name: "Happy Birthday long category name", items: 3 },
  ];
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

          {categories.map((category, index) => (
            <div className="category" key={index}>
              <div className="category-title">{category.name}</div>
              <div className="items-in-category">{category.items}</div>
            </div>
          ))}

          {/* <div className="category">
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
          </div> */}
        </div>
        <div className="friends">
          <div className="friends-title">Friends</div>
          <div className="friends-info">
            <div className="number-of-friends">21</div>
            <div className="friends-list">
              <img src={pfp} alt="friend" className="friend-image" />
              <img src={pfp2} alt="friend" className="friend-image" />
              <img src={pfp3} alt="friend" className="friend-image" />
              <img src={pfp4} alt="friend" className="friend-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDreamsMenu;
