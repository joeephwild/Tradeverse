import React from "react";
import Button from "./Button";
import Image from "next/image";
import { logo } from "@/assets";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-between p-[80px] h-[376px]">
      <div className="flex flex-col items-start space-y-[16px] max-w-[500px]">
        <Image src={logo} alt="logo" className="w-[40px] h-[40px] object-contain" />
        <h1 className="text-[24px] font-semibold">
          Discover, Connect, and Thrive in the World of Decentralized Commerce.
        </h1>
        <p className="text-[16px] font-normal">TradeVerse, 2023.</p>
      </div>
      <Button title="Join now" isLink />
    </div>
  );
};

export default Footer;
