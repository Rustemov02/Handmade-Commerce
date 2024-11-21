import {useState} from 'react'
import { Typography, Input } from "@mui/material";
import { styled } from "@mui/material/styles";
import { TextareaAutosize } from "@mui/base";
import emailjs from "emailjs-com";

function Register() {
  const [data, setData] = useState({productName : 'It is from register component...', customerName: "", note: "" });
  const sendEmail = () => {
    console.log(data);
    emailjs.send(
      "service_ne8grdn",
      "template_3ycf6po",
      data,
      "nhvADr2G-rlep_jlW"
    )
    .then(()=>{
      alert('Mesajınız göndərildi ! Təşəkkür edirik :)')
      setData({...data , customerName : '' , note : ''})
      window.location.reload()
    })
    .then((err)=>console.error("Xəta baş verdi : " , err))
  };

  const CustomInput = styled(Input)`
    background-color : white;
    padding : 12px 10px;
    width : 100%;
    margin : 5px 0;
    font-family : Chilanka;
    font-size : 20px;
    border-radius: 10px
    &:focus{
    border : none
    }

`;
  const CustomTextarea = styled(TextareaAutosize)`
    padding: 12px;
    font-family: Chilanka;
    font-size: 18px;
    border: solid gray 1px;
    border-radius: 10px;
    resize: vertical;
    width: 100%;
    margin: 10px 0;
    &:focus {
      outline: none;
      border: 1px solid #ccc;
    }
  `;

  return (
    <div className="bg-[#faf3eb] h-screen flex flex-col items-center justify-center">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography fontSize={30} fontFamily={"Chilanka"}>
          Səhifə üçün
        </Typography>
        <Typography
          fontSize={24}
          fontFamily={"Chilanka"}
          color="#DEAD6F"
          sx={{ textAlign: "center" }}
        >
          Təklif və Şikayətlər
        </Typography>
      </div>

      <div className="flex flex-col items-center w-11/12 lg:w-1/2">
        <div className="mt-2" style={{ width: "100%" }}>
          <input
            onChange={(e) => setData({ ...data , customerName: e.target.value })}
            id="first-name"
            name="first-name"
            placeholder="Adınız"
            fontFamily="Chilanka"
            type="text"
            autoComplete="given-name"
            className="block font-mono text-1xl lg:text-2xl w-full py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 "
          />
        </div>

        <div className="col-span-full" style={{ width: "100%" }}>
          <div className="mt-2">
            <textarea
              onChange={(e) => setData({...data , note: e.target.value })}
              rows={3}
              className="block font-mono text-1xl lg:text-2xl w-full rounded-md  py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 "
              placeholder="Bir şeylər yazın..."
            />
          </div>
        </div>

        <button
          type="submit"
          className="flex w-full my-2 text-xl text-mono justify-center rounded-md bg-black p-3 font-semibold leading-6 text-white shadow-sm hover:bg-slate-6001"
          onClick={sendEmail}
        >
          Göndər
        </button>
      </div>
    </div>
  );
}

export default Register;
