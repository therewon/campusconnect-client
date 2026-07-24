import { Link, useParams } from "react-router-dom";
import { courses } from "../data/data";

const UniversitiesDetailPage = () => {
    const { id } = useParams<{ id: string }>();

    const course = courses.find(course => course.id === Number(id))

    if (!course) {
        return <h1>Kurs tapılmadı</h1>;
    }

    return (
        <main className="flex-1 p-lg md:p-xl space-y-lg">
  {/* Course Header */}
  <section className="space-y-md">
    <div className="flex items-center gap-xs">
      <Link to="/universities">
      <button className="flex items-center gap-xs text-primary font-semibold  group">
        <span className="material-symbols-outlined">arrow_back</span>
        <span className="text-sm hover:underline">Kurslarıma qayıt</span>
      </button>
      </Link>
    </div>
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md">
      <div className="space-y-1">
        <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
          Alqoritmlər və Verilənlər Strukturu
        </h2>
        <div className="flex items-center gap-md">
          <div className="flex items-center gap-xs text-on-surface-variant">
            <span className="material-symbols-outlined text-sm">person</span>
            <span className="text-sm font-medium">Dr. Murad Əliyev</span>
          </div>
          <div className="flex items-center gap-xs text-on-surface-variant">
            <span
              className="material-symbols-outlined text-sm"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              calendar_today
            </span>
            <span className="text-sm">Yaz Semestri 2024</span>
          </div>
        </div>
      </div>
      <div className="flex gap-sm">
        <button className="flex items-center gap-xs bg-white border border-outline-variant text-on-surface px-md py-2 rounded-lg hover:bg-surface-container-low transition-colors shadow-sm">
          <span className="material-symbols-outlined text-sm">share</span>
          <span className="text-sm font-semibold">Paylaş</span>
        </button>
        <button className="flex items-center gap-xs bg-primary text-white px-lg py-2 rounded-lg hover:bg-primary/90 transition-colors shadow-sm">
          <span className="material-symbols-outlined text-sm">mail</span>
          <span className="text-sm font-semibold">Müəllimə yaz</span>
        </button>
      </div>
    </div>
  </section>
  {/* Main Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
    {/* Content Column */}
    <div className="lg:col-span-8 space-y-lg">
      {/* Tabs Navigation */}
      <div className="bg-white border border-outline-variant rounded-xl shadow-sm overflow-hidden">
        <div className="flex border-b border-outline-variant px-md">
          <button
            className="px-lg py-4 text-sm font-semibold active-tab border-b-2 border-primary transition-all"
            id="tab-btn-lectures"
            // onclick="switchTab('lectures')"
          >
            Mühazirələr
          </button>
          <button
            className="px-lg py-4 text-sm font-medium text-on-surface-variant hover:text-on-surface transition-all border-b-2 border-transparent"
            id="tab-btn-videos"
            // onclick="switchTab('videos')"
          >
            Video Dərslər
          </button>
          <button
            className="px-lg py-4 text-sm font-medium text-on-surface-variant hover:text-on-surface transition-all border-b-2 border-transparent"
            id="tab-btn-assignments"
            // onclick="switchTab('assignments')"
          >
            Tapşırıqlar
          </button>
        </div>
        {/* Tab Content: Lectures */}
        <div className="p-md space-y-md" id="tab-lectures">
          <div className="flex items-center justify-between px-md py-sm">
            <h3 className="font-title-md text-sm uppercase tracking-wider text-outline">
              Material Siyahısı
            </h3>
            <button className="text-primary text-sm font-semibold hover:underline">
              Hamısını yüklə
            </button>
          </div>
          {/* Lecture List Items */}
          <div className="space-y-sm">
            <div className="group flex items-center gap-md p-md border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
              <div className="w-10 h-10 flex-shrink-0 bg-red-50 text-red-600 rounded flex items-center justify-center">
                <span className="material-symbols-outlined">
                  picture_as_pdf
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-on-surface truncate">
                  Mühazirə 1: Giriş və Mürəkkəblik Analizi
                </p>
                <p className="text-xs text-on-surface-variant">
                  Yüklənib: 15 Fev 2024 • 2.4 MB
                </p>
              </div>
              <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
                <span className="material-symbols-outlined text-outline">
                  download
                </span>
              </button>
            </div>
            <div className="group flex items-center gap-md p-md border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
              <div className="w-10 h-10 flex-shrink-0 bg-red-50 text-red-600 rounded flex items-center justify-center">
                <span className="material-symbols-outlined">
                  picture_as_pdf
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-on-surface truncate">
                  Mühazirə 2: Xətti Verilən Strukturları (Massivlər, Siyahılar)
                </p>
                <p className="text-xs text-on-surface-variant">
                  Yüklənib: 22 Fev 2024 • 3.1 MB
                </p>
              </div>
              <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
                <span className="material-symbols-outlined text-outline">
                  download
                </span>
              </button>
            </div>
            <div className="group flex items-center gap-md p-md border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
              <div className="w-10 h-10 flex-shrink-0 bg-blue-50 text-blue-600 rounded flex items-center justify-center">
                <span className="material-symbols-outlined">
                  present_to_all
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-on-surface truncate">
                  Seminarda təqdimat materialı - Həftə 2
                </p>
                <p className="text-xs text-on-surface-variant">
                  Yüklənib: 24 Fev 2024 • 1.8 MB
                </p>
              </div>
              <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
                <span className="material-symbols-outlined text-outline">
                  download
                </span>
              </button>
            </div>
            <div className="group flex items-center gap-md p-md border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
              <div className="w-10 h-10 flex-shrink-0 bg-red-50 text-red-600 rounded flex items-center justify-center">
                <span className="material-symbols-outlined">
                  picture_as_pdf
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-on-surface truncate">
                  Mühazirə 3: Steklər və Növbələr
                </p>
                <p className="text-xs text-on-surface-variant">
                  Yüklənib: 01 Mar 2024 • 1.9 MB
                </p>
              </div>
              <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
                <span className="material-symbols-outlined text-outline">
                  download
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Tab Content: Video Lessons (Hidden by default) */}
        <div className="hidden p-md space-y-md" id="tab-videos">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            {/* Video Card 1 */}
            <div className="group border border-outline-variant rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all cursor-pointer">
              <div className="aspect-video relative bg-inverse-surface">
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <span
                      className="material-symbols-outlined text-primary"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      play_arrow
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded font-bold">
                  45:20
                </div>
                <img
                  className="w-full h-full object-cover"
                  data-alt="A clean, minimalist YouTube-style video thumbnail for a lecture on 'Asymptotic Notation'. The screen shows a teacher's digital blackboard with elegant blue and white code snippets and mathematical formulas in a high-end educational environment."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPDIFYzo5H5LB89m8pSL8yAblq5GEepW9DwsGbM6W6IV5h_nEI6NR4bjAxSKTiqBpAbnGSFsP5esJOKiCefEXDl6hqMkJ6uQPXhhfahwcT7q9blEuuFIAGBGOI6s4tATJ5ftmwnzpdDz-O_GOVVTwpv_NvSSS3XdSqZ5r3kBjR3A5RuImIXuFPyVJEQgvCzYvPUX_fCLiZZvbDJhRVKHP-etIP4UYVEvl5ZvvyPCW5HPpr_wEWVrtJ"
                />
              </div>
              <div className="p-md">
                <h4 className="font-semibold text-on-surface text-sm line-clamp-1">
                  Həftə 1: Asimptotik İşarələr (O, Ω, Θ)
                </h4>
                <p className="text-xs text-on-surface-variant mt-1">
                  12 Mart 2024 • 1.2K Baxış
                </p>
              </div>
            </div>
            {/* Video Card 2 */}
            <div className="group border border-outline-variant rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all cursor-pointer">
              <div className="aspect-video relative bg-inverse-surface">
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <span
                      className="material-symbols-outlined text-primary"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      play_arrow
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded font-bold">
                  52:15
                </div>
                <img
                  className="w-full h-full object-cover"
                  data-alt="A video thumbnail featuring a visual demonstration of a linked list data structure. The visual style is professional, featuring deep navy and neon blue accents on a dark grid background, optimized for a high-end academic design system."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4p0aIJKck7pupv-qBiAAPGHAbByBIwReigVwLcliozOnbTTd6Z0IGUXAglGkiktsFnlCBXSUdyNT3ea-YEY6ahiLWj31VQiuq7rDrz-MfVSOc4kA5JENftiXOaL6DG0fmbHPq_2w5XYHwx_hTf2ZVosuU8WUYPoRJ4fS9MgPyzopqMuFdT3rpEv6ku9tJ7y--84f5j6NwAmA_Dx0_jOMtre_IWIJVHV6kfuJSFkkwZM372sXYWo4s"
                />
              </div>
              <div className="p-md">
                <h4 className="font-semibold text-on-surface text-sm line-clamp-1">
                  Həftə 2: Biristiqamətli və İkiistiqamətli Siyahılar
                </h4>
                <p className="text-xs text-on-surface-variant mt-1">
                  19 Mart 2024 • 850 Baxış
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Tab Content: Assignments (Hidden by default) */}
        <div className="hidden p-md space-y-md" id="tab-assignments">
          <div className="space-y-sm">
            <div className="flex items-center justify-between p-md border border-outline-variant rounded-lg bg-red-50/30">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                  <span className="material-symbols-outlined">
                    assignment_late
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-on-surface">
                    Laboratoriya İşi #3: Binary Tree Implementation
                  </h4>
                  <p className="text-xs text-red-600 font-medium">
                    Son tarix: Sabah, 23:59
                  </p>
                </div>
              </div>
              <button className="bg-primary text-white text-xs font-bold px-lg py-2 rounded shadow-sm">
                Təhvil ver
              </button>
            </div>
            <div className="flex items-center justify-between p-md border border-outline-variant rounded-lg bg-surface-container-low opacity-60">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-on-surface">
                    Laboratoriya İşi #2: Stack &amp; Queue Applications
                  </h4>
                  <p className="text-xs text-on-surface-variant">
                    Təhvil verildi: 05 Mart 2024
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-secondary">95/100</span>
            </div>
          </div>
        </div>
      </div>
      {/* Upcoming Section (Mobile context / Extra engagement) */}
      <div className="bg-white border border-outline-variant rounded-xl p-lg shadow-sm">
        <div className="flex items-center gap-sm mb-md">
          <span className="material-symbols-outlined text-primary">
            campaign
          </span>
          <h3 className="font-title-md text-sm font-bold uppercase tracking-wide">
            Elanlar
          </h3>
        </div>
        <div className="space-y-md">
          <div className="flex gap-md border-l-4 border-primary pl-md py-1">
            <div className="flex-1">
              <p className="text-sm font-semibold">
                Kollokvium haqqında məlumat
              </p>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                Hörmətli tələbələr, növbəti həftə keçiriləcək kollokviumda
                mühazirə 1-4 arasındakı mövzular əhatə olunacaqdır.
              </p>
              <p className="text-[10px] text-outline mt-2">Dünən, 14:30</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Sidebar Contextual Info */}
    <aside className="lg:col-span-4 space-y-lg">
      {/* Progress Card */}
      <div className="bg-white border border-outline-variant rounded-xl p-lg shadow-sm space-y-md">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-on-surface">Kursun Gedişatı</h3>
          <span className="text-primary font-black text-lg">65%</span>
        </div>
        <div className="w-full h-3 bg-surface-container-highest rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-1000"
            style={{ width: "65%" }}
          />
        </div>
        <div className="grid grid-cols-2 gap-md pt-sm">
          <div className="text-center p-sm bg-surface-container-low rounded-lg">
            <p className="text-[10px] text-outline uppercase font-bold">
              Dərslər
            </p>
            <p className="text-sm font-bold">12/18</p>
          </div>
          <div className="text-center p-sm bg-surface-container-low rounded-lg">
            <p className="text-[10px] text-outline uppercase font-bold">
              Ortalama
            </p>
            <p className="text-sm font-bold">88%</p>
          </div>
        </div>
      </div>
      {/* Recommended Resources */}
      <div className="bg-white border border-outline-variant rounded-xl p-lg shadow-sm space-y-md">
        <h3 className="font-semibold text-on-surface">
          Tövsiyə olunan resurslar
        </h3>
        <div className="space-y-sm">
          <a
            className="group flex items-center gap-md p-sm rounded-lg hover:bg-surface-container-low transition-all"
            href="#"
          >
            <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-sm">link</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold truncate group-hover:text-primary">
                Introduction to Algorithms (MIT)
              </p>
              <p className="text-[10px] text-on-surface-variant">Vebsayt</p>
            </div>
            <span className="material-symbols-outlined text-xs text-outline opacity-0 group-hover:opacity-100 transition-opacity">
              open_in_new
            </span>
          </a>
          <a
            className="group flex items-center gap-md p-sm rounded-lg hover:bg-surface-container-low transition-all"
            href="#"
          >
            <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center text-primary">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                book
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold truncate group-hover:text-primary">
                Algorithms, 4th Edition
              </p>
              <p className="text-[10px] text-on-surface-variant">E-kitab</p>
            </div>
            <span className="material-symbols-outlined text-xs text-outline opacity-0 group-hover:opacity-100 transition-opacity">
              open_in_new
            </span>
          </a>
          <a
            className="group flex items-center gap-md p-sm rounded-lg hover:bg-surface-container-low transition-all"
            href="#"
          >
            <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-sm">
                terminal
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold truncate group-hover:text-primary">
                VisuAlgo - Visualising
              </p>
              <p className="text-[10px] text-on-surface-variant">Simulyasiya</p>
            </div>
            <span className="material-symbols-outlined text-xs text-outline opacity-0 group-hover:opacity-100 transition-opacity">
              open_in_new
            </span>
          </a>
        </div>
      </div>
      {/* Faculty Contact */}
      <div className="relative overflow-hidden bg-primary-container rounded-xl p-lg text-on-primary-container">
        <div className="relative z-10 space-y-sm">
          <h4 className="font-bold">Kömək lazımdır?</h4>
          <p className="text-xs opacity-80 leading-relaxed">
            Dərslər və ya tapşırıqlar barədə sualınız yaranarsa, fakültə
            köməkçiləri ilə əlaqə saxlayın.
          </p>
          <button className="bg-white text-primary px-md py-1.5 rounded-lg text-xs font-bold mt-md shadow-lg">
            Sorğu göndər
          </button>
        </div>
        {/* Abstract background element */}
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/5 rounded-full blur-xl" />
      </div>
    </aside>
  </div>
</main>


    )
}

export default UniversitiesDetailPage
