import { Box, CircularProgress } from "@mui/material";
import logo from "../../../../public/images/tello.png";
import Image from 'next/image';
const Loader = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center w-full">
      <div className="flex items-center justify-center">
        <Image src={logo} alt="tello" width={35} height={35} className="mr-[5px]" />
        <div className="text-black text-2xl font-bold">Tello</div>
        {/* <img src={logo1} alt="tello" width={100} /> */}
      </div>
      <Box
        className="text-[#3DB5E6] mt-11 justify-center "
        sx={{ display: "flex" }}
      >
        <CircularProgress className="!w-[60px] !h-[60px]" color="inherit" />
      </Box>
    </div>
  );
};

export default Loader;
