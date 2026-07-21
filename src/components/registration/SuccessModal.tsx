interface SuccessModalProps {
  onClose: () => void;
}

export default function SuccessModal({
  onClose,
}: SuccessModalProps) {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-inverse-surface/40 backdrop-blur-sm">
      <div className="bg-white rounded-xl p-2xl sm:max-w-md max-w-75 w-full text-center shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-lg">
          <span className="material-symbols-outlined text-5xl">
            check_circle
          </span>
        </div>

        <h2 className="font-headline-lg text-headline-lg text-primary mb-md">
          Uğurlu Qeydiyyat!
        </h2>

        <p className="font-body-md text-body-md text-on-surface-variant mb-xl">
          Profiliniz uğurla yaradıldı. İndi CampusConnect ekosisteminin bütün
          imkanlarından yararlana bilərsiniz.
        </p>

        <button
          onClick={onClose}
          className="w-full py-md bg-primary text-white rounded-lg font-bold hover:bg-primary-container transition-colors"
        >
          Profilə keçid
        </button>
      </div>
    </div>
  );
}