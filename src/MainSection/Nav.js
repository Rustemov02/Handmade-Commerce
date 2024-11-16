import { Typography, Button } from "@mui/material";
import banner from "../images/banner-img.png";
import "../mediaQuery.css";
import Media from "react-media";
import amiWallpaper from "../images/wallpaper.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Nav() {
  const handleScroll = () => {
    const targetSection = document.getElementById("categories-section");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen min-h-screen overflow-hidden">
      <div
        style={{ backgroundImage: `url(${amiWallpaper})` }}
        className="relative h-[100%] bg-cover bg-center bg-fixed w-full flex flex-col justify-center  items-center"
      >
        <div className="absolute inset-0 backdrop-blur-sm bg-black/15"></div>

        <div className="z-10 flex flex-col justify-center items-center p-5">
          <p className="text-white text-5xl font-medium text-center fontFamily: 'Montserrat ,  cursive' ">
            BİR İLMƏK
          </p>
          <p className="text-white text-xl text-center">
            Sevginin naxışlandığı ilməklər
          </p>
        </div>

        <KeyboardArrowDownIcon
          onClick={handleScroll}
          style={{
            zIndex: 10,
            fontSize: "55px",
            color: "white",
            marginTop: "40px",
            border: "solid white 2px",
            borderRadius: "50px",
            cursor : 'pointer'
          }}
          className="animate-bounce"
        />
      </div>
    </div>
  );
}

export default Nav;
