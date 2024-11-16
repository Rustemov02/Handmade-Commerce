import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "./Redux/amiguSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import PersonalInformation from "./PersonalInformation";
import StoreIcon from "@mui/icons-material/Store";

function Cart() {
  const cart = useSelector((state) => state.amigurumi.cart);
  const dispatch = useDispatch();

  const subTotal = cart.reduce((accumulator, item) => {
    return accumulator + item.amount * item.quantity;
  }, 0);
  const commission = subTotal * 0.05;

  return (
    <div>
      <div className="flex flex-col">
        {cart.length == 0 ? (
          <div className="flex flex-col">
            <p className="text-5xl text-[#DEAD6F] m-auto p-5 w-fit text-center flex justify-center">
              Səbətiniz boşdur !
            </p>

            <Link to="/" style={{ textDecoration: "none", margin: "auto" }}>
              <button
                type="button"
                className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-xl px-5 py-2.5 text-center flex flex-row items-start dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
              >
                <StoreIcon className="mx-3" />

                <p className="text-2xl">Əsas səhifəyə get !</p>
              </button>
            </Link>
          </div>
        ) : (
          <div className="text-4xl lg:text-5xl text-[#DEAD6F] mx-10 mt-10 p-5 w-fit text-center flex justify-center">
            <p>Alış-veriş səbəti</p>
          </div>
        )}
      </div>

      <div>
        {/* CART */}
        {cart.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFF6E3] m-auto my-5 rounded-3xl w-11/12 border-2 border-[#DEAD6F] flex flex-col lg:flex-row items-center justify-evenly flex-wrap"
          >
            <div className="flex flex-row items-center justify-evenly w-[20%] flex-wrap">
              <img
                src={item.img}
                className=" h-[300px] my-5 rounded-lg min-w-[230px] w-[300px]"
              />
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between w-[60%] gap-4 ">
              <p className="text-2xl text-center text-[#DEAD6F] w-48">
                {item.name}
              </p>

              <p className="text-2xl text-[#DEAD6F] w-24">{item.amount} AZN</p>

              {/* COUNTER */}
              <div className="flex flex-row justify-center items-center bg-[#FFF6E3] rounded-lg border border-[#DEAD6F] rounded-lg p-2 w-[110px] max-w-[140px] relative">
                <button
                  className=" px-2 text-xl lg:text-2xl w-10 border border-[#DEAD6F] rounded-lg bg-transparent  "
                  onClick={() => dispatch(decrementQuantity(item.id))}
                >
                  -
                </button>
                <p className="text-xl lg:text-2xl w-10 px-2 text-center">
                  {item.quantity}
                </p>
                <button
                  className=" px-2 text-xl lg:text-2xl w-10 border border-[#DEAD6F] rounded-lg"
                  onClick={() => dispatch(incrementQuantity(item.id))}
                >
                  +
                </button>
              </div>

              {/* TOTAL PRICE */}
              <p className="text-xl lg:text-2xl  min-w-28 w-[220px] text-center ">
                Cəmi : {item.quantity * item.amount} AZN
              </p>

              {/* DELETE ICON */}
              <DeleteIcon
                sx={{
                  cursor: "pointer",
                  "&:hover": { color: "black", transition: ".5s" },
                  fontSize: "30px",
                  color: "#DEAD6F",
                  margin: "12px 0",
                }}
                onClick={() => dispatch(removeFromCart(item.id))}
              />
            </div>
          </div>
        ))}

        {cart.length !== 0 ? (
          <Link to="/">
            <button
              type="submit"
              className="flex w-1/2 min-w-[250px] m-auto my-2 text-xl text-mono justify-center rounded-md bg-[#dead6f] p-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-600   "
            >
              Alış-verişə davam et
            </button>
          </Link>
        ) : (
          ""
        )}

        {subTotal !== 0 ? (
          <div>
            <PersonalInformation />

            <div className="flex flex-col items-end w-11/12 h-auto m-auto gap-2 bg-[#FFF6E3] my-3 rounded-xl">
              <div className="flex flex-row flex-wrap justify-between w-fit *:p-6 *:text-3xl">
                <div className="*:text-slate-400  *:lg:text-3xl *:md:text-xl *:sm:text-lg *:text-xl *:p-2 w-3/5 flex flex-col items-start">
                  <p>Məhsulların qiyməti</p>
                  <p>Komissiya(5%)</p>
                  <p>Toplam qiymət</p>
                </div>

                <div className=" *:p-2 *:lg:text-3xl *:md:text-xl *:sm:text-lg *:text-xl *:sm w-2/5 flex flex-col justify-between">
                  <p>{subTotal} AZN</p>
                  <p>{commission.toFixed(1)} AZN</p>
                  <p>{(subTotal + commission).toFixed(1)}AZN</p>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="flex w-4/5 m-auto my-2 text-xl text-mono justify-center rounded-md bg-[#dead6f]  p-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-600"
            >
              Sifarişi tamamla
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Cart;
