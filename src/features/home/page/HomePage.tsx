

const HomePage = () => {
  return (
    <>
  <nav className="sticky top-0 z-50 flex justify-between items-center w-full px-lg h-16 bg-surface border-b border-outline-variant">
    <div className="flex items-center gap-sm">
      <span className="font-headline-lg text-headline-lg font-black text-primary">
        CampusConnect
      </span>
    </div>
    <div className="hidden lg:flex items-center gap-xl">
      <a
        className="text-primary font-bold border-b-2 border-primary pb-1 font-label-md text-label-md"
        href="#"
      >
        Ana Səhifə
      </a>
      <a
        className="text-on-surface-variant hover:text-on-surface transition-all font-label-md text-label-md"
        href="#universities"
      >
        Universitetlər
      </a>
      <a
        className="text-on-surface-variant hover:text-on-surface transition-all font-label-md text-label-md"
        href="#features"
      >
        Xüsusiyyətlər
      </a>
      <a
        className="text-on-surface-variant hover:text-on-surface transition-all font-label-md text-label-md"
        href="#stats"
      >
        Statistika
      </a>
    </div>
    <div className="flex items-center gap-md">
      <div className="hidden md:flex items-center gap-sm px-md py-sm bg-surface-container-high rounded-full font-label-md text-label-md text-on-surface-variant">
        <span className="material-symbols-outlined text-[18px]">language</span>
        <span>AZ/TR/EN</span>
      </div>
      <button className="bg-primary text-on-primary px-lg py-sm rounded-full font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all">
        Daxil Ol
      </button>
    </div>
  </nav>
  <main>
    {/* Hero Section */}
    <section className="relative min-h-[870px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center brightness-75"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB4dQ1D0zagkD0GjeghU3n_W_c5xB-ac3wgegsSRPkTq8jlAVLngQv7tO_iiT5c37wcV_-UQvtKNSXPxP4uI7h_sk3qxihBJ2JZca884c89SqpYZJPO1IkZoq8bDg1EfuZEtWH8LCH7vRz7k50PSFgnYwEtZxvoJeTPky-9W1S15yVynTR3oMGU2XuOiUXddwa8bsNtvS1KEmVNSFsws7hyMaGwh59-s8F_rAxYLpjHHGK8PBsz460c")'
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary/80 to-transparent" />
      </div>
      <div className="container mx-auto px-lg relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-display-lg text-display-lg text-white mb-md">
            Milli Universitet Rəqəmsal Ekosistemi
          </h1>
          <p className="font-body-lg text-body-lg text-white/90 mb-xl max-w-xl">
            Azərbaycan və Türkiyə universitetlərini birləşdirən vahid rəqəmsal
            platforma. Təhsil, karyera və şəbəkələşmə üçün innovativ həllər.
          </p>
          <div className="flex flex-wrap gap-md">
            <button className="bg-secondary-fixed text-on-secondary-fixed px-xl py-md rounded-xl font-title-md text-title-md shadow-lg hover:bg-secondary-fixed-dim transition-all">
              Tələbə kimi qeydiyyatdan keç
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-xl py-md rounded-xl font-title-md text-title-md hover:bg-white/20 transition-all">
              Universitet müraciəti
            </button>
            <button
              className="bg-white text-primary px-xl py-md rounded-xl font-title-md text-title-md hover:bg-surface-container-low shadow-lg transition-all flex items-center gap-sm"
            //   onclick="window.location.href='#rankings'"
            >
              <span className="material-symbols-outlined">visibility</span>
              Qonaq kimi daxil ol
            </button>
          </div>
        </div>
      </div>
    </section>
    {/* University Rankings Section */}
    <section className="py-2xl bg-surface-container-low" id="rankings">
      <div className="container mx-auto px-lg">
        <div className="flex flex-col md:flex-row justify-between items-end mb-xl gap-md">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">
              Universitet Reytinqləri 2024
            </h2>
            <p className="text-on-surface-variant">
              Akademik nailiyyətlər, məzun məşğulluğu və innovasiya
              göstəricilərinə əsaslanan milli sıralama.
            </p>
          </div>
          <div className="flex bg-surface-container-high p-1 rounded-full mb-2 md:mb-0">
            <button className="px-lg py-2 bg-primary text-on-primary rounded-full font-label-md transition-all">
              Milli İndeks
            </button>
            <button className="px-lg py-2 text-on-surface-variant hover:text-primary rounded-full font-label-md transition-all">
              Beynəlxalq Reytinqlər
            </button>
          </div>
          <button className="text-primary font-title-md text-title-md flex items-center gap-xs hover:gap-sm transition-all">
            Hamısına bax{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {/* Rank 1 */}
          <div className="bg-white p-lg rounded-xl shadow-sm border border-outline-variant hover:shadow-xl transition-all group relative overflow-hidden glass-card">
            <div className="absolute top-0 right-0 bg-primary text-white px-md py-1 rounded-bl-xl font-bold">
              #1
            </div>
            <div className="flex items-start gap-md mb-md">
              <div className="w-16 h-16 rounded-lg bg-surface-container-high flex items-center justify-center p-2">
                <span className="material-symbols-outlined text-primary text-4xl">
                  account_balance
                </span>
              </div>
              <div>
                <h3 className="font-title-md text-title-md text-on-surface">
                  Bakı Dövlət Universiteti
                </h3>
                <p className="text-label-md text-on-surface-variant uppercase tracking-wider">
                  Bakı, Azərbaycan
                </p>
              </div>
            </div>
            <div className="space-y-sm mb-lg">
              <div className="grid grid-cols-2 gap-x-md gap-y-2 mb-lg">
                <div className="space-y-1 glass-card">
                  <div className="flex justify-between text-[10px] uppercase tracking-wider text-on-surface-variant">
                    <span>Məzun Məşğulluğu</span>
                    <span>88%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[88%]" />
                  </div>
                </div>
                <div className="space-y-1 glass-card">
                  <div className="flex justify-between text-[10px] uppercase tracking-wider text-on-surface-variant">
                    <span>Elmi Nəşrlər</span>
                    <span>92%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[92%]" />
                  </div>
                </div>
                <div className="space-y-1 glass-card">
                  <div className="flex justify-between text-[10px] uppercase tracking-wider text-on-surface-variant">
                    <span>Tələbə Məmnuniyyəti</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[95%]" />
                  </div>
                </div>
                <div className="space-y-1 glass-card">
                  <div className="flex justify-between text-[10px] uppercase tracking-wider text-on-surface-variant">
                    <span>İnnovasiya</span>
                    <span>78%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[78%]" />
                  </div>
                </div>
              </div>
            </div>
            <a
              className="w-full py-sm bg-surface-container-high text-primary rounded-lg font-label-md text-center block group-hover:bg-primary group-hover:text-white transition-colors"
              href="#"
            >
              <div className="flex items-center justify-center gap-sm">
                <span>Detallara bax</span>
                <span className="material-symbols-outlined text-sm">
                  trending_up
                </span>
              </div>
            </a>
          </div>
          {/* Rank 2 */}
          <div className="bg-white p-lg rounded-xl shadow-sm border border-outline-variant hover:shadow-xl transition-all group relative overflow-hidden glass-card">
            <div className="absolute top-0 right-0 bg-primary-fixed-dim text-on-primary-fixed px-md py-1 rounded-bl-xl font-bold">
              #2
            </div>
            <div className="flex items-start gap-md mb-md">
              <div className="w-16 h-16 rounded-lg bg-surface-container-high flex items-center justify-center p-2">
                <span className="material-symbols-outlined text-primary text-4xl">
                  engineering
                </span>
              </div>
              <div>
                <h3 className="font-title-md text-title-md text-on-surface">
                  Azərbaycan Texniki Universiteti
                </h3>
                <p className="text-label-md text-on-surface-variant uppercase tracking-wider">
                  Bakı, Azərbaycan
                </p>
              </div>
            </div>
            <div className="space-y-sm mb-lg">
              <div className="grid grid-cols-2 gap-x-md gap-y-2 mb-lg">
                <div className="space-y-1 glass-card">
                  <div className="flex justify-between text-[10px] uppercase tracking-wider text-on-surface-variant">
                    <span>Məzun Məşğulluğu</span>
                    <span>82%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[82%]" />
                  </div>
                </div>
                <div className="space-y-1 glass-card">
                  <div className="flex justify-between text-[10px] uppercase tracking-wider text-on-surface-variant">
                    <span>Elmi Nəşrlər</span>
                    <span>96%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[96%]" />
                  </div>
                </div>
                <div className="space-y-1 glass-card">
                  <div className="flex justify-between text-[10px] uppercase tracking-wider text-on-surface-variant">
                    <span>Tələbə Məmnuniyyəti</span>
                    <span>89%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[89%]" />
                  </div>
                </div>
                <div className="space-y-1 glass-card">
                  <div className="flex justify-between text-[10px] uppercase tracking-wider text-on-surface-variant">
                    <span>İnnovasiya</span>
                    <span>94%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[94%]" />
                  </div>
                </div>
              </div>
            </div>
            <a
              className="w-full py-sm bg-surface-container-high text-primary rounded-lg font-label-md text-center block group-hover:bg-primary group-hover:text-white transition-colors"
              href="#"
            >
              <div className="flex items-center justify-center gap-sm">
                <span>Detallara bax</span>
                <span className="material-symbols-outlined text-sm">
                  trending_up
                </span>
              </div>
            </a>
          </div>
          {/* Rank 3 */}
          <div className="bg-white p-lg rounded-xl shadow-sm border border-outline-variant hover:shadow-xl transition-all group relative overflow-hidden glass-card">
            <div className="absolute top-0 right-0 bg-secondary-container text-on-secondary-container px-md py-1 rounded-bl-xl font-bold">
              #3
            </div>
            <div className="flex items-start gap-md mb-md">
              <div className="w-16 h-16 rounded-lg bg-surface-container-high flex items-center justify-center p-2">
                <span className="material-symbols-outlined text-primary text-4xl">
                  payments
                </span>
              </div>
              <div>
                <h3 className="font-title-md text-title-md text-on-surface">
                  UNEC - İqtisad Universiteti
                </h3>
                <p className="text-label-md text-on-surface-variant uppercase tracking-wider">
                  Bakı, Azərbaycan
                </p>
              </div>
            </div>
            <div className="space-y-sm mb-lg">
              <div className="grid grid-cols-2 gap-x-md gap-y-2 mb-lg">
                <div className="space-y-1 glass-card">
                  <div className="flex justify-between text-[10px] uppercase tracking-wider text-on-surface-variant">
                    <span>Məzun Məşğulluğu</span>
                    <span>91%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[91%]" />
                  </div>
                </div>
                <div className="space-y-1 glass-card">
                  <div className="flex justify-between text-[10px] uppercase tracking-wider text-on-surface-variant">
                    <span>Elmi Nəşrlər</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[85%]" />
                  </div>
                </div>
                <div className="space-y-1 glass-card">
                  <div className="flex justify-between text-[10px] uppercase tracking-wider text-on-surface-variant">
                    <span>Tələbə Məmnuniyyəti</span>
                    <span>93%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[93%]" />
                  </div>
                </div>
                <div className="space-y-1 glass-card">
                  <div className="flex justify-between text-[10px] uppercase tracking-wider text-on-surface-variant">
                    <span>İnnovasiya</span>
                    <span>82%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[82%]" />
                  </div>
                </div>
              </div>
            </div>
            <a
              className="w-full py-sm bg-surface-container-high text-primary rounded-lg font-label-md text-center block group-hover:bg-primary group-hover:text-white transition-colors"
              href="#"
            >
              <div className="flex items-center justify-center gap-sm">
                <span>Detallara bax</span>
                <span className="material-symbols-outlined text-sm">
                  trending_up
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* Stats Bar */}
    <section className="bg-inverse-surface py-xl" id="stats">
      <div className="container mx-auto px-lg">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-lg text-center">
          <div>
            <div className="font-display-lg text-display-lg text-primary-fixed-dim">
              50+
            </div>
            <div className="font-label-md text-label-md text-on-primary-container uppercase tracking-widest">
              Universitetlər
            </div>
          </div>
          <div>
            <div className="font-display-lg text-display-lg text-primary-fixed-dim">
              250K+
            </div>
            <div className="font-label-md text-label-md text-on-primary-container uppercase tracking-widest">
              Tələbələr
            </div>
          </div>
          <div>
            <div className="font-display-lg text-display-lg text-primary-fixed-dim">
              1200+
            </div>
            <div className="font-label-md text-label-md text-on-primary-container uppercase tracking-widest">
              Tərəfdaşlar
            </div>
          </div>
          <div>
            <div className="font-display-lg text-display-lg text-primary-fixed-dim">
              98%
            </div>
            <div className="font-label-md text-label-md text-on-primary-container uppercase tracking-widest">
              Məzun Karyerası
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Features Bento Grid */}
    <section className="py-2xl bg-surface" id="features">
      <div className="container mx-auto px-lg">
        <div className="mb-2xl text-center max-w-2xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">
            Gələcəyin Təhsil Texnologiyası
          </h2>
          <p className="text-on-surface-variant">
            CampusConnect yalnız bir portal deyil, hər bir akademik addımınızı
            dəstəkləyən ağıllı köməkçidir.
          </p>
        </div>
        <div className="bento-grid">
          {/* Feature 1: Multi-University */}
          <div className="col-span-12 lg:col-span-8 p-xl glass-card rounded-xl flex flex-col md:flex-row gap-lg items-center group cursor-pointer hover:shadow-xl transition-all">
            <div className="flex-1">
              <span className="material-symbols-outlined text-primary text-5xl mb-md">
                account_balance
              </span>
              <h3 className="font-title-md text-title-md text-primary mb-sm">
                Geniş Universitet Şəbəkəsi
              </h3>
              <p className="text-on-surface-variant">
                Ölkənin bütün dövlət və özəl universitetlərinə vahid pəncərə
                üzərindən giriş imkanı. Bir kliklə dərslər, imtahanlar və
                akademik sənədlərə nəzarət edin.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-48 rounded-lg overflow-hidden border border-outline-variant">
              <img
                alt="University Network"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW-X1yLGzjPCtCzCn0GClafqetbxwD4qXeLyAFvNJZ-xKEOvH2e_Cgr2E5VYvHOvqg3Yl4aSvsuP4pxVqPvdsJYEKQgz-D7ZFPLOUhXkyG7Y5I3J7kzkcaDy12S4ViLdkKHsjr7mTGbAifYbAjHngshpyoDBXjKlgmQxLJ3p0toZm_y3i0rtZG0pf3p5kHuPRXuWCcUKJr63WRW3ePKzuX84N2XQZbRJNRKNJVbMk7JjtlznK46B2o"
              />
            </div>
          </div>
          {/* Feature 2: Career Platform */}
          <div className="col-span-12 lg:col-span-4 p-xl bg-primary-container rounded-xl flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-all">
            <div>
              <span className="material-symbols-outlined text-on-primary-container text-5xl mb-md">
                work
              </span>
              <h3 className="font-title-md text-title-md text-white mb-sm">
                Karyera Platforması
              </h3>
              <p className="text-white/80">
                Tərəfdaş şirkətlərdən eksklüziv vakansiyalar və təcrübə
                proqramları birbaşa sizin profilinizdə.
              </p>
            </div>
            <div className="mt-lg flex -space-x-4">
              <div className="w-12 h-12 rounded-full border-2 border-primary bg-surface flex items-center justify-center font-bold text-primary">
                A
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-primary bg-surface flex items-center justify-center font-bold text-primary">
                P
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-primary bg-surface flex items-center justify-center font-bold text-primary">
                S
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-primary bg-primary-fixed text-primary flex items-center justify-center font-bold">
                +10
              </div>
            </div>
          </div>
          {/* Feature 3: Alumni Tracking */}
          <div className="col-span-12 lg:col-span-4 p-xl bg-surface-container-high rounded-xl border border-outline-variant group cursor-pointer hover:shadow-xl transition-all">
            <span className="material-symbols-outlined text-secondary text-5xl mb-md">
              school
            </span>
            <h3 className="font-title-md text-title-md text-on-surface mb-sm">
              Məzun İzləmə Sistemi
            </h3>
            <p className="text-on-surface-variant">
              Məzunların karyera inkişafını izləyin, mentorluq proqramlarına
              qoşulun və milli intellektual şəbəkənin bir hissəsi olun.
            </p>
          </div>
          {/* Feature 4: AI Advisor */}
          <div className="col-span-12 lg:col-span-8 p-xl glass-card rounded-xl flex flex-col md:flex-row-reverse gap-lg items-center group cursor-pointer hover:shadow-xl transition-all">
            <div className="flex-1">
              <span className="material-symbols-outlined text-tertiary text-5xl mb-md">
                smart_toy
              </span>
              <h3 className="font-title-md text-title-md text-tertiary mb-sm">
                Süni İntellekt Məsləhətçisi
              </h3>
              <p className="text-on-surface-variant">
                Akademik göstəricilərinizə əsaslanan fərdi inkişaf planı. AI
                sistemimiz sizə ən uyğun kursları və karyera yollarını təklif
                edir.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-48 rounded-lg overflow-hidden border border-outline-variant relative">
              <div className="absolute inset-0 bg-linear-to-br from-tertiary/20 to-primary/20" />
              <img
                alt="AI Education Advisor"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxOtBswDmXicekfXDXD1XfydjrjPSOu5kCU6sr8MLHeXESi0xDvGkCtqF9WfxBbSzK9dH7EqW6-E4HS_haksP2NGamUy8xTMSy7WT-dzynGA3qVvTWALdWXbgEZoZXj40Gc21KZRsgItCr9Qy210_YQ_lhfETPjuNONuMgJALkZvjKAkIotDX4Zz6wCBqoRXozNqMIB70H4_HOEu3bk6TZdEv7HC4XZzqrxks1y2C8Pjk7kBPh0O6b"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* CTA Section */}
    <section className="py-2xl bg-primary overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl" />
      <div className="container mx-auto px-lg relative z-10 text-center">
        <h2 className="font-display-lg text-display-lg text-white mb-md">
          Rəqəmsal Gələcəyinizi Bu Gün Qurmağa Başlayın
        </h2>
        <p className="font-body-lg text-body-lg text-white/80 mb-2xl max-w-2xl mx-auto">
          Azərbaycanın milli rəqəmsal təhsil ekosisteminə qoşulun və bütün
          akademik imkanlardan bir mərkəzdən yararlanın.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-md">
          <button className="bg-secondary text-white px-2xl py-md rounded-xl font-title-md text-title-md hover:brightness-110 shadow-lg transition-all flex items-center justify-center gap-sm">
            <span className="material-symbols-outlined">person_add</span>
            Tələbə Portalı
          </button>
          <button className="bg-white text-primary px-2xl py-md rounded-xl font-title-md text-title-md hover:bg-surface-container-low shadow-lg transition-all flex items-center justify-center gap-sm">
            <span className="material-symbols-outlined">corporate_fare</span>
            Universitet Girişi
          </button>
          <button className="bg-primary-container text-white border border-on-primary-container px-2xl py-md rounded-xl font-title-md text-title-md hover:bg-tertiary-container shadow-lg transition-all flex items-center justify-center gap-sm">
            <span className="material-symbols-outlined">public</span>
            Qonaq Girişi
          </button>
        </div>
      </div>
    </section>
  </main>
  {/* Footer */}
  <footer className="bg-inverse-surface text-white py-2xl">
    <div className="container mx-auto px-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2xl mb-2xl">
        <div className="col-span-1 lg:col-span-1">
          <span className="font-headline-lg text-headline-lg font-black text-primary-fixed-dim block mb-md">
            CampusConnect
          </span>
          <p className="text-on-primary-container font-body-md text-body-md">
            Azərbaycan Respublikasının Milli Digital Universiteti üçün
            hazırlanmış vahid idarəetmə sistemi.
          </p>
        </div>
        <div>
          <h4 className="font-title-md text-title-md mb-md">Keçidlər</h4>
          <ul className="space-y-sm text-on-primary-container">
            <li>
              <a className="hover:text-white transition-colors" href="#">
                Haqqımızda
              </a>
            </li>
            <li>
              <a
                className="hover:text-white transition-colors"
                href="#rankings"
              >
                Universitetlər
              </a>
            </li>
            <li>
              <a className="hover:text-white transition-colors" href="#">
                Xidmətlər
              </a>
            </li>
            <li>
              <a className="hover:text-white transition-colors" href="#">
                Karyera
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-title-md text-title-md mb-md">Dəstək</h4>
          <ul className="space-y-sm text-on-primary-container">
            <li>
              <a className="hover:text-white transition-colors" href="#">
                Tez-tez verilən suallar
              </a>
            </li>
            <li>
              <a className="hover:text-white transition-colors" href="#">
                Tədris materialları
              </a>
            </li>
            <li>
              <a className="hover:text-white transition-colors" href="#">
                Əlaqə
              </a>
            </li>
            <li>
              <a className="hover:text-white transition-colors" href="#">
                Gizlilik siyasəti
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-title-md text-title-md mb-md">Bizimlə Əlaqə</h4>
          <div className="flex gap-md mb-md">
            <a
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">share</span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">mail</span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">call</span>
            </a>
          </div>
          <p className="text-sm text-on-primary-container">
            Bakı ş., AZ1000, Azərbaycan
          </p>
        </div>
      </div>
      <div className="pt-xl border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-md text-on-primary-container text-sm">
        <p>© 2024 CampusConnect. Bütün hüquqlar qorunur.</p>
        <div className="flex gap-xl">
          <a className="hover:text-white" href="#">
            Şərtlər və Qaydalar
          </a>
          <a className="hover:text-white" href="#">
            Cookie Siyasəti
          </a>
        </div>
      </div>
    </div>
  </footer>
  {/* BottomNavBar (Mobile Only) */}
  <nav className="lg:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 py-3 bg-surface border-t border-outline-variant shadow-lg">
    <div className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1">
      <span className="material-symbols-outlined">home</span>
      <span className="font-label-md-mobile text-[10px]">Home</span>
    </div>
    <div className="flex flex-col items-center justify-center text-on-surface-variant">
      <span className="material-symbols-outlined">event</span>
      <span className="font-label-md-mobile text-[10px]">Events</span>
    </div>
    <div className="flex flex-col items-center justify-center text-on-surface-variant">
      <span className="material-symbols-outlined">work_outline</span>
      <span className="font-label-md-mobile text-[10px]">Jobs</span>
    </div>
    <div className="flex flex-col items-center justify-center text-on-surface-variant">
      <span className="material-symbols-outlined">chat</span>
      <span className="font-label-md-mobile text-[10px]">Messages</span>
    </div>
    <div className="flex flex-col items-center justify-center text-on-surface-variant">
      <span className="material-symbols-outlined">menu</span>
      <span className="font-label-md-mobile text-[10px]">Menu</span>
    </div>
  </nav>
</>

  )
}

export default HomePage
