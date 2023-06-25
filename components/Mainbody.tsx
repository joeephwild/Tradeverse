"use client";
import { product, profile } from "@/assets";
import Image from "next/image";
import React from "react";
import { FaMicrophoneAlt } from "react-icons/fa";
import ProductCard from "./ProductCard";
import CategoryCard from "./CategoryCard";
import { products } from "@/constant";
import { useContractContext } from "@/context/ContractProvider";
import { Love_Light } from "next/font/google";
import { useTradeContext } from "@/context";

interface Product {
  name: string;
  desc: string;
  image: never[];
  price: number;
  category: string;
  pid: number;
  quantity: number;
  location: string;
  max: number;
  owner: string;
  refund: number;
  active: boolean
  id: string
}

const Mainbody = () => {
  const { allProduct } = useTradeContext();
  console.log(allProduct);
  return (
    <div className="flex-1 h-screen pb-[30px] mx-9 flex flex-col items-start mt-9">
      <div className="flex border-b-2 border-Foundation w-full py-6 items-center">
        <button className="border border-green px-5 py-2.5 rounded-[48px] flex items-center space-x-3">
          <Image src={profile} alt="profile" />
          <span className="text-[14px] font-bold text-[#fff]">
            Anima <span className="font-normal">is hosting a live Video</span>
          </span>
          <FaMicrophoneAlt size={25} className="text-Foundation" />
        </button>
      </div>

      {allProduct.length === 0 && (
        <div className="text-center text-[24px] font-bold ">
          No Listing available
        </div>
      )}

      {/** product */}
      <div className="border-b-2 border-Foundation flex !flex-wrap items-start justify-start gap-12 pb-24 w-ful">
        {allProduct.map((item: Product, i: any) => (
          <ProductCard key={i} {...item} />
        ))}
      </div>

      <div className="border-b-2 border-Foundation flex !flex-wrap items-start justify-start gap-12 pb-24 w-ful">
        {products.map((item, i) => (
          <CategoryCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Mainbody;
