import Link from "next/link";
import React from "react";
import FormField from "../FormField";
import Button from "../Button";
import { useRouter } from "next/router";

//Styles
const styles = {
  wrapper: "mt-[10%] flex flex-col space-y-8",
};



const LoginForm = () => {
  const router = useRouter()
  return (
    <form>
      <div className={styles.wrapper}>
        <FormField title="Enter Your Phone or Email" type="email" isInput />
        <FormField title="Enter your password" type="Password" isInput />

        <Button handleClick={() => router.push("/onboarding/Auth")} title="Continue" />
        <span className="text-[#00B86B] text-center cursor-pointer">Forgot password</span>
      </div>
    </form>
  );
};

export default LoginForm;
