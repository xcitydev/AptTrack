import React from "react";

type Props = {
  token: string;
  balance: string;
  price: string;
  value: number;
};

const CoinItems = ({ token, balance, price, value }: Props) => {
  return (
    <div className="grid grid-cols-5 px-1 border-t-2 border-[#00FFF0] pt-2 pb-2">
      <p className=" col-span-2 text-[14px] font-semibold">{token}</p>
      <p className=" col-span-1 text-[14px] font-semibold">{balance}</p>
      <p className=" col-span-1 text-[14px] font-semibold">{price}</p>
      <p className=" col-span-1 text-[14px] font-semibold">{value}</p>
    </div>
  );
};

export default CoinItems;
