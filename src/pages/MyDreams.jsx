import Navbar from "../components/Navbar";
import MyDreamsMenu from "../components/MyDreamsMenu";
import dior from "../assets/dior.jpeg";
import dior2 from "../assets/dior2.jpeg";
import dior3 from "../assets/dior3.jpeg";
import { motion } from "framer-motion";
import { Link } from "react-feather";
import Search from "../components/Search";
import { useUIContext } from "../context/UIContext";

const MyDreams = () => {
  const { searchBarOpen, setSearchBarOpen } = useUIContext();
  return (
    <div
      className="page mydreams"
      onClick={(e) => {
        e.stopPropagation();
        setSearchBarOpen(false);
      }}
    >
      <div className="title">
        My dreams <Search value="dreams" />
      </div>
      <motion.div
        className={`page-main`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0, y: -50 }}
      >
        {/* <Search value="dreams" /> */}
        <MyDreamsMenu blur={searchBarOpen} />
        <div className={`dreams ${searchBarOpen ? "blur" : ""}`}>
          <div className="dream">
            <div className="dream-images">
              <img src={dior} alt="" className="dream-image" />
              <img src={dior3} alt="" className="dream-image" />
              <img src={dior2} alt="" className="dream-image" />
            </div>
            <div className="dream-info">
              <div className="dream-title">Nike Air Jordan X Dior</div>
              <div className="dream-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit, accusamus.
              </div>

              <div className="dream-price">$7129.69</div>
              <div className="where-to-get">
                <Link />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Navbar />
    </div>
  );
};

export default MyDreams;
