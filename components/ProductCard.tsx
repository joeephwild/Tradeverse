import { product } from "@/assets";
import Image from "next/image";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import Link from "next/link";

type Props = {
  image: any;
  title: string;
  price: string;
  location: string;
  isSellerActive: boolean;
};

const ProductCard = ({
  image,
  location,
  price,
  title,
  isSellerActive,
}: Props) => {
  return (
    <Link href={`/product/${title}`} className="border-2 cursor-pointer border-Gray/900 mt-9 px-3 py-2.5 max-w-[378px]">
      <div className="relative">
        <Image
          src={image}
          alt="product"
          className="max-w-[278px] max-h-[278px] object-cover rounded-[4px]"
        />
        {isSellerActive && (
          <button className="absolute top-0 bg-[#F90000] right-0 text-center flex items-center space-x-6 px-5 py-2.5">
            <span>Seller is Live</span>
            <FaChevronRight />
          </button>
        )}
      </div>

      <div className="flex border-b-2 border-Foundation pb-3 flex-col mt-4 items-start w-full text-start">
        <span>{title}</span>
        <h3>{price}</h3>
        <div className="flex items-center text-center space-x-1">
          <BsDot className="text-green text-xl" />
          <span className="text-[14px] font-medium">{location}</span>
        </div>
      </div>
      <div className="flex items-center justify-center mt-6 space-x-6 w-full">
        <button className="border-2 border-green text-[18px] font-bold px-8 py-2.5 rounded-[48px]">
          Buy
        </button>
        <button className="bg-green text-[18px] font-bold px-4 py-2.5 rounded-[48px]">
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
