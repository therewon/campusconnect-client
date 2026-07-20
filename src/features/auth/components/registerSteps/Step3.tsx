import React from 'react'

type Step1Props = {
    setStep: React.Dispatch<React.SetStateAction<number>>;
};

const Step3 = ({ setStep }: Step1Props) => {
    return (
        <div className='bg-background text-on-surface font-body-md overflow-x-hidden min-h-screen flex flex-col w-full'>
            
            <main className="grow flex flex-col items-center py-xl px-md max-w-4xl mx-auto w-full">
                {/* Header Content */}
                <div className="w-full text-center mb-xl">
                    <h1 className="font-headline-lg text-headline-lg text-primary mb-2">
                        Maraq və Bacarıqlarınızı Seçin
                    </h1>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
                        Bu məlumatlar sizə fərdi karyera məsləhətləri və uyğun vakansiyalar
                        təklif etmək üçün istifadə olunacaq.
                    </p>
                </div>
                {/* Stepper */}
                <div className="flex items-center justify-between mb-xl relative w-full">
                    {/* Progress Line */}
                    <div className="absolute top-5 left-0 w-full h-0.5 bg-surface-container-highest z-0">
                        <div className="h-full bg-primary" style={{ width: "66.66%" }} />
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
                    <div className="flex flex-col items-center gap-2  z-10">
                        <div className="w-10 h-10 rounded-full bg-success text-white flex items-center justify-center ring-4 ring-white">
                            <span className="material-symbols-outlined text-[20px]">check</span>
                        </div>
                        <span className="font-label-md text-label-md text-success font-bold">
                            Akademik
                        </span>
                    </div>
                    {/* Step 3: Verification */}
                    <div className="flex flex-col items-center gap-2  z-10">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center ring-4 ring-primary/20">
                            <span className="font-bold">3</span>
                        </div>
                        <span className="font-label-md text-label-md text-primary font-bold">
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
                
                {/* Selection Canvas */}
                <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-lg">
                    {/* Left Column: Categories & Tags (Bento Style Card) */}
                    <div className="md:col-span-8 space-y-md">
                        <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl shadow-sm">
                            <div className="flex items-center gap-sm mb-lg">
                                <span className="material-symbols-outlined text-primary">
                                    interests
                                </span>
                                <h2 className="font-title-md text-title-md text-on-surface">
                                    Kategoriyalar üzrə Maraqlar
                                </h2>
                            </div>
                            {/* Category: Texnologiya */}
                            <div className="mb-lg">
                                <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-sm">
                                    Texnologiya
                                </h3>
                                <div className="flex flex-wrap gap-xs">
                                    <button
                                        className="px-md py-1.5 rounded-full border border-outline-variant text-body-md bg-white hover:bg-surface-container-high transition-all"

                                    >
                                        Python
                                    </button>
                                    <button
                                        className="px-md py-1.5 rounded-full border border-outline-variant text-body-md bg-white hover:bg-surface-container-high transition-all"

                                    >
                                        Data Science
                                    </button>
                                    <button
                                        className="px-md py-1.5 rounded-full border border-outline-variant text-body-md bg-white hover:bg-surface-container-high transition-all chip-active"

                                    >
                                        Veb İnkişafı
                                    </button>
                                    <button
                                        className="px-md py-1.5 rounded-full border border-outline-variant text-body-md bg-white hover:bg-surface-container-high transition-all"

                                    >
                                        Süni İntellekt
                                    </button>
                                    <button
                                        className="px-md py-1.5 rounded-full border border-outline-variant text-body-md bg-white hover:bg-surface-container-high transition-all"

                                    >
                                        Kiber Təhlükəsizlik
                                    </button>
                                </div>
                            </div>
                            {/* Category: Biznes */}
                            <div className="mb-lg">
                                <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-sm">
                                    Biznes və İdarəetmə
                                </h3>
                                <div className="flex flex-wrap gap-xs">
                                    <button
                                        className="px-md py-1.5 rounded-full border border-outline-variant text-body-md bg-white hover:bg-surface-container-high transition-all chip-active"

                                    >
                                        Project Management
                                    </button>
                                    <button
                                        className="px-md py-1.5 rounded-full border border-outline-variant text-body-md bg-white hover:bg-surface-container-high transition-all"

                                    >
                                        Marketing
                                    </button>
                                    <button
                                        className="px-md py-1.5 rounded-full border border-outline-variant text-body-md bg-white hover:bg-surface-container-high transition-all"

                                    >
                                        Finance
                                    </button>
                                    <button
                                        className="px-md py-1.5 rounded-full border border-outline-variant text-body-md bg-white hover:bg-surface-container-high transition-all"

                                    >
                                        HR
                                    </button>
                                </div>
                            </div>
                            {/* Category: Dizayn */}
                            <div className="mb-lg">
                                <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-sm">
                                    Dizayn
                                </h3>
                                <div className="flex flex-wrap gap-xs">
                                    <button
                                        className="px-md py-1.5 rounded-full border border-outline-variant text-body-md bg-white hover:bg-surface-container-high transition-all"

                                    >
                                        UI/UX Design
                                    </button>
                                    <button
                                        className="px-md py-1.5 rounded-full border border-outline-variant text-body-md bg-white hover:bg-surface-container-high transition-all"

                                    >
                                        Graphic Design
                                    </button>
                                    <button
                                        className="px-md py-1.5 rounded-full border border-outline-variant text-body-md bg-white hover:bg-surface-container-high transition-all"

                                    >
                                        Motion Design
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Languages & Proficiency */}
                        <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl shadow-sm">
                            <div className="flex items-center gap-sm mb-lg">
                                <span className="material-symbols-outlined text-primary">
                                    language
                                </span>
                                <h2 className="font-title-md text-title-md text-on-surface">
                                    Xarici Dil Bilikləri
                                </h2>
                            </div>
                            <div className="space-y-md">
                                <div className="flex flex-col gap-xs">
                                    <div className="flex justify-between items-center">
                                        <label className="font-label-md text-on-surface">
                                            İngilis dili
                                        </label>
                                        <span className="text-code-sm font-code-sm text-primary">
                                            Upper Intermediate (B2)
                                        </span>
                                    </div>
                                    <input
                                        className="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary"
                                        max={5}
                                        min={1}
                                        type="range"
                                        defaultValue={4}
                                    />
                                </div>
                                <div className="flex flex-col gap-xs">
                                    <div className="flex justify-between items-center">
                                        <label className="font-label-md text-on-surface">
                                            Rus dili
                                        </label>
                                        <span className="text-code-sm font-code-sm text-on-surface-variant">
                                            Elementary (A1)
                                        </span>
                                    </div>
                                    <input
                                        className="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary"
                                        max={5}
                                        min={1}
                                        type="range"
                                        defaultValue={1}
                                    />
                                </div>
                                <div className="flex flex-col gap-xs">
                                    <div className="flex justify-between items-center">
                                        <label className="font-label-md text-on-surface">
                                            Türk dili
                                        </label>
                                        <span className="text-code-sm font-code-sm text-secondary">
                                            Fluent (C1)
                                        </span>
                                    </div>
                                    <input
                                        className="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary"
                                        max={5}
                                        min={1}
                                        type="range"
                                        defaultValue={5}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Column: Goals (Vertical Card) */}
                    <div className="md:col-span-4 space-y-md">
                        <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl shadow-sm h-fit">
                            <div className="flex items-center gap-sm mb-lg">
                                <span className="material-symbols-outlined text-primary">
                                    rocket_launch
                                </span>
                                <h2 className="font-title-md text-title-md text-on-surface">
                                    Karyera Hədəfləri
                                </h2>
                            </div>
                            <div className="flex flex-col gap-sm">
                                <label className="flex items-start gap-md p-md rounded-lg border border-outline-variant hover:border-primary hover:bg-primary-container/5 transition-all cursor-pointer group">
                                    <input
                                        className="mt-1 w-4 h-4 text-primary focus:ring-primary border-outline-variant"
                                        name="career_goal"
                                        type="radio"
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-body-md font-semibold group-hover:text-primary transition-colors">
                                            Dövlət Sektoru
                                        </span>
                                        <span className="text-code-sm text-on-surface-variant">
                                            Nazirliklər və dövlət agentlikləri
                                        </span>
                                    </div>
                                </label>
                                <label className="flex items-start gap-md p-md rounded-lg border border-primary bg-primary-container/10 transition-all cursor-pointer group">
                                    <input
                                        defaultChecked
                                        className="mt-1 w-4 h-4 text-primary focus:ring-primary border-outline-variant"
                                        name="career_goal"
                                        type="radio"
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-body-md font-semibold text-primary">
                                            Startup
                                        </span>
                                        <span className="text-code-sm text-on-surface-variant">
                                            İnnovativ və dinamik mühit
                                        </span>
                                    </div>
                                </label>
                                <label className="flex items-start gap-md p-md rounded-lg border border-outline-variant hover:border-primary hover:bg-primary-container/5 transition-all cursor-pointer group">
                                    <input
                                        className="mt-1 w-4 h-4 text-primary focus:ring-primary border-outline-variant"
                                        name="career_goal"
                                        type="radio"
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-body-md font-semibold group-hover:text-primary transition-colors">
                                            Xarici Şirkətlər
                                        </span>
                                        <span className="text-code-sm text-on-surface-variant">
                                            Beynəlxalq korporasiyalar
                                        </span>
                                    </div>
                                </label>
                                <label className="flex items-start gap-md p-md rounded-lg border border-outline-variant hover:border-primary hover:bg-primary-container/5 transition-all cursor-pointer group">
                                    <input
                                        className="mt-1 w-4 h-4 text-primary focus:ring-primary border-outline-variant"
                                        name="career_goal"
                                        type="radio"
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-body-md font-semibold group-hover:text-primary transition-colors">
                                            Akademik Karyera
                                        </span>
                                        <span className="text-code-sm text-on-surface-variant">
                                            Tədqiqat və təhsil sahəsi
                                        </span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        {/* Info Card */}
                        <div className="bg-primary-container text-on-primary-container p-lg rounded-xl shadow-sm border border-primary/20 relative overflow-hidden group">
                            <div className="relative z-10">
                                <div className="flex items-center gap-sm mb-sm">
                                    <span className="material-symbols-outlined text-white">
                                        auto_awesome
                                    </span>
                                    <span className="font-label-md font-bold text-white/90">
                                        Süni İntellekt Dəstəyi
                                    </span>
                                </div>
                                <p className="text-code-sm text-white/80 leading-relaxed">
                                    Seçimlərinizə əsasən biz sizə fərdi öyrənmə planı və xüsusi təqaüd
                                    proqramları təklif edəcəyik.
                                </p>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                                <span
                                    className="material-symbols-outlined text-[120px] text-white"
                                    style={{ fontVariationSettings: '"FILL" 1' }}
                                >
                                    psychology
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
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
                            <div className="h-1.5 w-1.5 rounded-full bg-outline-variant" />
                            <div className="h-1.5 w-12 rounded-full bg-primary" />
                            <div className="h-1.5 w-1.5 rounded-full bg-outline-variant" />
                        </div>
                        <button
                            className="flex items-center gap-xs px-2xl py-sm rounded-lg bg-primary text-white font-label-md hover:bg-primary-container active:scale-95 shadow-md shadow-primary/20 transition-all"
                            onClick={() => setStep(4)}
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
        </div>

    )
}

export default Step3
