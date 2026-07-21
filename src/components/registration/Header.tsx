
const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center w-full px-lg h-16 bg-surface border-b border-outline-variant mb-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl">
            school
          </span>
          <span className="font-headline-lg  sm:text-headline-lg text-title-md font-black text-primary">
            CampusConnect
          </span>
        </div>
        <div className="flex items-center gap-md ">
          <div className="hidden md:flex flex-col items-end">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase">
              Sistem Dili
            </span>
            <span className="font-label-md text-label-md font-bold text-primary">
              AZ/TR/EN
            </span>
          </div>
          <button className="flex items-center justify-center p-2 rounded-full hover:bg-surface-container-high transition-all">
            <span className="material-symbols-outlined text-on-surface-variant">
              language
            </span>
          </button>
        </div>
      </header>
  )
}

export default Header
