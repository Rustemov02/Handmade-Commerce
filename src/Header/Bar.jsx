import { useState } from "react";
import { Box, Badge, Drawer, Divider } from "@mui/material";
import ilmekSvg from "../images/ilmekSvg.svg";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/amiguSlice";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export default function Bar() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.amigurumi.cart);
  const countClickedItems = cart.length;
  const totalAmount = cart.reduce((sum, item) => sum + item.amount, 0);
  const [openList, setOpenList] = useState(false);
  const toggleDrawerList = (newOpen) => {
    setOpenList(newOpen);
  };
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-row items-center justify-center">
      {/* left-1/2 transform -translate-x-1/2 bottom-0 */}
      <Box className="fade-in bg-black bg-opacity-60 rounded-md w-11/12  lg:w-2/3 my-5 flex flex-row justify-around items-center h-[90px] fixed z-10 m-auto left-1/2 transform -translate-x-1/2 top-0  ">
        <Link to={"/"}>
          <img src={ilmekSvg} />
        </Link>

        <IconButton
          color="inherit"
          onClick={() => {
            toggleDrawerList(!openList);
          }}
        >
          <Badge
            badgeContent={countClickedItems}
            color="primary"
            className="text-white gap-2 text-3xl"
          >
            <ShoppingCartIcon sx={{ fontSize: "40px", color: "white" }} />
          </Badge>
        </IconButton>
      </Box>

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
              <Link
                to="/order"
                onClick={handleScroll}
                style={{ textDecoration: "none" }}
              >
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
