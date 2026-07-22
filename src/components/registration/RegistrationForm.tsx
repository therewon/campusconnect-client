import { useState } from "react";

import Stepper from "./Stepper";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import SuccessModal from "./SuccessModal";
import NavigationButtons from "./NavigationButtons";
import Header from "./Header";
import type { FormData } from "../../types/formData";



export default function RegistrationForm() {
  const totalSteps = 4;

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",

    university: "",
    degree: "",
    faculty: "",
    specialty: "",
    admissionYear: "",
    studentCard: null,

    categories: [],

    agreeToTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0] ?? null;

    setFormData((prev) => ({
      ...prev,
      studentCard: file,
    }));
  };

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
        {currentStep === 1 && (
          <Step1
            formData={formData}
            handleChange={handleChange}
          />
        )}
        {currentStep === 2 && (
          <Step2
            formData={formData}
            handleChange={handleChange}
            handleFileChange={handleFileChange}
          />
        )}

        {currentStep === 3 && (
          <Step3
            // formData={formData}
            // handleChange={handleChange}
          />
        )}

        {currentStep === 4 && (
          <Step4
            // formData={formData}
            // handleChange={handleChange}
          />
        )}

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