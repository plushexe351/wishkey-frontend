import { Edit2, Grid, Plus, UserPlus } from "react-feather";
import pfp from "../assets/pfp.jpeg";
import pfp2 from "../assets/pfp2.jpeg";
import pfp3 from "../assets/pfp3.jpeg";
import pfp4 from "../assets/pfp4.jpeg";
import { useUIContext } from "../context/UIContext";
import ModalWrapper from "./ModalWrapper";
import { AnimatePresence } from "framer-motion";

// Note : Hardcoded data for now
// TODO : Fetch data from the server

const MyDreamsMenu = ({ blur }) => {
  const { activeModal, openModal, closeModal } = useUIContext();

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
            <div
              className="btn--addEdit-category"
              onClick={() => openModal("create-category")}
            >
              <Plus className="icon" />
            </div>
            <div
              className="btn--addEdit-category"
              onClick={() => openModal("category-actions")}
            >
              <Edit2 className="icon" />
            </div>
          </div>

          {categories.map((category, index) => (
            <div className="category" key={index}>
              <div className="category-title">{category.name}</div>
              <div className="items-in-category">{category.items}</div>
            </div>
          ))}
        </div>
        <div className="friends">
          <div className="friends-title">Friends</div>
          <div className="friends-info">
            <div className="number-of-friends">21</div>
            <div className="friendsPfpList">
              <img src={pfp} alt="friend" className="friend-image" />
              <img src={pfp2} alt="friend" className="friend-image" />
              <img src={pfp3} alt="friend" className="friend-image" />
              <img src={pfp4} alt="friend" className="friend-image" />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {activeModal === "category-actions" && (
          <ModalWrapper name="category-actions">
            <div className="action">
              Edit Current Category <Edit2 size={15} className="icon" />
            </div>
            <div className="action">
              Manage All Categories <Grid size={15} className="icon" />
            </div>
          </ModalWrapper>
        )}
        {activeModal === "create-category" && (
          <ModalWrapper name="create-category">
            <h2>Create new category</h2>
            <input
              type="text"
              name="category-name"
              placeholder="New Category Name"
            />
            <div className="addPeopleToCategory">
              <UserPlus className="icon" size={20} /> Share with{" "}
              <span>3 Selected</span>
            </div>
            <div className="actions">
              <div className="action save">Save Changes</div>
              <div className="action cancel" onClick={closeModal}>
                Cancel
              </div>
            </div>
          </ModalWrapper>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MyDreamsMenu;
