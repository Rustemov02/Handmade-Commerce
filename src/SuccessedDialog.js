import React from "react";
import { Dialog, DialogTitle } from "@mui/material";
import doneSvg from "./images/done-icon.svg";

function SuccessedDialog({open , setOpen}) {
  return (
    <div>
      <Dialog open={open}>
        <DialogTitle className="rounded-3xl flex flex-col justify-center items-center">
          <img src={doneSvg} alt="done" className="my-2 w-[120px]" />
          <p className="text-3xl text-center m-3 font-sans font-semibold text-[#DEAD6F]">
            Sifarişiniz uğurla verildi !
          </p>
          <div className="text-center text-xl font-sans text-[gray]">
            Qeyd etdiyiniz məlumatlar göndərildi.
            <br />
            Sizinlə əlaqə saxlanılacaq...
          </div>
        </DialogTitle>

        <button onClick={()=>{
            window.location.reload()
            window.location.href = '/'
            setOpen(false)
        }} className="bg-[#DEAD6F] hover:bg-orange-400 text-white text-xl font-sans font-bold py-2 px-4 rounded-t-none ">
          Bağla
        </button>
      </Dialog>
    </div>
  );
}

export default SuccessedDialog;
