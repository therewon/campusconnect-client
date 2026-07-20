import React from 'react'

type Step1Props = {
    setStep: React.Dispatch<React.SetStateAction<number>>;
};

const Step2 = ({ setStep }: Step1Props) => {



    return (
        <div className='flex flex-col min-h-screen text-on-surface'>
            {/* Background Decoration */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-[0%] -left-[5%] w-[30%] h-[30%] rounded-full bg-secondary/5 blur-3xl" />
            </div>

            {/* Main Content Canvas */}
            <main className="grow container mx-auto max-w-200 px-6 pb-24">
                {/* Header Section */}
                <div className="text-center mb-xl">
                        <h2 className="font-headline-lg text-headline-lg text-primary mb-2">
                            Akademik Detallar
                        </h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant">
                            Təhsil aldığınız müəssisə və ixtisas haqqında məlumatları qeyd edin.
                        </p>
                    </div>
                {/* Stepper */}
                <div className="flex items-center justify-between mb-xl relative">
                    {/* Progress Line */}
                    <div className="absolute top-5 left-0 w-full h-0.5 bg-surface-container-highest z-10">
                        <div className="h-full bg-primary" style={{ width: "33.33%" }} />
                    </div>
                    {/* Step 1: Personal (Done) */}
                    <div className="flex flex-col items-center gap-2 z-10">
                        <div className="w-10 h-10 rounded-full bg-success text-white flex items-center justify-center ring-4 ring-white">
                            <span className="material-symbols-outlined text-[20px]">check</span>
                        </div>
                        <span className="font-label-md text-label-md text-success font-bold">
                            Şəxsi
                        </span>
                    </div>
                    {/* Step 2: Academic (Active) */}
                    <div className="flex flex-col items-center gap-2 z-10">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center ring-4 ring-primary/20 scale-110 shadow-md">
                            <span className="font-bold">2</span>
                        </div>
                        <span className="font-label-md text-label-md text-primary font-bold">
                            Akademik
                        </span>
                    </div>
                    {/* Step 3: Verification */}
                    <div className="flex flex-col items-center gap-2 z-10">
                        <div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center ring-4 ring-white">
                            <span className="font-bold">3</span>
                        </div>
                        <span className="font-label-md text-label-md text-on-surface-variant">
                            Təsdiq
                        </span>
                    </div>
                    {/* Step 4: Finalize */}
                    <div className="flex flex-col items-center gap-2 z-10">
                        <div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center ring-4 ring-white">
                            <span className="font-bold">4</span>
                        </div>
                        <span className="font-label-md text-label-md text-on-surface-variant">
                            Tamamla
                        </span>
                    </div>
                </div>
                {/* Registration Form Card */}
                <div className="glass-card rounded-xl shadow-sm p-lg lg:p-xl">
                    <form className="space-y-lg">
                        {/* University Selection */}
                        <div className="space-y-2">
                            <label
                                className="block font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider"
                                htmlFor="university"
                            >
                                Universitet
                            </label>
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">
                                    account_balance
                                </span>
                                <select
                                    className="w-full pl-12 pr-4 py-3 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all appearance-none font-body-md text-body-md"
                                    id="university"
                                >
                                    <option disabled selected value="">
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
                        {/* Degree Level (Radio Group) */}
                        <div className="space-y-2">
                            <label className="block font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider">
                                Təhsil Pilləsi
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                                <label className="flex items-center gap-3 p-4 border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors has-[:checked]:bg-primary-container/10 has-[:checked]:border-primary">
                                    <input
                                        defaultChecked
                                        className="w-4 h-4 text-primary focus:ring-primary border-outline-variant"
                                        name="degree"
                                        type="radio"
                                        defaultValue="bakalavr"
                                    />
                                    <span className="font-body-md text-body-md font-medium">
                                        Bakalavr
                                    </span>
                                </label>
                                <label className="flex items-center gap-3 p-4 border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors has-[:checked]:bg-primary-container/10 has-[:checked]:border-primary">
                                    <input
                                        className="w-4 h-4 text-primary focus:ring-primary border-outline-variant"
                                        name="degree"
                                        type="radio"
                                        defaultValue="magistratura"
                                    />
                                    <span className="font-body-md text-body-md font-medium">
                                        Magistratura
                                    </span>
                                </label>
                                <label className="flex items-center gap-3 p-4 border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors has-[:checked]:bg-primary-container/10 has-[:checked]:border-primary">
                                    <input
                                        className="w-4 h-4 text-primary focus:ring-primary border-outline-variant"
                                        name="degree"
                                        type="radio"
                                        defaultValue="doktorantura"
                                    />
                                    <span className="font-body-md text-body-md font-medium">
                                        Doktorantura
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                            {/* Faculty Selection */}
                            <div className="space-y-2">
                                <label
                                    className="block font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider"
                                    htmlFor="faculty"
                                >
                                    Fakültə
                                </label>
                                <select
                                    className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md text-body-md"
                                    id="faculty"
                                >
                                    <option disabled selected value="">
                                        Fakültəni seçin
                                    </option>
                                    <option>İT və İdarəetmə</option>
                                    <option>İqtisadiyyat</option>
                                    <option>Tibb</option>
                                    <option>Filologiya</option>
                                    <option>Mühəndislik</option>
                                </select>
                            </div>
                            {/* Specialty Selection */}
                            <div className="space-y-2">
                                <label
                                    className="block font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider"
                                    htmlFor="specialty"
                                >
                                    İxtisas
                                </label>
                                <select
                                    className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md text-body-md"
                                    id="specialty"
                                >
                                    <option disabled selected value="">
                                        İxtisası seçin
                                    </option>
                                    <option>Kompüter mühəndisliyi</option>
                                    <option>Maliyyə</option>
                                    <option>Kibertəhlükəsizlik</option>
                                    <option>Beynəlxalq münasibətlər</option>
                                </select>
                            </div>
                        </div>
                        {/* Admission Year */}
                        <div className="space-y-2">
                            <label
                                className="block font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider"
                                htmlFor="admission_year"
                            >
                                Qəbul İli
                            </label>
                            <input
                                className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md text-body-md"
                                id="admission_year"
                                max={2024}
                                min={2015}
                                placeholder="2024"
                                type="number"
                            />
                        </div>
                        {/* Student ID Upload Area */}
                        <div className="space-y-2">
                            <label className="block font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider">
                                Tələbə Bileti (Foto)
                            </label>
                            <div className="relative border-2 border-dashed border-outline-variant rounded-xl p-xl bg-surface-container-lowest/50 hover:bg-surface-container-low hover:border-primary transition-all group cursor-pointer text-center">
                                <input
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                    type="file"
                                />
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 bg-primary-container/10 rounded-full flex items-center justify-center text-primary mb-md group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-[32px]">
                                            upload_file
                                        </span>
                                    </div>
                                    <p className="font-title-md text-title-md text-on-surface mb-1">
                                        Şəkil yükləyin və ya sürüşdürün
                                    </p>
                                    <p className="font-body-md text-body-md text-on-surface-variant">
                                        Maksimum fayl ölçüsü 5MB (JPG, PNG)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {/* Footer / Security Notice */}
                <footer className="mt-xl text-center">
                    <div className="flex flex-col items-center gap-3">
                        <div className="flex items-center gap-2 text-on-secondary-container bg-secondary-container/20 px-4 py-2 rounded-full border border-secondary-container/30">
                            <span
                                className="material-symbols-outlined text-[18px]"
                                style={{ fontVariationSettings: '"FILL" 1' }}
                            >
                                verified_user
                            </span>
                            <span className="font-label-md text-label-md">
                                Məlumatlarınızın təhlükəsizliyinə 256-bit şifrələmə ilə zəmanət
                                verilir.
                            </span>
                        </div>
                        <div className="flex items-center gap-xl mt-md">
                            <a
                                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                                href="#"
                            >
                                Kömək Mərkəzi
                            </a>
                            <a
                                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                                href="#"
                            >
                                Məxfilik Siyasəti
                            </a>
                            <a
                                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                                href="#"
                            >
                                İstifadə Şərtləri
                            </a>
                        </div>
                        <p className="font-code-sm text-code-sm text-outline mt-md">
                            © 2024 CampusConnect - Milli Rəqəmsal Universitet Sistemi
                        </p>
                    </div>
                </footer>
                {/* Sticky Footer Actions */}
                <div className="fixed bottom-0 left-0 w-full bg-surface border-t border-outline-variant py-md px-lg flex justify-center z-50">
                    <div className="max-w-4xl w-full flex justify-between items-center">
                        <button
                            className="flex items-center gap-xs px-xl py-sm rounded-lg border border-outline text-on-surface font-label-md hover:bg-surface-container-high active:scale-95 transition-all"
                            onClick={()=> setStep(prev=> prev-1)}
                        >
                            <span className="material-symbols-outlined text-sm">arrow_back</span>
                            <span>Geri</span>
                        </button>
                        <div className="hidden md:flex items-center gap-sm">
                            <div className="h-1.5 w-1.5 rounded-full bg-outline-variant" />
                            <div className="h-1.5 w-12 rounded-full bg-primary" />
                            <div className="h-1.5 w-1.5 rounded-full bg-outline-variant" />
                            <div className="h-1.5 w-1.5 rounded-full bg-outline-variant" />
                        </div>
                        <button
                            className="flex items-center gap-xs px-2xl py-sm rounded-lg bg-primary text-white font-label-md hover:bg-primary-container active:scale-95 shadow-md shadow-primary/20 transition-all"
                            onClick={() => setStep(3)}
                        >
                            <span>Növbəti</span>
                            <span className="material-symbols-outlined text-sm">
                                arrow_forward
                            </span>
                        </button>
                    </div>
                </div>
                {/* Spacer for footer */}
                <div className="h-24" />
            </main>
            {/* Floating Help Button (Contextual) */}
            <button className="fixed bottom-lg right-lg w-14 h-14 bg-white shadow-2xl rounded-full border border-outline-variant flex items-center justify-center text-primary hover:scale-110 active:scale-95 transition-all group z-50">
                <span className="material-symbols-outlined text-[28px]">support_agent</span>
                <span className="absolute right-16 bg-inverse-surface text-white px-3 py-1 rounded-md font-label-md text-label-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    Canlı Dəstək
                </span>
            </button>
        </div>

    )
}

export default Step2
