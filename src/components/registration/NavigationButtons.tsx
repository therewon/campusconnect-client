interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  nextStep: () => void;
  prevStep: () => void;
}

export default function NavigationButtons({
  currentStep,
  totalSteps,
  nextStep,
  prevStep,
}: NavigationButtonsProps) {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-surface border-t border-outline-variant py-md px-lg flex justify-center z-50">
      <div className="max-w-4xl w-full flex justify-between items-center">
        <button
          type="button"
          onClick={prevStep}
          disabled={currentStep === 1}
          className="flex items-center gap-xs sm:px-xl px-md py-sm rounded-lg border border-outline text-on-surface font-label-md hover:bg-surface-container-high active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined text-sm">
            arrow_back
          </span>
          <span>Geri</span>
        </button>

        <div className="hidden md:flex items-center gap-sm">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all ${
                index + 1 === currentStep
                  ? "w-12 bg-primary"
                  : "w-1.5 bg-outline-variant"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextStep}
          className="flex items-center gap-xs sm:px-2xl px-md py-sm rounded-lg bg-primary text-white font-label-md hover:bg-primary-container active:scale-95 shadow-md shadow-primary/20 transition-all"
        >
          <span>
            {currentStep === totalSteps ? "Bitir" : "Növbəti"}
          </span>

          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
}