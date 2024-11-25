import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "./Redux/amiguSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import PersonalInformation from "./PersonalInformation";
import StoreIcon from "@mui/icons-material/Store";
import emailjs from "emailjs-com";
import SuccessedDialog from "./SuccessedDialog";
import logo from "./images/logo.png";
import { Mosaic } from "react-loading-indicators";
import Bar from './Header/Bar'

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.amigurumi.cart);
  const permission = useSelector((state) => state.amigurumi.permission); //for filled inputs
  const delivery = useSelector((state) => state.amigurumi.delivery);
  const [open, setOpen] = useState(false); //for Dialog component !
  const [lazyOpen, setLazyOpen] = useState(false);

  const personalInformation = useSelector(
    (state) => state.amigurumi.personalInformation
  );

  const [sendingData, setSendingData] = useState({
    productName: "",
    totalPrice: 0,
    customerName: "",
    connetWith: "",
    location: "",
    note: "",
  });

  // calculate subtotal
  const subTotal = cart.reduce((accumulator, item) => {
    return accumulator + item.amount * item.quantity;
  }, 0);

  useEffect(() => {
    setTimeout(() => {
      setLazyOpen(true);
    }, 1000);
    // products name
    const product = cart
      .map((item) => {
        return `${item.name} (${item.amount} AZN) ${item.quantity} ədəd`;
      })
      .join(", ");

    setSendingData({
      ...personalInformation,
      productName: product,
      totalPrice: subTotal,
    });
  }, [cart, personalInformation]);

  // sending Email
  const sendEmail = () => {
    permission
      ? emailjs
          .send(
            "service_ne8grdn",
            "template_3ycf6po",
            sendingData,
            "nhvADr2G-rlep_jlW"
          )
          .then(
            () => {
              setOpen(true);
            },

            (error) => console.log("We have some problems : ", error.text)
          )
      : alert(
          "Zəhmət olmasa müvafiq sahələri tam doldurun ! Bu,sizinlə əlaqə saxlamağımız üçün vacibdir."
        );
  };

  return (
    <>
      {lazyOpen ? (
        <div className="pt-[70px]">
          <Bar/>
          {/* Your cart is empty... */}
          <div className="flex flex-col">
            {cart.length == 0 ? (
              <div className="flex flex-col items-center my-10">
                <img src={logo} className="w-[180px]" />
                <p className="text-5xl text-[#6dbfb8] m-auto p-5 w-fit text-center flex justify-center">
                  Səbətiniz boşdur !
                </p>

                <Link to="/" style={{ textDecoration: "none", margin: "auto" }}>
                  <button
                    type="button"
                    className="text-gray-900 bg-[#6dbfb8] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-xl px-5 py-2.5 text-center text-white flex flex-row items-start dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
                  >
                    <StoreIcon className="mx-3" />

                    <p className="text-2xl">Əsas səhifəyə get !</p>
                  </button>
                </Link>
              </div>
            ) : (
              <div className="text-4xl lg:text-5xl font-bold lg:font-medium text-[#DEAD6F] mx-10 mt-10 p-5 w-fit text-center flex justify-center">
                <p>Alış-veriş səbəti</p>
              </div>
            )}
          </div>

          <div>
            {/* CART */}
            {cart.map((item, index) => (
              <div
                key={index}
                className="bg-[#FFF6E3] m-auto my-5 rounded-3xl w-11/12 border-2 border-[#DEAD6F] flex flex-col lg:flex-row items-center justify-center flex-wrap"
              >
                {/* <div className="flex flex-row items-center w-full"> */}
                <img
                  src={item.img}
                  className=" h-[300px] my-5 rounded-lg min-w-[230px] w-[20%] m-auto"
                />
                {/* </div> */}

                <div className="flex flex-col lg:flex-row items-center justify-between w-[70%] gap-4 mr-4">
                  <p className="text-2xl text-center text-[#DEAD6F] w-48 w-fit">
                    {item.name}
                  </p>

                  <p className="text-2xl text-[#DEAD6F] w-24">
                    {item.amount} AZN
                  </p>

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
                      margin: "12px 5px",
                    }}
                    onClick={() => dispatch(removeFromCart(item.id))}
                  />
                </div>
              </div>
            ))}

            {cart.length !== 0 && (
              <Link to="/">
                <button
                  type="submit"
                  className="flex w-1/2 min-w-[250px] m-auto my-2 text-xl text-mono justify-center rounded-md bg-[#dead6f] p-3 text-sm font-bold leading-6 text-white shadow-sm hover:bg-slate-600   "
                >
                  Alış-verişə davam et
                </button>
              </Link>
            )}
            {cart.length !== 0 && <PersonalInformation />}
            {/* TOTAL PRICE */}
            {subTotal !== 0 && (
              <div>
                <div className="flex flex-col items-end w-11/12 h-auto m-auto gap-2 bg-[#FFF6E3] my-3 rounded-xl ">
                  <div className="flex flex-col flex-wrap justify-between w-fit *:p-2 *:my-3 *:text-2xl *:lg:text-3xl">
                    {delivery !== 0 ? (
                      <div className="flex flex-row gap-5">
                        <p className="">Məhsulların qiyməti: </p>

                        <p className="">{subTotal} AZN</p>
                      </div>
                    ) : null}

                    {delivery !== 0 ? (
                      <div className="flex flex-row gap-5">
                        <p>Çatdırılma haqqı: </p>
                        <p>2 AZN</p>
                      </div>
                    ) : null}

                    <div className="flex flex-row items-center gap-5 min-w-fit">
                      <p className="">Toplam qiymət: </p>
                      <p>{(subTotal + delivery).toFixed(1)} AZN</p>
                    </div>
                  </div>
                </div>

                {/* ORDER BUTTON */}
                <button
                  onClick={sendEmail}
                  type="submit"
                  className="flex w-4/5 m-auto my-2 text-xl text-mono justify-center rounded-md bg-[#dead6f]  p-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-600"
                >
                  Sifarişi tamamla
                </button>
              </div>
            )}
          </div>

          <SuccessedDialog open={open} setOpen={setOpen} />
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <Mosaic
            color="#c3922f"
            size="large"
            text="Loading..."
            textColor="#c79827"
          />
        </div>
      )}
    </>
  );
}

export default Cart;
