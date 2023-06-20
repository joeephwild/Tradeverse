import React, { useState } from "react";
import FormField from "../FormField";
import Button from "../Button";
import { category } from "@/constant";
import Account from "./Steps/Account";
import Email from "./Steps/Email";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  setActive: React.Dispatch<React.SetStateAction<string>>
}

//Styles
const styles = {
  wrapper: "mt-[9%] flex flex-col space-y-9",
};

const SignUpForm = ({ setActive}: Props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  const nextStep = () => {
    if (currentStep < 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderStepComponent = () => {
    switch (currentStep) {
      case 0:
        return <Account />;
      case 1:
        return <Email />;
      default:
        return null;
    }
  };

  const handleClick = (e?: any) => {
    e.preventDefault()
    if (currentStep === 0) {
      // Perform validation or data handling for the Account step
      
      // If validation is successful, proceed to the next step
      nextStep();
    } else if (currentStep === 1) {
      // Perform validation or data handling for the Email step

      // If validation is successful, navigate to the "/connect" page
      router.push("/connect");
    }
  };

  return (
    <form id="signup">
      <div className={styles.wrapper}>
        {renderStepComponent()}
        <Button handleClick={handleClick} isFunc title="Continue" />
        <span className="text-[14px] leading-[16px] cursor-pointer text-[#fff] text-center">
          Already have an account? <span onClick={() => setActive("login")} className="text-green">Log in</span>
        </span>
      </div>
    </form>
  );
};

export default SignUpForm;