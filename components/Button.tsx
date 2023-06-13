import { useRouter } from "next/router";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

interface Props {
  title: string;
  handleClick?: () => void;
  isBorder?: boolean;
}

//Styles
const styles = {
  continueBtn:
    "flex items-start justify-between text-[16px] space-x-4vw md:space-x-7 text-[#fff] bg-[#00B86B] px-9 py-3.5 rounded-[40px]",
};

const Button = ({ title, handleClick, isBorder }: Props) => {
  const Router = useRouter();
  return (
    <button
      onClick={handleClick}
      className={`${!isBorder && styles.continueBtn} ${
        isBorder &&
        "border-green border flex items-start justify-between text-[16px] space-x-4vw md:space-x-7  text-[#fff] px-9 py-3.5 rounded-[40px]"
      } min-w-[240px]`}
    >
      <span>{title}</span>
      <AiOutlineArrowRight size={20} />
    </button>
  );
};

export default Button;
