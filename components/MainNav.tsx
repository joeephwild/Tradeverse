import { logo, profile } from "@/assets";
import { useTradeContext } from "@/context";
import {
  Extension,
  RuntimeConnector,
  WALLET,
} from "@dataverse/runtime-connector";
import Image from "next/image";

import ConnectModal from "./ConnectModal";
import Button from "./Button";

const MainNav = () => {
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
        await runtimeConnector?.switchNetwork(44787);
        createCapability();
        console.log(wallet.address);
        setAddress(wallet?.address);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-between border-b-4 border-[#fff] w-full bg-Bar px-9 py-2.5">
      <div className="flex items-center space-x-2">
        <Image
          src={logo}
          alt="logo"
          className="w-[48px] h-[48px] object-contain"
        />
        <span>TradeVerse</span>
      </div>
      {!address && (
        <Button title="Connect Wallet" isBorder isFunc handleClick={connect} />
      )}
      {address && (
        <div className="border-green border-2 px-6 py-2.5 rounded-full">
          <span>{address.slice(0, 9)}</span>
        </div>
      )}
    </div>
  );
};

export default MainNav;
