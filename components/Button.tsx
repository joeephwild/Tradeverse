import { right } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

interface Props {
  title: string;
  handleClick?: () => void;
  isBorder?: boolean;
  isFunc?: boolean;
  isLink?: boolean;
  link?: string;
}

//Styles
const styles = {
  continueBtn:
    "flex items-start justify-between text-[14px] space-x-4vw md:space-x-7 text-[#fff] bg-[#00B86B] px-9 py-3.5 rounded-[40px]",
};

const Button = ({
  title,
  handleClick,
  isBorder,
  isFunc,
  isLink,
  link,
}: Props) => {
  const Router = useRouter();
  return (
    <>
      {isFunc && (
        <button
          onClick={handleClick}
          className={`${!isBorder && styles.continueBtn} ${
            isBorder &&
            "border-green border flex items-start justify-between text-[14px] space-x-4vw md:space-x-7  text-[#fff] px-9 py-3.5 rounded-[40px]"
          } min-w-[240px]`}
        >
          <span>{title}</span>
          <AiOutlineArrowRight size={20} />
        </button>
      )}
      {isLink && (
        <Link href={`${link}`}>
          <button
            className={`${!isBorder && styles.continueBtn} ${
              isBorder &&
              "border-green border flex items-start justify-between text-[14px] space-x-4vw md:space-x-7  text-[#fff] px-9 py-3.5 rounded-[40px]"
            } min-w-[240px]`}
          >
            <span>{title}</span>
           <Image src={right} alt="right" />
          </button>
        </Link>
      )}
    </>
  );
};

export default Button;
