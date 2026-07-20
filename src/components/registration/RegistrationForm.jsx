import { useState } from "react";

import Stepper from "./Stepper";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import NavigationButtons from "./NavigationButtons";
import SuccessModal from "./SuccessModal";

export default function RegistrationForm() {
  const totalSteps = 4;

  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowSuccess(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <>
      <Stepper
        currentStep={currentStep}
        totalSteps={totalSteps}
      />

      <form className="glass-card rounded-xl p-xl shadow-sm min-h-125 flex flex-col">

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

      </form>

      {showSuccess && (
        <SuccessModal
          onClose={() => setShowSuccess(false)}
        />
      )}
    </>
  );
}