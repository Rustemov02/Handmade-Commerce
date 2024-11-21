import ilmekSvg from "./images/logo.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="h-[400px] flex flex-col">
      <div className="mt-10">
        <img src={ilmekSvg} className="w-[120px] m-auto" />

        <div className="flex flex-row justify-around items-center p-4 gap-5 w-full lg:w-1/2 flex-wrap m-auto">
          <div className="flex flex-row items-center gap-2 flex flex-row">
            <LocalPhoneIcon sx={{ fontSize: "40px" }} />
            <div>
              <p className="font-black">Zəng edin</p>
              <p>+994 55 778 3324</p>
            </div>
          </div>

          <div
            onClick={() =>
              window.open(
                "https://www.instagram.com/bir.ilmekk/?igsh=MTNpb2RrMnQ0eGtnZA%3D%3D&utm_source=ig_contact_invite",
                "_blank"
              )
            }
            className="flex flex-row items-center gap-2 cursor-pointer hover:text-[gray]"
          >
            <InstagramIcon sx={{ fontSize: "40px" }} />
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
