import React from 'react'
import { courses } from "../data/data"
import { Link } from 'react-router-dom'

const UniversitiesPage = () => {
    return (
        <main className="p-lg lg:p-xl flex-1 max-w-screen-2xl mx-auto w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-xl">
                <div>
                    <nav className="flex items-center gap-2 text-on-surface-variant mb-2">
                        <span className="text-xs uppercase font-bold tracking-wider">
                            Əsas Panel
                        </span>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                        <span className="text-xs uppercase font-bold tracking-wider text-primary">
                            Mənim Kurslarım
                        </span>
                    </nav>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">
                        Mənim Kurslarım
                    </h2>
                    <p className="text-on-surface-variant font-body-md mt-1">
                        Payız Semestri 2024
                    </p>
                </div>
                <div className="flex gap-sm">
                    <button className="flex items-center gap-2 px-md py-2 bg-surface-container-lowest border border-outline-variant rounded-lg text-on-surface font-label-md hover:bg-surface-container-high transition-colors">
                        <span className="material-symbols-outlined text-[18px]">
                            filter_list
                        </span>
                        <span>Filtrlər</span>
                    </button>
                    <button className="flex items-center gap-2 px-md py-2 bg-primary text-white rounded-lg font-label-md hover:opacity-90 transition-all active:scale-95 shadow-sm">
                        <span className="material-symbols-outlined text-[18px]">add_task</span>
                        <span>Yeni Tapşırıq</span>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-lg">
                {/* Course Cards Grid */}
                <div className="col-span-12 lg:col-span-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                        {
                            courses.map((item: any) => (
                                <div key={item.id} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col shadow-sm hover:shadow-md transition-shadow group">
                                    <div className="flex justify-between items-start mb-md">
                                        <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                            {item.status}
                                        </span>
                                        <button className="text-on-surface-variant hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined">more_vert</span>
                                        </button>
                                    </div>
                                    <h3 className="font-title-md text-title-md text-primary mb-1 group-hover:underline cursor-pointer">
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center gap-2 mb-lg">
                                        <img
                                            className="w-6 h-6 rounded-full"
                                            data-alt="Close-up professional portrait of a senior male professor with a friendly expression, wearing silver-rimmed glasses and a navy blue blazer. He stands in front of a whiteboard with complex architectural diagrams. Professional corporate lighting, clean background, sharp focus, 8k resolution."
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6_Gt59ABgmSVGF2JGlBTkdB_G0VgVkFGGNMhiRInTa6eBvY9Aq1NHrdrqwWjphLg0bCFoeiYzwzPOAO1qxeDiPnJtmzRtZ1F_9VvUsWgbxsJhk_VUWZWV-blQxmUM03vCcZldQvFeHj6Is88xq8KGq62mWu9u9bNavxzih4Y3AEtE5eLUOFs5AtHUjrhC7b-5_HY2cS3se5ET-wibWihdv-toeemTPj_IVzsG4On5Z2S8xwk2z0Ft"
                                        />
                                        <span className="text-on-surface-variant font-body-md">
                                            {item.instructor}
                                        </span>
                                    </div>
                                    <div className="mb-lg">
                                        <div className="flex justify-between text-xs font-bold mb-2">
                                            <span className="text-on-surface">Tərəqqi</span>
                                            <span className="text-primary">{item.progress}%</span>
                                        </div>
                                        <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                                            <div
                                                className="bg-primary h-full rounded-full"
                                                style={{ width: item.progress + "%" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="bg-surface-container-low rounded-lg p-sm mb-lg border-l-4 border-primary">
                                        <p className="text-[10px] uppercase font-bold text-primary mb-1">
                                            Növbəti Tapşırıq
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-body-md font-semibold text-on-surface">
                                                {item.nextTask.title}
                                            </span>
                                            <span className="text-[12px] font-bold">
                                                {
                                                    item.progress === 100
                                                        ? <span className="material-symbols-outlined text-[14px] text-secondary border-2 rounded-full ">
                                                            check
                                                        </span> :
                                                        item.progress < 80 ?
                                                            <div className='flex items-center text-error gap-2'>
                                                                <span className="material-symbols-outlined text-[14px] ">
                                                                    alarm
                                                                </span>
                                                                {item.nextTask.deadline}
                                                            </div> :
                                                            <div className=''>{item.nextTask.deadline}</div>
                                                }


                                            </span>
                                        </div>
                                    </div>
                                    <Link
                                        className="mt-auto flex items-center justify-center gap-2 py-3 bg-primary-container text-white! rounded-lg font-bold text-sm hover:brightness-110 transition-all active:scale-95"
                                        to={`/universities/${item.id}`}
                                    >
                                        Kursa keçid
                                        <span className="material-symbols-outlined text-[18px]">
                                            arrow_forward
                                        </span>
                                    </Link>
                                </div>
                            ))
                        }
                        {/* Card 4 (Bento Style Add) */}
                        <div className="bg-surface-container border-2 border-dashed border-outline-variant rounded-xl p-md flex flex-col items-center justify-center gap-md shadow-none hover:bg-surface-container-high transition-all cursor-pointer">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary-container shadow-sm">
                                <span className="material-symbols-outlined text-[32px]">
                                    add_circle
                                </span>
                            </div>
                            <div className="text-center">
                                <p className="font-bold text-on-surface">Yeni Kurs Əlavə Et</p>
                                <p className="text-xs text-on-surface-variant">
                                    Kataloqdan seçim edin
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Academic Resources Section */}
                    <section className="mt-2xl">
                        <h4 className="font-title-md text-title-md text-on-surface mb-lg">
                            Akademik Resurslar
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-md">
                            <a
                                className="bg-surface-container-low border border-outline-variant rounded-lg p-lg flex items-center gap-md hover:bg-primary-fixed transition-all group"
                                href="#"
                            >
                                <div className="p-3 bg-white rounded-lg shadow-sm group-hover:bg-primary-container group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">library_books</span>
                                </div>
                                <div>
                                    <p className="font-bold text-on-surface">Rəqəmsal Kitabxana</p>
                                    <p className="text-xs text-on-surface-variant">
                                        200k+ Elektron resurs
                                    </p>
                                </div>
                            </a>
                            <a
                                className="bg-surface-container-low border border-outline-variant rounded-lg p-lg flex items-center gap-md hover:bg-primary-fixed transition-all group"
                                href="#"
                            >
                                <div className="p-3 bg-white rounded-lg shadow-sm group-hover:bg-primary-container group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">description</span>
                                </div>
                                <div>
                                    <p className="font-bold text-on-surface">Sillabuslar</p>
                                    <p className="text-xs text-on-surface-variant">
                                        Dərs proqramları
                                    </p>
                                </div>
                            </a>
                            <a
                                className="bg-surface-container-low border border-outline-variant rounded-lg p-lg flex items-center gap-md hover:bg-primary-fixed transition-all group"
                                href="#"
                            >
                                <div className="p-3 bg-white rounded-lg shadow-sm group-hover:bg-primary-container group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">quiz</span>
                                </div>
                                <div>
                                    <p className="font-bold text-on-surface">İmtahan Sualları</p>
                                    <p className="text-xs text-on-surface-variant">
                                        Arxiv (2020-2023)
                                    </p>
                                </div>
                            </a>
                        </div>
                    </section>
                </div>
                {/* Sidebar Content (Schedule) */}
                <div className="col-span-12 lg:col-span-4 space-y-lg">
                    <section className="bg-inverse-surface text-white rounded-2xl p-lg shadow-lg relative overflow-hidden">
                        {/* Decorative background element */}
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary opacity-20 rounded-full blur-3xl" />
                        <div className="flex justify-between items-center mb-lg relative z-10">
                            <h3 className="font-title-md text-title-md">Cari Semestr Cədvəli</h3>
                            <span className="material-symbols-outlined cursor-pointer hover:rotate-90 transition-transform">
                                refresh
                            </span>
                        </div>
                        <div className="space-y-md relative z-10">
                            <p className="text-xs font-bold text-primary-fixed-dim uppercase tracking-widest mb-4">
                                Bu gün: Bazar ertəsi
                            </p>
                            {/* Schedule Item 1 */}
                            <div className="flex gap-md group cursor-default">
                                <div className="flex flex-col items-center">
                                    <span className="text-xs font-bold text-primary-fixed-dim">
                                        09:00
                                    </span>
                                    <div className="w-px h-full bg-outline-variant my-1" />
                                </div>
                                <div className="flex-1 pb-4">
                                    <div className="bg-white/10 hover:bg-white/20 transition-colors p-md rounded-xl border border-white/10">
                                        <p className="font-bold text-sm">Alqoritmlər</p>
                                        <div className="flex items-center gap-1 text-[11px] opacity-70 mt-1">
                                            <span className="material-symbols-outlined text-xs">
                                                location_on
                                            </span>
                                            Otaq 402, Mühazirə
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Schedule Item 2 */}
                            <div className="flex gap-md group cursor-default">
                                <div className="flex flex-col items-center">
                                    <span className="text-xs font-bold text-primary-fixed-dim">
                                        11:30
                                    </span>
                                    <div className="w-px h-full bg-outline-variant my-1" />
                                </div>
                                <div className="flex-1 pb-4">
                                    <div className="bg-secondary/40 hover:bg-secondary/50 transition-colors p-md rounded-xl border border-secondary/20">
                                        <p className="font-bold text-sm">Proqramlaşdırma</p>
                                        <div className="flex items-center gap-1 text-[11px] opacity-90 mt-1">
                                            <span className="material-symbols-outlined text-xs">
                                                science
                                            </span>
                                            Lab A-12
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Schedule Item 3 (Gap/Lunch) */}
                            <div className="flex gap-md opacity-40">
                                <div className="flex flex-col items-center">
                                    <span className="text-xs font-bold">13:00</span>
                                    <div className="w-px h-4 bg-outline-variant my-1" />
                                </div>
                                <div className="flex-1 py-1 italic text-[11px]">Nahar fasiləsi</div>
                            </div>
                            {/* Schedule Item 4 */}
                            <div className="flex gap-md group cursor-default">
                                <div className="flex flex-col items-center">
                                    <span className="text-xs font-bold text-primary-fixed-dim">
                                        14:00
                                    </span>
                                    <div className="w-px h-full opacity-0 my-1" />
                                </div>
                                <div className="flex-1">
                                    <div className="bg-white/10 hover:bg-white/20 transition-colors p-md rounded-xl border border-white/10">
                                        <p className="font-bold text-sm">Kompüter Şəbəkələri</p>
                                        <div className="flex items-center gap-1 text-[11px] opacity-70 mt-1">
                                            <span className="material-symbols-outlined text-xs">
                                                groups
                                            </span>
                                            Seminari Room B
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="w-full mt-xl py-3 border border-white/20 rounded-lg text-xs font-bold hover:bg-white/5 transition-all">
                            Bütün Həftəni Gör
                        </button>
                    </section>
                    {/* Quick Notifications/Stats */}
                    <section className="bg-surface-container-high border border-outline-variant rounded-2xl p-lg">
                        <h4 className="font-label-md text-label-md text-on-surface-variant uppercase font-bold mb-md">
                            Akademik Vəziyyət
                        </h4>
                        <div className="space-y-md">
                            <div className="flex items-center justify-between">
                                <span className="text-body-md">Ümumi GPA</span>
                                <span className="text-title-md font-black text-primary">3.82</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-body-md">Davamiyyət</span>
                                <span className="text-title-md font-black text-secondary">94%</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-body-md">Qazanılmış Kreditlər</span>
                                <span className="text-title-md font-black text-on-surface">
                                    112 / 240
                                </span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>

    )
}

export default UniversitiesPage
