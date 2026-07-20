export default function Stepper({ currentStep, totalSteps }) {
  const steps = [
    { id: 1, label: "Şəxsi" },
    { id: 2, label: "Akademik" },
    { id: 3, label: "Maraqlar" },
    { id: 4, label: "Sosial" },
  ];

  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="mb-2xl px-md">
      <div className="relative flex items-center justify-between max-w-2xl mx-auto">
        {/* Background Line */}
        <div className="absolute top-5 left-0 w-full h-[2px] bg-outline-variant -z-10" />

        {/* Active Line */}
        <div
          className="absolute top-5 left-0 h-[2px] bg-primary transition-all duration-500 -z-10"
          style={{ width: `${progress}%` }}
        />

        {steps.map((step) => {
          const active = step.id === currentStep;
          const completed = step.id < currentStep;

          return (
            <div
              key={step.id}
              className="flex flex-col items-center"
            >
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  font-bold transition-all border
                  ${
                    active
                      ? "bg-primary text-white scale-110 shadow-md border-primary"
                      : completed
                      ? "bg-secondary text-white border-secondary"
                      : "bg-surface-container-highest text-on-surface-variant border-outline-variant"
                  }
                `}
              >
                {completed ? (
                  <span className="material-symbols-outlined text-sm">
                    check
                  </span>
                ) : (
                  step.id
                )}
              </div>

              <span
                className={`
                  mt-2 text-label-md
                  ${
                    active
                      ? "font-bold text-primary"
                      : "text-on-surface-variant"
                  }
                `}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}