import type { FormData } from "../../../types/formData";

type Step1Props = {
  formData: FormData;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

export default function Step1({
  formData,
  handleChange,
}: Step1Props) {
  return (
    <div className="step-transition max-w-4xl mx-auto" id="step-content-1">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-xl">
        <div className="md:col-span-4 flex flex-col items-center justify-center">
          <div className="relative group cursor-pointer">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-surface-container-highest bg-surface-variant relative flex items-center justify-center">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2oj8i5MVvRIiUif7j7iTNzmS7Rl500fz2Djt-1zeQrkkZU1xg4tW1obruyV5ubN-Kyo1E1PjGvUWVD7FXbY4DR-zcnqTtxqCAjgVCP5LVeIyc4MKs6h8yBiAj7w-jpJxsV8ahXctkAdQpBAlDv3bxq-n6G1pdRrYdepWG7LjEefpiECVcHsit5jgPdVF7sgCHnJPQsVBFOjv2ESjZS1aOENsvY5sxwxPwldqZeNw5DQP_whthb9xi"
                alt="Profile"
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
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Məs: Elvin Məmmədov"
                required
              />
            </div>

            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md font-bold text-on-surface-variant uppercase">
                E-poçt
              </label>

              <input
                className="h-10 px-md border border-outline-variant rounded bg-white form-input-focus text-body-md"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="student@university.edu.az"
                required
              />
            </div>

            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md font-bold text-on-surface-variant uppercase">
                Mobil nömrə
              </label>

              <input
                className="h-10 px-md border border-outline-variant rounded bg-white form-input-focus text-body-md"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+994 (__) ___-__-__"
                required
              />
            </div>

            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md font-bold text-on-surface-variant uppercase">
                Doğum tarixi
              </label>

              <input
                className="h-10 px-md border border-outline-variant rounded bg-white form-input-focus text-body-md"
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}