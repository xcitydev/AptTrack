import React, { useState } from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
const HomePage = () => {
  const style1 = require("../../assets/style1.png");
  const style5 = require("../../assets/style2.png");
  const style2 = require("../../assets/Frame.png");
  const style3 = require("../../assets/Frame1.png");
  const style4 = require("../../assets/Frame2.png");
  const style6 = require("../../assets/style2.png");
  const icon1 = require("../../assets/icon1.png");
  const icon2 = require("../../assets/icon2.png");
  const icon3 = require("../../assets/icon3.png");
  const foot = require("../../assets/foot.png");
  const logo = require("../../assets/logo2.png");
  const logo1 = require("../../assets/logo.png");

  const wallet1 = require("../../assets/wallet1.png");
  const wallet2 = require("../../assets/wallet2.png");
  const wallet3 = require("../../assets/wallet3.png");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [connected, setConnected] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const [addy, setAddy] = useState<string>("");

  const navigate = useNavigate();

  const connect = async () => {
    if (window.fletch) {
      // Check if Fletch Wallet is installed.
      try {
        let account = await window.fletch.connect();
        console.log(account); // { Address: "0x123456789abcdef...", PublicKey: "0x123456789abcdef..." }
        setModalOpen(false);
        let connected = await window.fletch.isConnected();
        if (connected) {
          setConnected(true);
          setAddress(account?.Address);
          setAddy("fletch");
        }
      } catch (error) {
        console.log(error); // user rejected request.
      }
    } else {
      window.open("http://fletchwallet.io", "_blank");
    }
  };
  const connectMartian = async () => {
    if (window.martian) {
      // Check if Martian Wallet is installed.
      try {
        let account = await window.martian.connect();
        console.log(account); // { Address: "0x123456789abcdef...", PublicKey: "0x123456789abcdef..." }
        setAddy("martian");
        setModalOpen(false);
        setAddress(account?.address);
        setConnected(true);
      } catch (error) {
        console.log(error); // user rejected request.
      }
    } else {
      window.open("http://fletchwallet.io", "_blank");
    }
  };
  const connectPetra = async () => {
    if (window.aptos) {
      // Check if Petra Wallet is installed.
      try {
        const response = await window.aptos.connect();
        console.log(response); // { address: string, address: string }
        const account = await window.aptos.account();
        setAddy("petra");
        setModalOpen(false);
        setConnected(true);
        setAddress(response?.address);

        console.log(account); // { address: string, address: string }
      } catch (error) {
        // { code: 4001, message: "User rejected the request."}
      }
    } else {
      window.open("http://fletchwallet.io", "_blank");
    }
  };
  return (
    <div>
      <div className="bg-[#000D25] flex p-4 lg:pl-[3rem] lg:pr-[3rem] pl-[1rem] pr-[1rem] justify-between items-center">
        <div>
          <img src={logo1} alt="logo" className="w-[7rem]" />
        </div>
        <div>
          <div className="border-[2px] border-[#00FFF0] pl-4 p-[4px] pr-4 cursor-pointer">
            {connected ? (
              <p
                className="text-[#00FFF0] text-[13px] truncate max-w-[13rem]"
                onClick={() =>
                  navigate("/dashboard", {
                    state: { address: address, addyType: addy },
                  })
                }
              >
                {`User: ${address?.substring(0, 5)}...
            ${address?.substring(address.length, address.length - 5)}`}
              </p>
            ) : (
              <p
                className="text-[#00FFF0] text-[13px] truncate max-w-[13rem]"
                onClick={() => setModalOpen(true)}
              >
                Connect Wallet
              </p>
            )}
          </div>
        </div>
      </div>
      <div
        className={
          modalOpen
            ? `absolute text-white p-[2rem] lg:w-[40%] bg-[#000D25] z-40 m-auto left-0 right-0 mt-[6rem] shadow-2xl w-[90%]`
            : `hidden`
        }
      >
        <XMarkIcon
          className="w-[20px] cursor-pointer"
          onClick={() => setModalOpen(false)}
        />
        <p className="text-center text-[22px] font-[500]">Select Wallet</p>
        <p className="text-center mt-[2rem] text-[13px]">
          By connecting a wallet, you agree to AptTrack Terms of Services and
          acknowledge that you have read and understood the Nansen Privacy
          Policy.
        </p>
        <div className="flex flex-col items-center mt-[2rem] w-full space-y-4">
          <div
            className="flex items-center p-1 pl-[3rem] pr-[3rem] border-2 border-[#00FFF0] cursor-pointer hover:pl-[4rem] transition-all"
            onClick={connectPetra}
          >
            <img
              src={wallet3}
              alt="wallet"
              className="rounded-full w-[2rem] mr-3"
            />
            <p className="text-[14px]">Petra Wallet</p>
          </div>
          <div
            className="flex items-center p-1 pl-[2rem] pr-[3rem] border-2 border-[#00FFF0] cursor-pointer hover:pl-[3rem] transition-all"
            onClick={connectMartian}
          >
            <img
              src={wallet1}
              alt="wallet"
              className="rounded-full w-[2rem] mr-3"
            />
            <p className="text-[14px]">Martian Wallet</p>
          </div>
          <div
            className="flex items-center p-1 pl-[3rem] pr-[3rem] border-2 border-[#00FFF0] cursor-pointer hover:pl-[4rem] transition-all"
            onClick={connect}
          >
            <img
              src={wallet2}
              alt="wallet"
              className="rounded-full w-[2rem] mr-3"
            />
            <p className="text-[14px]">Fletch Wallet</p>
          </div>
        </div>
      </div>
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

      <div className="bg-[#000D25] mb-[20vh]">
        <img
          src={style5}
          alt="style1"
          className="w-[1593.5px] absolute lg:mt-[18rem] mt-[10rem] h-[341.1px] opacity-20 lg:opacity-100"
        />
        <div className="pl-[4rem] pr-[4rem] flex flex-col">
          <p className="text-white lg:text-[30px] font-[500] text-[20px]">
            Collectibles Analytics
          </p>
          <div className="flex items-center lg:w-[300px] lg:mt-[5rem] mt-[4rem] lg:ml-[6rem]">
            <img
              src={style2}
              alt="style"
              className="lg:w-[5.5rem] w-[4.5rem]"
            />
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
              <img
                src={style4}
                alt="style"
                className="lg:w-[5.5rem] w-[4rem]"
              />
              <p className="text-white text-[13px] flex-wrap pl-3">
                use ouR Token Distributor to Distribute your token to your
                community, all at once.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="absolute mt-[12rem] z-0">
          <img
            src={style6}
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
    </div>
  );
};

export default HomePage;
