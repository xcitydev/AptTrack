import React from "react";

const LandingPage2 = () => {
  const style1 = require("../../assets/style2.png");
  const style2 = require("../../assets/Frame.png");
  const style3 = require("../../assets/Frame1.png");
  const style4 = require("../../assets/Frame2.png");

  return (
    <div className="bg-[#000D25] mb-[20vh]">
      <img
        src={style1}
        alt="style1"
        className="w-[1593.5px] absolute lg:mt-[18rem] mt-[10rem] h-[341.1px] opacity-20 lg:opacity-100"
      />
      <div className="pl-[4rem] pr-[4rem] flex flex-col">
        <p className="text-white lg:text-[30px] font-[500] text-[20px]">
          Collectibles Analytics
        </p>
        <div className="flex items-center lg:w-[300px] lg:mt-[5rem] mt-[4rem] lg:ml-[6rem]">
          <img src={style2} alt="style" className="lg:w-[5.5rem] w-[4.5rem]" />
          <p className="text-white text-[13px] flex-wrap pl-3">
            Track Real time NFT Analytics all from one Dashboard.
          </p>
        </div>
        <div className=" lg:mr-[13rem] self-end mt-[5rem]">
          <p className="lg:font-[600] font-Poppins text-white lg:text-[26px] text-[19px] font-[400]">
            Token Analytics
          </p>
          <div className="flex items-center w-[300px] pt-[1rem]">
            <img
              src={style3}
              alt="style"
              className="lg:w-[5.5rem] w-[4.5rem]"
            />
            <p className="text-white text-[13px] flex-wrap pl-3">
              Tokens Management, Real time price and Analytics.
            </p>
          </div>
        </div>
        <div className=" lg:mr-[13rem] lg:ml-[6rem] lg:mt-[2rem] mt-[4rem]">
          <p className="lg:font-[600] font-Poppins text-white lg:text-[26px] text-[19px] font-[400]">
            Token Distributor
          </p>
          <div className="flex items-center w-[300px] pt-[1rem] ">
            <img src={style4} alt="style" className="lg:w-[5.5rem] w-[4rem]" />
            <p className="text-white text-[13px] flex-wrap pl-3">
              use ouR Token Distributor to Distribute your token to your
              community, all at once.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage2;
