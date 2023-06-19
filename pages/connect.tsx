// Update the import to the correct path
import Button from "@/components/Button"; // Update the import to the correct path
import Image from "next/image";

import React, { useState } from "react";
import { logo } from "@/assets";
import { useTradeContext } from "@/context";
import { useRouter } from "next/router";

const Connect = () => {
  const {address, connectWallet} = useTradeContext()
//const [address, setAddress] = useState(false)
console.log(address)
const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="min-w-[800px] min-h-[440px]  bg-[#253343] flex flex-col items-center justify-center px-[130px] py-[54.33px] rounded-[40px] space-y-[16px]">
        <Image
          src={logo}
          alt="logo"
          className="w-[80px] h-[61px] object-contain"
        />
        <h2 className="text-[4vw] md:text-[30px] text-center w-full leading-[6vh] font-semibold">
          {address
            ? "Congratulations, you're in!"
            : "Connect wallet to TradeVerse"}
        </h2>
        <p className="text-[2vw] md:text-[16px] leading-[3vh] text-center font-semibold">
          {address
            ? "Congratulations! Your wallet is now connected. Enjoy secure transactions on TradeVerse"
            : "Connect Your Wallet for Seamless Transactions and Enhanced Security"}
        </p>
        {!address && (
          <Button title="Connect wallet" handleClick={connectWallet}  />
        )}
        {address && <Button title="Explore marketplace" handleClick={() => router.push("/dashboard/feed")} />}
      </div>
    </div>
  );
};

export default Connect;