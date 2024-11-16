import { Typography, Rating } from "@mui/material";
import { itemsData } from "./ItemsData.jsx";
import { useDispatch } from "react-redux";
import { addToCart } from "./Redux/amiguSlice.js";
import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";

function Items(activeİndex) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  return (
    <div className="w-[90%] m-auto px-[20px] flex flex-row items-center justify-center lg:justify-start flex-wrap">
      {itemsData
        .filter((item) => item.type == activeİndex.index)
        .map((stuf) => (
          <div
            key={stuf.id}
            className="m-[25px] flex flex-col justify-center items-start"
          >
            <img
              src={stuf.img}
              className="w-[170px] min-w-[150px] h-[200px] rounded-2xl"
            />
            <p className="text-2xl my-2">{stuf.name}</p>
            <Rating
              sx={{ color: "#DEAD6F" }}
              name="simple-controlled"
              value={stuf.rating}
            />
            <Typography fontSize={24} fontFamily={"Montserrat"} color="#DEAD6F">
              ${stuf.amount}
            </Typography>
            <div className="flex flex-col justify-start gap-10">
              <button
                onClick={() => {
                  dispatch(addToCart(stuf));
                  setOpen(false);
                  setOpen(true);
                  setTimeout(() => {
                    setOpen(false);
                  }, 500);
                }}  
              type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-lg px-3 py-1.5 text-center me-2 mb-2"
              >
                Səbətə əlavə et
              </button>

              <Snackbar open={open} autoHideDuration={3000}>
                <Alert
                  severity="success"
                  variant="filled"
                  sx={{ width: "100%" }}
                >
                  Səbətə əlavə edildi !
                </Alert>
              </Snackbar>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Items;
