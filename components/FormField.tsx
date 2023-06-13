import React from "react";

interface Props {
  title: string;
  type?: string;
  isInput?: boolean | null;
  isCategory?: boolean | null;
  item?: { title: string; value: string }[];
  isHidden?: boolean;
}

const FormField = ({
  title,
  type,
  isInput,
  isCategory,
  item,
  isHidden,
}: Props) => {
  return (
    <label className="space-y-2 flex-col flex items-start" htmlFor="">
      <span className="text-[#00B86B] w-full text-[12px] ">{title}</span>
      {isInput && (
        <input
          type={type}
          className="min-w-full border border-[#6783A0] outline-none placeholder:text-[#fff] text-[#fff] bg-transparent px-4 py-2.5 rounded-[40px]"
        />
      )}

      {isCategory && (
        <select
          className={`${
            isHidden
              ? "border-none border text-Foundation "
              : " border border-[#6783A0] placeholder:text-[#7B93AF]   appearance-none relative "
          } min-w-full block outline-none  text-Foundation bg-transparent px-4 py-2.5 rounded-[40px]`}
        >
          {item?.map((cate, i) => (
            <option
              className="bg-Gray/900 space-y-5 text-[#fff]"
              value={cate.value}
              key={i}
            >
              {cate.title}
            </option>
          ))}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </div>
        </select>
      )}
    </label>
  );
};

export default FormField;
