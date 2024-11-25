import { Typography, Button } from "@mui/material";
import banner from "../images/banner-img.png";
import "../mediaQuery.css";
import Media from "react-media";
import amiWallpaper from "../images/wall_LE.jpeg";
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
        {/* <div className="absolute inset-0 backdrop-blur-sm bg-black/30"></div> */}

        <div className="fade-in flex flex-col justify-evenly items-center py-10 w-full bg-white/70 backdrop-blur-md">
          <p className="text-black text-5xl lg:text-8xl text-center font-merri">
            BİR İLMƏK
          </p>
          <p className="text-black text-xl lg:text-3xl text-center font-edu">
            Sevginin naxışlandığı ilməklər
          </p>
        </div>

        <KeyboardArrowDownIcon
          onClick={handleScroll}
          style={{
            zIndex: 10,
            fontSize: "75px",
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
