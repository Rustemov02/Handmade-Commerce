import { useState, useEffect } from "react";
import {
  Box,
  Drawer,
  Divider,
  Typography,
  Badge,
  Paper,
  Button,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import Media from "react-media";
import { InputBase } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../Redux/amiguSlice";
import { Link } from "react-router-dom";
import ilmekSvg from "../../images/ilmekSvg.svg";
import "../../scrollComponent.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export default function IconsList() {
  const [openList, setOpenList] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.amigurumi.cart);
  const countClickedItems = cart.length;
  const totalAmount = cart.reduce((sum, item) => sum + item.amount, 0);

  const toggleDrawerList = (newOpen) => {
    setOpenList(newOpen);
  };

  //SCROLLING TOP OF SCREEN
  const handleScroll = () => { 
    window.scrollTo(0,0)
  }

//   const toggleDrawerSearch = (newOpen) => {
//     setOpenSearch(newOpen);
//   };

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {scrollPosition > 600 && (
        <Box className="fade-in bg-black bg-opacity-70 rounded-md w-4/5 lg:w-2/3 my-10 flex flex-row justify-around items-center h-[70px] fixed z-10 m-auto bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="text-white text-2xl font-medium text-center cursive">
            <img src={ilmekSvg} className="w-[80px]" />
          </div>

          <IconButton
            color="inherit"
            onClick={() => {
              toggleDrawerList(!openList);
            }}
          >
            <Badge
              badgeContent={countClickedItems}
              color="primary"
              className="text-white gap-2"
            >
              <ShoppingCartIcon sx={{ fontSize: "30px", color: "white" }} />
            </Badge>
          </IconButton>
        </Box>
      )}

      {/* Drawer for menu lists */}
      <Drawer
        sx={{ height: "auto" }}
        anchor="right"
        open={openList}
        onClose={() => toggleDrawerList(false)}
      >
        <Box
          sx={{
            padding: "10px",
            width: "320px",
            minWidth: "300px",
            height: "auto",
            scrollbarWidth: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CloseIcon
            onClick={() => {
              toggleDrawerList(false);
            }}
            sx={{
              fontSize: "40px",
              color: "gray",
              cursor: "pointer",
              "&:hover": { color: "#DEAD6F", transition: ".5s" },
            }}
          />
          <Divider
            sx={{ height: 5, width: "90%", m: 1, color: "red" }}
            orientation="horizontal"
          />
          {countClickedItems == 0 && (
            <p className="text-3xl text-[#DEAD6F] py-4">Səbətiniz boşdur...</p>
          )}

          {/* <div style={{ padding: "8px 0px", marginTop: "10px", display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "space-around", width: '100%' }}>
                <Typography sx={{ fontFamily: 'Chilanka', fontSize: '24px' }}>Səbətinizdə {countClickedItems == 0 ? '' : countClickedItems} məhsul var</Typography>
            </div> */}

          <div className="w-full ">
            {cart.map((item, index) => (
              <div className="flex flex-col" key={index}>
                <div
                  key={index}
                  className="w-full h-auto flex flex-row  items-center justify-between h-fit my-2"
                >
                  <img src={item.img} className="w-1/4 h-24 my-2 rounded-lg" />
                  <p className="font-chilanka text-xl text-300 my-2 h-fit text-[#DEAD6F]">
                    {item.name}
                  </p>
                  <p className="h-fit font-chilanka text-xl">
                    {" "}
                    {item.amount} AZN
                  </p>
                  <DeleteIcon
                    onClick={() => dispatch(removeFromCart(item.id))}
                    sx={{
                      color: "#DEAD6F",
                      cursor: "pointer",
                      fontSize: "30px",
                      "&:hover": { color: "black", transition: ".5s" },
                    }}
                  />
                </div>
                <Divider
                  sx={{ height: 5, width: "90%", m: 1, color: "red" }}
                  orientation="horizontal"
                />
              </div>
            ))}
          </div>
          {countClickedItems > 0 && (
            <>
               
              <div className="text-2xl text-black flex flex-row justify-around w-full py-4 ">
                {" "}
                <p className="text-sans"> Toplam Qiymət : </p>
                <p>{totalAmount} AZN</p>
              </div>
              <Link to="/order" onClick={handleScroll} style={{ textDecoration: "none" }}>
                <button
                  type="button"
                  className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-xl px-5 py-2.5 text-center flex flex-row items-start dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
                >
                  <ShoppingBasketIcon className="mx-3" />

                  <p className="text-2xl"> Sifariş et</p>
                </button>
              </Link>
            </>
          )}
        </Box>
      </Drawer>
    </div>
  );
}
