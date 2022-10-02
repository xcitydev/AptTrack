import { useNavigate } from "react-router-dom";
import React from "react";

interface Items {
  address: string;
  addyType: string;
}
const Dashboard1 = ({ address, addyType }: Items) => {
  const settings = require("../../assets/set.png");
  const chart = require("../../assets/chart.png");
  const navigate = useNavigate();
  const disconnect = async () => {
    if (addyType === "martian") {
      await window.martian.disconnect();
      navigate("/");
    } else if (addyType === "fletch") {
      await window.fletch.disconnect();
      navigate("/");
    } else if (addyType === "petra") {
      await window.aptos.disconnect();
      navigate("/");
    }
  };
  return (
    <div className="text-white col-span-5">
      <div className="border-b-2 border-[#00FFF0] h-[30vh] w-full">
        <div className="flex">
          <div className="flex ml-auto h-fit">
            <img
              alt="settings"
              src={settings}
              className="w-[2rem] h-[2rem] p-1"
            />
            <div className="pl-3 p-1 lg:pl-[3rem] lg:pr-[3rem] border-[#00FFF0] border-2 h-fit ml-2 cursor-pointer">
              {address != "" ? (
                <p className="text-[13px]" onClick={disconnect}>
                  {" "}
                  {`User: ${address?.substring(0, 5)}...
            ${address?.substring(address.length, address.length - 5)}`}
                </p>
              ) : (
                <p className="text-[13px]">Connect Wallet</p>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-[1rem]">
          <img alt="chart" src={chart} className="w-[2.5rem]" />
          <p className="text-white text-[20px] font-Poppins">Net Worth</p>
        </div>
        <p className="text-center text-[25px] font-[600] tracking-wider">
          $0.00
        </p>
      </div>
    </div>
  );
};

export default Dashboard1;
