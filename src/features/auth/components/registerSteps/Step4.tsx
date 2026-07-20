import React from 'react'
import { Link } from 'react-router-dom'

type Step1Props = {
    setStep: React.Dispatch<React.SetStateAction<number>>;
};

const Step4 = ({ setStep }: Step1Props) => {
    return (
        <div className='min-h-screen flex flex-col items-center'>
            <main className="w-full max-w-4xl px-md py-xl relative z-10">
                {/* Success Header */}
                <div className="text-center mb-xl animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary-container text-on-secondary-container rounded-full mb-md shadow-inner">
                        <span
                            className="material-symbols-outlined text-[48px]"
                            style={{ fontVariationSettings: '"FILL" 1' }}
                        >
                            check_circle
                        </span>
                    </div>
                    <h1 className="font-headline-lg text-headline-lg text-on-surface mb-xs">
                        Qeydiyyat Tamamlandı!
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">
                        Təbriklər! Sizin müraciətiniz uğurla qəbul edildi. İndi profilinizi daha
                        da zənginləşdirə bilərsiniz.
                    </p>
                </div>
                {/* Progress Stepper */}
                <div className="flex items-center justify-between mb-xl relative w-full">
                    {/* Progress Line */}
                    <div className="absolute top-5 left-0 w-full h-0.5 bg-surface-container-highest z-0">
                        <div className="h-full bg-primary w-full" />
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
                        <div className="w-10 h-10 rounded-full bg-success text-white flex items-center justify-center ring-4 ring-primary/20">
                            <span className="material-symbols-outlined text-[20px]">check</span>
                        </div>
                        <span className="font-label-md text-label-md text-success font-bold">
                            Təsdiq
                        </span>
                    </div>
                    {/* Step 4: Finalize */}
                    <div className="flex flex-col items-center gap-2 z-10">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center ring-4 ring-white">
                            <span className="font-bold">4</span>
                        </div>
                        <span className="font-label-md text-label-md text-on-surface-variant">
                            Tamamla
                        </span>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-lg">
                    {/* Profile Summary Card (Bento-style Left) */}
                    <div className="lg:col-span-2 space-y-lg">
                        <div className="glass-card rounded-xl p-lg shadow-sm border-outline-variant transition-all hover:shadow-md">
                            <div className="flex items-center gap-md mb-lg">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-fixed">
                                    <img
                                        className="w-full h-full object-cover"
                                        data-alt="A professional headshot of a young university student, wearing business-casual attire, smiling confidently against a soft blurred academic library background. The lighting is warm and natural, reinforcing a sense of future leadership and academic excellence. High-quality corporate minimalism aesthetic with clean colors."
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJbzDndmpA9sK3mq9XfYK-l-6XRGOprRFAQ7Hz083UlYey7jncYkz-XTWm_RIicf0h5g4IKrYltXmXvHyC0FWQZORtOxduf6dzZyb_ot2kLIg4g1M7SZYgCKYz5PTQfJFbDjqoXyleUvVyD5Clb2SIsrcZbd6_vX89Gh-2oCX8o7OIEoKoupTYPXCMs67yX2ZSVDw3oQhMIBuoCerLIhSrpGCANhIt4s6pwtU7zzJtp5mEOl1q5N77"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-title-md text-title-md text-on-surface">
                                        Məmmədov Əli
                                    </h3>
                                    <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                                        ID: 2930405
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-md">
                                <div className="flex items-start gap-sm">
                                    <span className="material-symbols-outlined text-primary-container">
                                        account_balance
                                    </span>
                                    <div>
                                        <p className="font-label-md text-label-md text-on-surface-variant">
                                            Universitet
                                        </p>
                                        <p className="font-body-md text-body-md font-semibold">
                                            Azərbaycan Dövlət Neft və Sənaye Universiteti
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-sm">
                                    <span className="material-symbols-outlined text-primary-container">
                                        school
                                    </span>
                                    <div>
                                        <p className="font-label-md text-label-md text-on-surface-variant">
                                            Fakültə
                                        </p>
                                        <p className="font-body-md text-body-md font-semibold">
                                            İnformasiya Texnologiyaları və İdarəetmə
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-sm">
                                    <span className="material-symbols-outlined text-primary-container">
                                        badge
                                    </span>
                                    <div>
                                        <p className="font-label-md text-label-md text-on-surface-variant">
                                            İxtisas
                                        </p>
                                        <p className="font-body-md text-body-md font-semibold">
                                            Kompüter Mühəndisliyi (BA)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={()=> setStep(1)}
                                className="w-full mt-lg py-sm px-md border border-outline-variant rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors flex items-center justify-center gap-xs">
                                <span className="material-symbols-outlined text-sm">edit</span>{" "}
                                Profili Redaktə Et
                            </button>
                        </div>
                        <div className="bg-primary-container text-on-primary-container p-lg rounded-xl shadow-lg relative overflow-hidden group">
                            <div className="relative z-10">
                                <h4 className="font-title-md text-title-md mb-xs">
                                    Rəqəmsal Tələbə Kartı
                                </h4>
                                <p className="font-body-md text-body-md opacity-80 mb-md">
                                    Tezliklə aktivləşdiriləcək.
                                </p>
                                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                                    <div className="w-3/4 h-full bg-secondary-fixed" />
                                </div>
                            </div>
                            <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-[120px] opacity-10 rotate-12 group-hover:scale-110 transition-transform">
                                contactless
                            </span>
                        </div>
                    </div>
                    {/* Social Links & Final Action (Bento-style Right) */}
                    <div className="lg:col-span-3 space-y-lg">
                        <div className="bg-white rounded-xl p-lg border border-outline-variant shadow-sm">
                            <h3 className="font-title-md text-title-md text-on-surface mb-md">
                                Sosial və Peşəkar Profillər
                            </h3>
                            <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
                                Vakansiyalar və tədbirlər üçün LinkedIn və GitHub hesablarınızı
                                əlavə etməniz tövsiyə olunur.
                            </p>
                            <div className="space-y-lg">
                                <div className="relative">
                                    <label className="font-label-md text-label-md text-on-surface mb-xs block">
                                        LinkedIn Profil Linki
                                    </label>
                                    <div className="flex items-center">
                                        <span className="bg-surface-container-high h-12 w-12 flex items-center justify-center rounded-l-lg border border-r-0 border-outline-variant">
                                            <svg
                                                className="w-6 h-6 text-[#0077b5]"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </span>
                                        <input
                                            className="h-12 flex-1 rounded-r-lg border border-outline-variant px-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-body-md"
                                            placeholder="linkedin.com/in/username"
                                            type="url"
                                        />
                                    </div>
                                </div>
                                <div className="relative">
                                    <label className="font-label-md text-label-md text-on-surface mb-xs block">
                                        GitHub Profil Linki
                                    </label>
                                    <div className="flex items-center">
                                        <span className="bg-surface-container-high h-12 w-12 flex items-center justify-center rounded-l-lg border border-r-0 border-outline-variant">
                                            <svg
                                                className="w-6 h-6 text-on-surface"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </span>
                                        <input
                                            className="h-12 flex-1 rounded-r-lg border border-outline-variant px-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-body-md"
                                            placeholder="github.com/username"
                                            type="url"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-md pt-md">
                            <Link to="/"
                                className="flex-1 bg-primary text-white! h-14 rounded-lg font-title-md text-title-md font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95 flex items-center justify-center gap-sm">
                                Dashboard-a keçid{" "}
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                            <button className="sm:w-1/3 border-2 border-primary text-primary h-14 rounded-lg font-title-md text-title-md font-semibold hover:bg-primary/5 transition-colors">
                                Yadda Saxla
                            </button>
                        </div>
                        <div className="flex items-center gap-sm p-md bg-secondary-container/20 rounded-lg border border-secondary-container/40">
                            <span
                                className="material-symbols-outlined text-secondary"
                                style={{ fontVariationSettings: '"FILL" 1' }}
                            >
                                verified_user
                            </span>
                            <p className="font-label-md text-label-md text-on-secondary-container">
                                Məlumatlarınızın təhlükəsizliyi dövlət standartlarına uyğun qorunur.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            {/* Footer (Shell Contextual Suppression Logic Apply - Minimal version) */}
            <footer className="w-full mt-auto py-lg px-xl border-t border-outline-variant bg-surface flex flex-col md:flex-row justify-between items-center gap-md">
                <p className="font-label-md text-label-md text-on-surface-variant">
                    © 2024 CampusConnect. Bütün hüquqlar qorunur.
                </p>
                <div className="flex gap-lg">
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
                    <a
                        className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                        href="#"
                    >
                        Dəstək
                    </a>
                </div>
            </footer>
            {/* Success Feedback Overlay (Hidden by default) */}
            <div
                className="fixed inset-0 bg-inverse-surface/80 backdrop-blur-md z-100 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-500"
                id="success-overlay"
            >
                <div className="bg-white rounded-2xl p-2xl text-center max-w-sm mx-md scale-90 transition-transform duration-500">
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">
                        Yönləndirilir...
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                        Akademik sistemə giriş təmin edilir. Zəhmət olmasa gözləyin.
                    </p>
                    <div className="mt-lg w-full bg-surface-container h-1 rounded-full overflow-hidden">
                        <div
                            className="w-0 h-full bg-primary transition-all duration-2000 ease-out"
                            id="loader-bar"
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Step4
