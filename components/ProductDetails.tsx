import Image from "next/image";
import React from "react";
import { BsDot } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";

type Props = {
  image: any;
  title: string;
  price: string;
  location: string;
  isSellerActive: boolean;
};

const ProductDetails = ({
  image,
  isSellerActive,
  location,
  price,
  title,
}: Props) => {
  console.log(isSellerActive);
  if (!image || !title || !price || !location || isSellerActive === undefined) {
    // Handle the case where product data is undefined
    return <div>Loading...</div>; // or any other fallback UI
  }
  return (
    <div className="flex-1 w-screen h-screen m-9">
      <div>back</div>
      <div className="flex flex-wrap gap-12">
        <div className="">
          <Image
            src={image}
            alt={title}
            className="w-[543px] h-[543px] object-cover"
          />
        </div>

        <div className="border-2  relative border-Foundation px-4 py-2.5 h-[690px] w-[640px]">
          {isSellerActive && (
            <button className="absolute top-0 bg-[#F90000] right-0 text-center flex items-center space-x-6 px-5 py-2.5">
              <span>Seller is Live</span>
              <FaChevronRight />
            </button>
          )}
          <div className="flex flex-col mt-8 mx-9 items-start">
            <div className="border-b-2 pb-6 flex flex-col items-start w-full border-Foundation">
              <span className="text-[18px] font-normal">{title}</span>
              <span className="text-[24px] font-bold">{price}</span>
              <div className="flex items-center text-center space-x-">
                <BsDot className="text-green text-xl" />
                <span className="text-[14px] font-medium">{location}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-start border-b-2 border-Foundation py-6 w-full">
                <div className="flex items-start justify-around w-full">
                    <span>Price</span><span>{price}</span>
                </div>
                <div className="flex items-start justify-evenly w-full">
                    <span>Transaction fees:</span><span>{price}</span>
                </div>
                <div className="flex items-start justify-around w-full">
                    <span>Price</span><span>{price}</span>
                </div>
                <span>Total</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
