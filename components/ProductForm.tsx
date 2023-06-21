import React from "react";
import FormField from "./FormField";
import Button from "./Button";

const styles = {
  wrapper: "mt-[10%] flex flex-col space-y-8",
};

const ProductForm = () => {
  return (
    <div className="flex-1 m-6 items-start">
      <form action="" className="flex flex-wrap  items-start gap-12">
        <FormField title="" isImage />
        <div className="border-2 space-y-4 border-Bar w-[572px] min-h-[770px] px-6 py-12">
          <h2 className="text-[24px] font-bold leading-[28-13px]">Required</h2>
          <span className="mt-6">Be descriptive as possible</span>
          <div className="space-y-3">
            <FormField title="Title" type="email" isInput />
            <FormField title="Description" type="Password" isTextArea />
            <FormField title="Price" type="email" isInput />
            <FormField title="Category" type="Password" isInput />
            <FormField title="Availablity" type="Password" isInput />
            <FormField title="Loaction" type="Password" isInput />
            <div className="flex w-full items-cente mt-7">
              <Button isFunc title="Continue" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
