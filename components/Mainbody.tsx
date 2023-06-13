import { product, profile } from "@/assets";
import Image from "next/image";
import React from "react";
import { FaMicrophoneAlt } from "react-icons/fa";
import ProductCard from "./ProductCard";

type Props = {
  image: any;
  title: string;
  price: string;
  location: string;
  isSellerActive: boolean;
};

const Mainbody = () => {
  const products: Props[] = [
    {
      image: product,
      title: "Macbook M2 Chip",
      price: "$4,000 - 0.002 ETH",
      location: "Port Harcourt, Rivers state",
      isSellerActive: true,
    },
    {
      image: product,
      title: "Macbook M2 Chip",
      price: "$4,000 - 0.002 ETH",
      location: "Port Harcourt, Rivers state",
      isSellerActive: false,
    },
    {
      image: product,
      title: "Macbook M2 Chip",
      price: "$4,000 - 0.002 ETH",
      location: "Port Harcourt, Rivers state",
      isSellerActive: true,
    },
    {
      image: product,
      title: "Macbook M2 Chip",
      price: "$4,000 - 0.002 ETH",
      location: "Port Harcourt, Rivers state",
      isSellerActive: true,
    },
    {
      image: product,
      title: "Macbook M2 Chip",
      price: "$4,000 - 0.002 ETH",
      location: "Port Harcourt, Rivers state",
      isSellerActive: false,
    },
  ];
  return (
    <div className="flex-1 w-fu w-screen h-screen mx-9 pb-[30px] flex flex-col items-start mt-9 overflow-y-scroll scrollbar-hide">
      <div className="flex items-center">
        <button className="border border-green px-5 py-2.5 rounded-[48px] flex items-center space-x-3">
          <Image src={profile} alt="profile" />
          <span className="text-[14px] font-bold text-[#fff]">
            Anima <span className="font-normal">is hosting a live Video</span>
          </span>
          <FaMicrophoneAlt size={25} className="text-Foundation" />
        </button>
      </div>

      {/** product */}
      <div className="flex flex-wrap gap-12 pb-24 w-full items-center">
        {products.map((item, i) => (
          <ProductCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Mainbody;
