import FormField from "@/components/FormField";
import { category } from "@/constant";
import React from "react";

const Account = () => {
  return (
    <>
      <div className="flex items-center space-x-6 ">
        <FormField title="Enter your first name *" type="text" isInput />
        <FormField title="Enter your first name *" type="text" isInput />
      </div>
      <FormField title="Enter your Shop name *" type="text" isInput />
      <FormField
        title="What do you want to sell *"
        type="text"
        isCategory
        item={category}
      />
      <FormField title="Enter Your Phone or Email" type="email" isCategory />
    </>
  );
};

export default Account;
