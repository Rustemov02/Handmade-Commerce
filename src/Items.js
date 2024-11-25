import { Typography, Rating } from "@mui/material";
import { itemsData } from "./ItemsData.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Redux/amiguSlice.js";
import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";

function Items() {
  const dispatch = useDispatch(); 
  const [open, setOpen] = useState(false);
   
  return (
    <div className="w-full m-auto px-[20px] flex flex-row items-center  justify-center flex-wrap ">
      {itemsData
        // .filter((item) => item.type == activeİndex.index)
        .map((stuf) => (
          <div
            key={stuf.id}
            className="m-[18px] flex flex-col justify-center items-start p-5 rounded-lg bg-[#FFF5E1]"
          >
            <img
              src={stuf.img}
              className="w-[240px] min-w-[150px] h-[300px] rounded-2xl"
            />
            <p className="text-2xl my-2 font-edu">{stuf.name}</p>
            <div className="w-3/2 flex flex-row justify-between items-center">
            <Rating
              sx={{ color: "#DEAD6F" , fontSize : '30px' }}
              name="simple-controlled" 
              value={stuf.rating}
            />
            </div>
            <Typography fontSize={24} fontFamily={"Montserrat"} color="#DEAD6F">
              {stuf.amount} ₼
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
