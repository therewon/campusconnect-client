// import { useState } from "react";
// import type { FormEvent } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { authService } from "../services/authService";
import Step1 from "./registerSteps/Step1.tsx"
import Step2 from "./registerSteps/Step2.tsx"
import Step3 from "./registerSteps/Step3.tsx"
import Step4 from "./registerSteps/Step4.tsx"
import { useEffect, useState } from "react";
import "../css/register-css.css"

export function RegisterForm() {
  // const navigate = useNavigate();

  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const [step, setStep] = useState(1)

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  // async function handleSubmit(e: FormEvent) {
  //   e.preventDefault();

  //   setLoading(true);
  //   setError("");

  //   if (password !== confirmPassword) {
  //     setError("Şifrələr eyni deyil.");
  //     setLoading(false);
  //     return;
  //   }

  //   try {
  //     const result = await authService.register({
  //       fullName,
  //       email,
  //       password,
  //       confirmPassword,
  //     });

  //     console.log("Register response:", result);

  //     navigate("/login");
  //   } catch (err: any) {
  //     console.log("Register error:", err);

  //     setError(
  //       err.response?.data?.message ||
  //       err.response?.data?.Message ||
  //       err.message ||
  //       "Qeydiyyat zamanı xəta baş verdi."
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  useEffect(() => {
    console.log("Step:", step);
  }, [step]);

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col w-full">
      <header className="sticky top-0 z-50 flex justify-between items-center w-full px-lg h-16 bg-surface border-b border-outline-variant mb-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl">
            school
          </span>
          <span className="font-headline-lg text-headline-lg font-black text-primary">
            CampusConnect
          </span>
        </div>
        <div className="flex items-center gap-md">
          <div className="hidden md:flex flex-col items-end">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase">
              Sistem Dili
            </span>
            <span className="font-label-md text-label-md font-bold text-primary">
              AZ/TR/EN
            </span>
          </div>
          <button className="flex items-center justify-center p-2 rounded-full hover:bg-surface-container-high transition-all">
            <span className="material-symbols-outlined text-on-surface-variant">
              language
            </span>
          </button>
        </div>
      </header>
      {step === 1 && <Step1 setStep={setStep} />}
      {step === 2 && <Step2 setStep={setStep} />}
      {step === 3 && <Step3 setStep={setStep} />}
      {step === 4 && <Step4 setStep={setStep} />}
    </div>
  );
}