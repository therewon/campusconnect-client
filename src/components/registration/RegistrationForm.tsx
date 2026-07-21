import { useState } from "react";

import Stepper from "./Stepper";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import SuccessModal from "./SuccessModal";
import NavigationButtons from "./NavigationButtons";
import Header from "./Header";

export default function RegistrationForm() {
  const totalSteps = 4;

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const nextStep = (): void => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowSuccess(true);
    }
  };

  const prevStep = (): void => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <>
      <Header />

      <Stepper
        currentStep={currentStep}
        totalSteps={totalSteps}
      />

      <form className="rounded-xl shadow-sm min-h-125 flex flex-col">
        {currentStep === 1 && <Step1 />}
        {currentStep === 2 && <Step2 />}
        {currentStep === 3 && <Step3 />}
        {currentStep === 4 && <Step4 />}

        <NavigationButtons
          currentStep={currentStep}
          totalSteps={totalSteps}
          nextStep={nextStep}
          prevStep={prevStep}
        /> 

        {/* Spacer for footer */}
        <div className="h-24" />
      </form>

      {showSuccess && (
        <SuccessModal
          onClose={() => setShowSuccess(false)}
        />
      )}
    </>
  );
}