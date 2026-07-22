import type { FormData } from "../../../types/formData";

type Step2Props = {
  formData: FormData;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;

  handleFileChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

export default function Step2({
  formData,
  handleChange,
  handleFileChange,
}: Step2Props) {
  return (
    <div className="w-full px-md">
      <div className="space-y-xl max-w-4xl mx-auto w-full px-md bg-surface-container-lowest border border-outline-variant py-md rounded-xl shadow-md">
        <div className="mb-lg">
          <h2 className="font-headline-lg text-headline-lg lg:text-headline-lg text-on-surface mb-2">
            Akademik Detallar
          </h2>

          <p className="font-body-md text-body-md text-on-surface-variant">
            Təhsil aldığınız müəssisə və ixtisas haqqında məlumatları qeyd edin.
          </p>
        </div>

        {/* Universitet */}
        <div className="space-y-2">
          <label
            htmlFor="university"
            className="block font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider"
          >
            Universitet
          </label>

          <div className="relative group">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">
              account_balance
            </span>

            <select
              id="university"
              name="university"
              value={formData.university}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all appearance-none font-body-md text-body-md"
            >
              <option value="" disabled>
                Ali təhsil müəssisəsini seçin
              </option>

              <option>Bakı Dövlət Universiteti (BDU)</option>
              <option>Azərbaycan Texniki Universiteti (AzTU)</option>
              <option>ADA Universiteti</option>
              <option>Azərbaycan Dövlət İqtisad Universiteti (UNEC)</option>
              <option>Azərbaycan Tibb Universiteti (ATU)</option>
              <option>Bakı Ali Neft Məktəbi (BANM)</option>
            </select>

            <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline pointer-events-none">
              expand_more
            </span>
          </div>
        </div>
                {/* Təhsil Pilləsi */}
        <div className="space-y-2">
          <label className="block font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider">
            Təhsil Pilləsi
          </label>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <label className="flex items-center gap-3 p-4 border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors">
              <input
                type="radio"
                name="degree"
                value="bakalavr"
                checked={formData.degree === "bakalavr"}
                onChange={handleChange}
                className="w-4 h-4 text-primary focus:ring-primary border-outline-variant"
              />

              <span className="font-body-md font-medium">
                Bakalavr
              </span>
            </label>

            <label className="flex items-center gap-3 p-4 border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors">
              <input
                type="radio"
                name="degree"
                value="magistratura"
                checked={formData.degree === "magistratura"}
                onChange={handleChange}
                className="w-4 h-4 text-primary focus:ring-primary border-outline-variant"
              />

              <span className="font-body-md font-medium">
                Magistratura
              </span>
            </label>

            <label className="flex items-center gap-3 p-4 border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors">
              <input
                type="radio"
                name="degree"
                value="doktorantura"
                checked={formData.degree === "doktorantura"}
                onChange={handleChange}
                className="w-4 h-4 text-primary focus:ring-primary border-outline-variant"
              />

              <span className="font-body-md font-medium">
                Doktorantura
              </span>
            </label>
          </div>
        </div>

        {/* Fakültə + İxtisas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div className="space-y-2">
            <label
              htmlFor="faculty"
              className="block font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider"
            >
              Fakültə
            </label>

            <select
              id="faculty"
              name="faculty"
              value={formData.faculty}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md"
            >
              <option value="" disabled>
                Fakültəni seçin
              </option>

              <option>İT və İdarəetmə</option>
              <option>İqtisadiyyat</option>
              <option>Tibb</option>
              <option>Filologiya</option>
              <option>Mühəndislik</option>
            </select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="specialty"
              className="block font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider"
            >
              İxtisas
            </label>

            <select
              id="specialty"
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md"
            >
              <option value="" disabled>
                İxtisası seçin
              </option>

              <option>Kompüter mühəndisliyi</option>
              <option>Maliyyə</option>
              <option>Kibertəhlükəsizlik</option>
              <option>Beynəlxalq münasibətlər</option>
            </select>
          </div>
                    {/* Qəbul İli */}
          <div className="space-y-2">
            <label
              htmlFor="admission_year"
              className="block font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider"
            >
              Qəbul İli
            </label>

            <input
              id="admission_year"
              type="number"
              name="admissionYear"
              min="2015"
              max="2024"
              value={formData.admissionYear}
              onChange={handleChange}
              placeholder="2024"
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md"
            />
          </div>

          {/* Tələbə Bileti */}
          <div className="space-y-2">
            <label className="block font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider">
              Tələbə Bileti (Foto)
            </label>

            <div className="relative border-2 border-dashed border-outline-variant rounded-xl p-xl bg-surface-container-lowest/50 hover:bg-surface-container-low hover:border-primary transition-all group cursor-pointer text-center">
              <input
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary-container/10 rounded-full flex items-center justify-center text-primary mb-md group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[32px]">
                    upload_file
                  </span>
                </div>

                <p className="font-title-md text-title-md text-on-surface mb-1">
                  {formData.studentCard
                    ? formData.studentCard.name
                    : "Şəkil yükləyin və ya sürüşdürün"}
                </p>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Maksimum fayl ölçüsü 5MB (JPG, PNG)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}