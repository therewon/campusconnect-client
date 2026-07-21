const Step3 = () => {
    return (
        <>
            {/* Selection Canvas */}
            <div className="max-w-4xl mx-auto w-full px-md grid grid-cols-1 md:grid-cols-12 gap-lg">
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
        </>

    )
}

export default Step3
