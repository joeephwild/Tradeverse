import FormField from "@/components/FormField";
import React from "react";

const Email = () => {
  return (
    <>
      <FormField title="Enter your Email address *" type="text" isInput />
      <FormField title="Enter password *" type="text" isInput />

      <FormField title="Confirm password *" type="password" isInput />
    </>
  );
};

export default Email;
