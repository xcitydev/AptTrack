import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CoinItems from "../coin-items/coin-items";

interface Items {
  address: string;
  addyType: string;
}

const Dashboard1 = ({ address, addyType }: Items) => {
  const settings = require("../../assets/set.png");
  const chart = require("../../assets/chart.png");
  const frame = require("../../assets/Frame1.png");
  const [finalArray, setFinalArray] = useState<
    { coinValue: number; typeName: string }[]
  >([]);
  const navigate = useNavigate();
  // const stringPicker = async (string: any) => {
  //   let reversedString = [...string].reverse();
  //   let result: Array<string> = [];
  //   let final: Array<string> = [];
  //   for (let index = 0; index < reversedString.length; index++) {
  //     if (reversedString[index] === ":") {
  //       result.reverse();
  //       result.map((stringN) => {
  //         if (stringN === ">") {
  //           let lastArray = final.join("");

  //           console.log(lastArray);
  //           return { lastArray };
  //         } else {
  //           final.push(stringN);
  //         }
  //       });
  //       break;
  //     } else {
  //       result.push(reversedString[index]);
  //     }
  //   }
  // };
  // const populateAsset = async () => {};
  const fetchAssets = async () => {
    const options = {
      method: "GET",
      url: `https://fullnode.testnet.aptoslabs.com/v1/accounts/${address}/resources`,
      headers: { "Content-Type": "application/json" },
    };
    console.log(address);

    axios
      .request(options)
      .then(function (response) {
        var box = response.data;
        for (let index = 0; index < box.length; index++) {
          const element = box[index];
          const { data, type } = element;
          if (data.coin) {
            console.log(`1. data coins ====>>` + data.coin);
            console.log(`2. Type ====>>` + type);
            let reversedString = [...type].reverse();
            let result: Array<string> = [];
            let final: Array<string> = [];
            for (let index = 0; index < reversedString.length; index++) {
              if (reversedString[index] === ":") {
                result.reverse();
                // eslint-disable-next-line
                result.map((stringN) => {
                  if (stringN === ">") {
                    let lastArray = final.join("");
                    setFinalArray((oldArray): any => [
                      ...oldArray,
                      {
                        coinValue: data.coin.value,
                        typeName: lastArray,
                      },
                    ]);
                    return { lastArray };
                  } else {
                    final.push(stringN);
                  }
                });
                break;
              } else {
                result.push(reversedString[index]);
              }
            }
          } else {
            console.log(`There is no Coin in Your Wallet`);
          }
        }
      })
      .catch(function (error) {
        error.message &&
          console.log("Address does not exist on the blockchain");
      });
  };

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

  useEffect(() => {
    fetchAssets();
    setTimeout(() => {
      console.log(finalArray);
    }, 2000);
    // eslint-disable-next-line
  }, []);

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
              {address !== "" ? (
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
      <div className="px-[3rem] py-4">
        <div className="flex items-center">
          <img src={frame} alt="frame1" className="w-[3rem]" />
          <p className="text-[17px] font-semibold px-2">TOKENS</p>
        </div>
        <div className="border-[#00FFF0] border-2 py-2 my-2">
          <div className="grid grid-cols-5 px-1 pt-2 pb-2">
            <p
              className=" col-span-2 text-[14px]"
              onClick={() => console.log(finalArray)}
            >
              Token
            </p>
            <p className=" col-span-1 text-[14px]">Balance</p>
            <p className=" col-span-1 text-[14px]">Price</p>
            <p className=" col-span-1 text-[14px]">Value</p>
          </div>
          {finalArray.map((item, i) => (
            <CoinItems
              key={i}
              value={item.coinValue}
              token={item.typeName}
              price="339"
              balance="2030"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;
