import { Typography, Input } from "@mui/material"
import { styled } from '@mui/material/styles';
import { TextareaAutosize } from '@mui/base';

function Register() {

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
        <div style={{ backgroundColor: "#faf3eb", height: "600px", display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "center" }}>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "center" }}>
                <Typography fontSize={26} fontFamily={"Chilanka"}>Səhifə üçün</Typography>
                <Typography fontSize={52} fontFamily={'Chilanka'} color='#DEAD6F' sx={{textAlign : 'center'}}>Təklif və Şikayətlər</Typography>
            </div>

            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center', width: "50%" }}>



                <div className="mt-2" style={{ width: '100%' }}>
                    <input
                        id="first-name"
                        name="first-name"
                        placeholder="Adınız"
                        fontFamily='Chilanka'
                        type="text"
                        autoComplete="given-name"
                        className="block font-mono  text-2xl w-full border-0 py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 "
                    />
                </div>



                <div className="col-span-full" style={{ width: "100%" }}>

                    <div className="mt-2">
                        <textarea
                            rows={3}
                            className="block font-mono  text-2xl w-full rounded-md  py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 "
                            placeholder='Bir şeylər yazın...'
                        />
                    </div>


                </div>

                <button
                    type="submit"
                    
                    className="flex w-full my-2 text-xl text-mono justify-center rounded-md bg-black  p-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-600   "
                >
                    Göndər
                </button>

            </div>
        </div>
    )
}


export default Register