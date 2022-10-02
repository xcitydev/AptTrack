import React from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
const LandingPage = () => {
  const style1 = require("../../assets/style1.png");
  return (
    <div className="bg-[#000D25] lg:h-[80vh] h-[60vh]">
      <img
        src={style1}
        alt="style1"
        className="w-full absolute mt-[3rem] h-[441.1px] opacity-20 lg:opacity-100"
      />
      <div className="text-white w-full pt-[6.5rem] absolute font-[700] pl-[3rem] pr-[3rem]">
        <p className=" font-Poppins lg:text-[2.7rem] lg:pl-[1.6rem] text-[1.5rem]">
          Your Aptos Portfolio <br />
          Tracker
        </p>
        <p className=" font-serif font-[400] lg:pl-[2rem] lg:pr-[2rem] leading-[30px]">
          Track all your Aptos DeFi and NFTs in one single place.
        </p>

        <div className="lg:w-[45%] w-[70%] pt-[2rem] lg:pl-[2rem] lg:pr-[2rem] flex flex-col items-center">
          <div className="w-full flex">
            <input
              placeholder="Enter wallet address....."
              className="text-[13px] w-full p-[6px] bg-transparent border-[2px] border-[#00FFF0]"
            />
            <div className="flex items-center pl-2 pr-2 bg-[#00FFF0]">
              <ArrowSmallRightIcon className="w-[1.1rem] text-black" />
            </div>
          </div>
          <button className="font-[400] text-[12px] bg-[#00FFF0] w-fit text-black p-1 lg:pl-[2rem] lg:pr-[2rem] lg:mt-[2rem] mt-[1rem] pl-[1rem] pr-[1rem]">
            Show my Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
