import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
interface Items {
  isOpen: boolean;
}
const SelectWallet = ({ isOpen }: Items) => {
  const wallet1 = require("../../assets/wallet1.png");
  const wallet2 = require("../../assets/wallet2.png");
  const wallet3 = require("../../assets/wallet3.png");
  return (
    <div
      className={
        isOpen
          ? `absolute text-white p-[2rem] lg:w-[40%] bg-[#000D25] z-40 m-auto left-0 right-0 mt-[6rem] shadow-2xl w-[90%]`
          : `hidden`
      }
    >
      <XMarkIcon className="w-[20px] cursor-pointer" />
      <p className="text-center text-[22px] font-[500]">Select Wallet</p>
      <p className="text-center mt-[2rem] text-[13px]">
        By connecting a wallet, you agree to AptTrack Terms of Services and
        acknowledge that you have read and understood the Nansen Privacy Policy.
      </p>
      <div className="flex flex-col items-center mt-[2rem] w-full space-y-4">
        <div className="flex items-center p-1 pl-[3rem] pr-[3rem] border-2 border-[#00FFF0] cursor-pointer hover:pl-[4rem] transition-all">
          <img
            src={wallet3}
            alt="wallet"
            className="rounded-full w-[2rem] mr-3"
          />
          <p className="text-[14px]">Petra Wallet</p>
        </div>
        <div className="flex items-center p-1 pl-[2rem] pr-[3rem] border-2 border-[#00FFF0] cursor-pointer hover:pl-[3rem] transition-all">
          <img
            src={wallet1}
            alt="wallet"
            className="rounded-full w-[2rem] mr-3"
          />
          <p className="text-[14px]">Martian Wallet</p>
        </div>
        <div className="flex items-center p-1 pl-[3rem] pr-[3rem] border-2 border-[#00FFF0] cursor-pointer hover:pl-[4rem] transition-all">
          <img
            src={wallet2}
            alt="wallet"
            className="rounded-full w-[2rem] mr-3"
          />
          <p className="text-[14px]">Fletch Wallet</p>
        </div>
      </div>
    </div>
  );
};

export default SelectWallet;
