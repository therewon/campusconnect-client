import React from 'react'

type StepProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const Step1 = ({ setStep }: StepProps) => {






  return (
    <>
      {/* TopNavBar (Simplified for focused task) */}
      
      <main className="grow flex flex-col items-center py-2xl px-md relative overflow-hidden">
        {/* Background Atmospheric Element */}
        <div className="absolute top-0 left-0 w-full h-96 -z-10 bg-linear-to-b from-primary/5 to-transparent" />
        <div className="w-full max-w-225">
          {/* Header Section */}
          <div className="text-center mb-xl">
            <h1 className="font-headline-lg text-headline-lg text-primary mb-2">
              Tələbə Qeydiyyatı
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Akademik profilinizi tamamlayaraq CampusConnect ekosisteminə qoşulun.
            </p>
          </div>
          {/* Stepper Component */}
          <div className="mb-2xl px-md">
            <div className="flex items-center justify-between relative max-w-2xl mx-auto">
              {/* Progress Line Background */}
              <div className="absolute top-5 left-0 w-full h-0.5 bg-outline-variant z-0" />
              {/* Progress Line Active */}
              <div
                className="absolute top-5 left-0 w-0 h-0.5 bg-primary transition-all duration-500 z-0"
                id="progress-bar"
              />
              {/* Step 1 */}
              <div
                className="flex flex-col items-center step-indicator active z-10"
                data-step={1}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white font-bold transition-colors">
                  1
                </div>
                <span className="mt-2 font-label-md text-label-md font-bold text-primary">
                  Şəxsi
                </span>
              </div>
              {/* Step 2 */}
              <div
                className="flex flex-col items-center step-indicator z-10"
                data-step={2}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-highest text-on-surface-variant font-bold border border-outline-variant transition-colors">
                  2
                </div>
                <span className="mt-2 font-label-md text-label-md text-on-surface-variant">
                  Akademik
                </span>
              </div>
              {/* Step 3 */}
              <div
                className="flex flex-col items-center step-indicator z-10"
                data-step={3}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-highest text-on-surface-variant font-bold border border-outline-variant transition-colors">
                  3
                </div>
                <span className="mt-2 font-label-md text-label-md text-on-surface-variant">
                  Maraqlar
                </span>
              </div>
              {/* Step 4 */}
              <div
                className="flex flex-col items-center step-indicator z-0"
                data-step={4}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-highest text-on-surface-variant font-bold border border-outline-variant transition-colors">
                  4
                </div>
                <span className="mt-2 font-label-md text-label-md text-on-surface-variant">
                  Sosial
                </span>
              </div>
            </div>
          </div>
          {/* Form Container */}
          <form
            className="glass-card rounded-xl sm:p-xl p-md shadow-sm min-h-125 flex flex-col"
            id="registrationForm"
          >
            {/* Step 1: Personal Information */}
            <div className="step-transition" id="step-content-1">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-xl">
                <div className="md:col-span-4 flex flex-col items-center justify-center">
                  <div className="relative group cursor-pointer">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-surface-container-highest bg-surface-variant relative flex items-center justify-center">
                      <img
                        className="w-full h-full object-cover"
                        data-alt="A clean, professional headshot of a student against a minimalist gray background, high-end corporate photography style with soft rim lighting and sharp focus on eyes, representing a modern academic identity in the Azerbaijan and Turkey region."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2oj8i5MVvRIiUif7j7iTNzmS7Rl500fz2Djt-1zeQrkkZU1xg4tW1obruyV5ubN-Kyo1E1PjGvUWVD7FXbY4DR-zcnqTtxqCAjgVCP5LVeIyc4MKs6h8yBiAj7w-jpJxsV8ahXctkAdQpBAlDv3bxq-n6G1pdRrYdepWG7LjEefpiECVcHsit5jgPdVF7sgCHnJPQsVBFOjv2ESjZS1aOENsvY5sxwxPwldqZeNw5DQP_whthb9xi"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-3xl">
                          add_a_photo
                        </span>
                      </div>
                    </div>
                    <label className="mt-4 block text-center font-label-md text-label-md font-bold text-primary cursor-pointer hover:underline">
                      Profil Şəkli Yüklə
                    </label>
                  </div>
                </div>
                <div className="md:col-span-8 space-y-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-md text-label-md font-bold text-on-surface-variant uppercase">
                        Ad Soyad
                      </label>
                      <input
                        className="h-10 px-md border border-outline-variant rounded bg-white form-input-focus text-body-md"
                        placeholder="Məs: Elvin Məmmədov"
                        required
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-md text-label-md font-bold text-on-surface-variant uppercase">
                        E-poçt
                      </label>
                      <input
                        className="h-10 px-md border border-outline-variant rounded bg-white form-input-focus text-body-md"
                        placeholder="student@university.edu.az"
                        required
                        type="email"
                      />
                    </div>
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-md text-label-md font-bold text-on-surface-variant uppercase">
                        Mobil nömrə
                      </label>
                      <input
                        className="h-10 px-md border border-outline-variant rounded bg-white form-input-focus text-body-md"
                        placeholder="+994 (__) ___-__-__"
                        required
                        type="tel"
                      />
                    </div>
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-md text-label-md font-bold text-on-surface-variant uppercase">
                        Doğum tarixi
                      </label>
                      <input
                        className="h-10 px-md border border-outline-variant rounded bg-white form-input-focus text-body-md"
                        required
                        type="date"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
             {/* Footer Navigation Buttons */}
            <div className="mt-auto pt-xl border-t border-outline-variant flex justify-between items-center">
              <div></div>
              <div className="flex items-center gap-md">
                <span className="hidden sm:inline font-label-md text-label-md text-on-surface-variant italic">
                  Bütün məlumatların düzgünlüyündən əmin olun.
                </span>
                <button
                  className="flex items-center gap-2 px-xl py-3 rounded-lg bg-primary text-white font-bold hover:shadow-lg active:scale-95 transition-all"
                  onClick={() => {
                    console.log("Button clicked");
                    setStep(2);
                  }}
                >
                  <span id="nextBtnText">Növbəti</span>
                  <span className="material-symbols-outlined" id="nextBtnIcon">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </form>
         
          {/* Academic Policy Reminder */}
          <div className="mt-md p-md bg-secondary/5 rounded-lg border border-secondary/20 flex items-start gap-md">
            <span className="material-symbols-outlined text-secondary">
              verified_user
            </span>
            <p className="font-label-md text-label-md text-secondary">
              Bu məlumatlar dövlət akademik tələblərinə uyğun olaraq qorunur və
              yalnız təhsil sistemləri daxilində autentifikasiya üçün istifadə
              olunur.
            </p>
          </div>
        </div>
      </main>
      {/* Success Modal (Hidden by default) */}
      {/* <div
        className="fixed inset-0 z-100 flex items-center justify-center bg-inverse-surface/40 backdrop-blur-sm opacity-0 transition-opacity duration-300"
        id="successModal"
      >
        <div className="bg-white rounded-xl p-2xl max-w-md w-full text-center shadow-2xl transform scale-90 transition-transform duration-300">
          <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-lg">
            <span className="material-symbols-outlined text-5xl">check_circle</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-md">
            Uğurlu Qeydiyyat!
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-xl">
            Profiliniz uğurla yaradıldı. İndi CampusConnect ekosisteminin bütün
            imkanlarından yararlana bilərsiniz.
          </p>
          <button
            className="w-full py-md bg-primary text-white rounded-lg font-bold hover:bg-primary-container transition-colors"
            
          >onClick={() => window.location.reload()}
            Profilə keçid
          </button>
        </div>
      </div> */}
    </>
  )
}

export default Step1
