import ilmekSvg from "./images/logo.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="  h-[400px] flex flex-col border-2 border-[red]  ">
      <div className="mt-10">
        <img src={ilmekSvg} className="w-[120px] m-auto" />

        <div className="flex flex-row justify-around items-center p-4 gap-5 w-full lg:w-1/2 flex-wrap m-auto">

          <div className="flex flex-row items-center gap-2 flex flex-row"> 
            <LocalPhoneIcon sx={{fontSize: '40px'}}/>
            <div>
              <p className="font-black">Zəng edin</p>
              <p>+994 55 778 3324</p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-2">
            <InstagramIcon sx={{fontSize : '40px'}}/>
            <div>
              <p className="font-black">İzləyin</p>
              <p>bir.ilmekk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
