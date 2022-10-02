import React from "react";

const LandingPage3 = () => {
  const style1 = require("../../assets/style2.png");
  const icon1 = require("../../assets/icon1.png");
  const icon2 = require("../../assets/icon2.png");
  const icon3 = require("../../assets/icon3.png");
  const foot = require("../../assets/foot.png");
  const logo = require("../../assets/logo2.png");
  return (
    <div>
      <div className="absolute mt-[12rem] z-0">
        <img
          src={style1}
          alt="style1"
          className="w-[1593.5px] h-[341.1px] opacity-20 lg:opacity-100"
        />
      </div>
      <div className="lg:pl-[3rem] lg:pr-[3rem] mt-[2rem] absolute">
        <p className="text-white lg:text-[30px] text-[20px] font-[500] text-center">
          JOIN OUR COMMUNITIES
        </p>
        <div className="flex justify-around lg:pl-[4rem] lg:pr-[4rem] pl-[5rem] pr-[5rem] pt-[4rem] z-10 flex-wrap space-y-5 lg:space-y-0">
          <div className="bg-[#00FFF0] lg:w-[20%] p-[2rem] rounded-sm space-y-5 lg:hover:w-[21%] hover:shadow-lg transition-all cursor-pointer">
            <div className="flex flex-col items-center">
              <img src={icon1} alt="icon" className="w-[40px]" />
              <p className="font-[500]">Discord</p>
            </div>
            <p className="text-[14px] text-center">
              See Announcements, chat with team members and community
            </p>
          </div>
          <div className="bg-[#00FFF0] lg:w-[20%] p-[2rem] rounded-sm space-y-5 lg:hover:w-[21%] hover:shadow-lg transition-all cursor-pointer">
            <div className="flex flex-col items-center">
              <img src={icon3} alt="icon" className="w-[40px]" />
              <p className="font-[500]">Twitter</p>
            </div>
            <p className="text-[14px] text-center">
              See Latest updates, Partnership Announcements and product update
            </p>
          </div>
          <div className="bg-[#00FFF0] lg:w-[20%] p-[2rem] rounded-sm space-y-5 lg:hover:w-[21%] hover:shadow-lg transition-all cursor-pointer">
            <div className="flex flex-col items-center">
              <img src={icon2} alt="icon" className="w-[40px]" />
              <p className="font-[500]">Telegram</p>
            </div>
            <p className="text-[14px] text-center">
              See Announcements, chat with team members and community
            </p>
          </div>
        </div>
      </div>

      <img
        src={foot}
        alt="style1"
        className="w-[1593.5px] absolute h-[13rem] lg:mt-[33rem] mt-[50rem]"
      />
      <div className=" absolute lg:mt-[40rem] mt-[57rem] pl-[2rem] pr-[2rem] w-full lg:ml-[18rem] flex justify-between items-center lg:w-[500px]">
        <img src={logo} alt="logo" className="w-[7rem]" />
        <p className="text-[13px] font-Poppins">Privacy Policy</p>
        <p className="text-[13px] font-Poppins">Terms of Service</p>
      </div>
    </div>
  );
};

export default LandingPage3;
