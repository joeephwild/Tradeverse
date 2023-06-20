import { logo, profile } from "@/assets";
import { useTradeContext } from "@/context";
import {
  Extension,
  RuntimeConnector,
  WALLET,
} from "@dataverse/runtime-connector";
import Image from "next/image";
import React from "react";
import { FaSearch, FaChevronDown, FaBars } from "react-icons/fa";

const Navbar = () => {
  const { address, setAddress } = useTradeContext();

  const createCapability = async () => {
    if (typeof window != "undefined") {
      const runtimeConnector = new RuntimeConnector(Extension);
      const pkh = await runtimeConnector?.createCapability({
        app: "PolyverseTest",
        wallet: WALLET.METAMASK, // optional, if not connected
      });
      console.log(pkh);
      return pkh;
    }
  };

  const connect = async () => {
    try {
      if (typeof window != "undefined") {
        const runtimeConnector = new RuntimeConnector(Extension);
        const wallet = await runtimeConnector?.connectWallet(WALLET.METAMASK);
        await runtimeConnector?.switchNetwork(314159);
        createCapability();
        console.log(wallet);
        setAddress(wallet?.address);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <nav className="border-b-4 border-[#fff] bg-Bar flex w-full items-center justify-between py-3.5 px-5">
      <div className="flex items-center space-x-4">
        <Image
          src={logo}
          alt="logo"
          className="w-[48px] h-[36px] object-contain"
        />
        <span className="md:text-[24px] text-[20px] font-bold">TradeVerse</span>
        <div className="hidden lg:flex items-center inputbg w-[480px] px-4 py-2.5 rounded-[48px] space-x-3">
          <FaSearch />
          <input
            type="text"
            placeholder="Search Marketplace"
            className="w-full border-none outline-none bg-transparent text-Foundation placeholder:text-[#A3A3A3]"
          />
        </div>
      </div>

      <button
        onClick={connect}
        className="border-green border px-4 py-2.5 text-green rounded-[48px] hidden lg:flex items-center space-x-4"
      >
        <Image src={profile} alt="profile" />
        <span>
          {address?.slice(0, 6)}...{address?.slice(37, 47)}
        </span>
        <FaChevronDown />
      </button>

      <FaBars size={25} className="md:hidden block" />
    </nav>
  );
};

export default Navbar;
