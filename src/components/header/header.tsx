import React from "react";
import SelectWallet from "../select-wallet/select-wallet";

const Header = () => {
  const logo = require("../../assets/logo.png");
  return (
    <>
      <div className="bg-[#000D25] flex p-4 lg:pl-[3rem] lg:pr-[3rem] pl-[1rem] pr-[1rem] justify-between items-center">
        <div>
          <img src={logo} alt="logo" className="w-[7rem]" />
        </div>
        <div>
          <div className="border-[2px] border-[#00FFF0] pl-4 p-[4px] pr-4 cursor-pointer">
            <p className="text-[#00FFF0] text-[13px]">Connect Wallet</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
