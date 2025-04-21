import pfp from "../assets/pfp.jpeg";

const Menubar = () => {
  return (
    <div className="menubar">
      <div className="filler"></div>
      <h1 className="title">
        dream<span>land</span>
      </h1>
      <img src={pfp} alt="profile-image" className="profile-image" />
    </div>
  );
};

export default Menubar;
