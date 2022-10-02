import { useNavigate } from "react-router-dom";
interface ADDY {
  address: string;
  addyType: string;
}
const SideBar = ({ address, addyType }: ADDY) => {
  const logo = require("../../assets/logo.png");
  const dash1 = require("../../assets/dash1.png");
  const dash2 = require("../../assets/dash2.png");
  const dash3 = require("../../assets/dash3.png");
  const dash4 = require("../../assets/dash4.png");
  const navigate = useNavigate();
  return (
    <div className="col-span-1 border-r-2 border-[#00FFF0] h-[95vh] pr-[1rem]">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="lg:w-[7rem]" />
      </div>
      <div className="mt-[2.5rem] space-y-7  pt-[1rem]">
        <div
          className="flex bg-[#00FFF0] m-2  pl-[1rem]  space-x-3 rounded-sm p-1 items-center cursor-pointer"
          onClick={() =>
            navigate("/dashboard", {
              state: { address: address, addyType: addyType },
            })
          }
        >
          <img alt="dash" src={dash2} className="w-[2rem]" />
          <p>Dashboard</p>
        </div>
        <div
          className="flex m-2  pl-[1rem]  space-x-3 rounded-sm p-1 items-center text-white cursor-pointer"
          onClick={() =>
            navigate("/dashboard/nft", {
              state: { address: address, addyType: addyType },
            })
          }
        >
          <img alt="dash" src={dash1} className="w-[2rem]" />
          <p>NFTs</p>
        </div>
        <div
          className="flex m-2  pl-[1rem]  space-x-3 rounded-sm p-1 items-center text-white cursor-pointer"
          onClick={() =>
            navigate("/dashboard/token", {
              state: { address: address, addyType: addyType },
            })
          }
        >
          <img alt="dash" src={dash3} className="w-[2rem]" />
          <p>Distributed Tokens</p>
        </div>
        <div className="flex m-2  pl-[1rem]  space-x-3 rounded-sm p-1 items-center text-white">
          <img alt="dash" src={dash4} className="w-[5px]" />
          <p>More</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
