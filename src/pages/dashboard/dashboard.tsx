import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard1 from "../../components/dashboard/dashboard1";
import Nfts from "../../components/dashboard/nfts";
import Token from "../../components/dashboard/token";
import SideBar from "../../components/sidebar/sidebar";
import { useLocation } from "react-router-dom";

const DashBoard = () => {
  const location = useLocation();
  let address = location.state.address;
  let addy = location.state.addyType;
  return (
    <>
      <div className="grid grid-cols-6 pl-[10px] pt-[2rem] pr-[1rem]">
        <SideBar address={address} addyType={addy} />
        <Routes>
          <Route
            path="/"
            element={<Dashboard1 address={address} addyType={addy} />}
          />
          <Route
            path="/nft"
            element={<Nfts address={address} addyType={addy} />}
          />
          <Route
            path="/token"
            element={<Token address={address} addyType={addy} />}
          />
        </Routes>
      </div>
    </>
  );
};

export default DashBoard;
