
const Sidebar = () => {
  return (
    <div className="md:col-span-1 space-y-lg">
            {/* Categories */}
            <div className="bg-white border border-outline-variant rounded-xl p-md shadow-sm">
              <h3 className="font-label-md font-bold text-outline mb-md uppercase tracking-tighter">
                Categories
              </h3>
              <div className="space-y-sm">
                <label className="flex items-center justify-between p-sm rounded-lg hover:bg-surface-container transition-colors cursor-pointer group">
                  <div className="flex items-center gap-md">
                    <span className="material-symbols-outlined text-outline group-hover:text-primary">
                      devices
                    </span>
                    <span className="font-body-md">Electronics</span>
                  </div>
                  <span className="bg-surface-container-high px-2 py-0.5 rounded text-[10px] font-bold">
                    12
                  </span>
                </label>
                <label className="flex items-center justify-between p-sm rounded-lg hover:bg-surface-container transition-colors cursor-pointer group">
                  <div className="flex items-center gap-md">
                    <span className="material-symbols-outlined text-outline group-hover:text-primary">
                      description
                    </span>
                    <span className="font-body-md">Documents</span>
                  </div>
                  <span className="bg-surface-container-high px-2 py-0.5 rounded text-[10px] font-bold">
                    45
                  </span>
                </label>
                <label className="flex items-center justify-between p-sm rounded-lg hover:bg-surface-container transition-colors cursor-pointer group">
                  <div className="flex items-center gap-md">
                    <span className="material-symbols-outlined text-outline group-hover:text-primary">
                      vpn_key
                    </span>
                    <span className="font-body-md">Keys &amp; Wallets</span>
                  </div>
                  <span className="bg-surface-container-high px-2 py-0.5 rounded text-[10px] font-bold">
                    08
                  </span>
                </label>
                <label className="flex items-center justify-between p-sm rounded-lg hover:bg-surface-container transition-colors cursor-pointer group">
                  <div className="flex items-center gap-md">
                    <span className="material-symbols-outlined text-outline group-hover:text-primary">
                      checkroom
                    </span>
                    <span className="font-body-md">Clothing</span>
                  </div>
                  <span className="bg-surface-container-high px-2 py-0.5 rounded text-[10px] font-bold">
                    19
                  </span>
                </label>
              </div>
            </div>
            {/* Campus Map Snippet */}
            <div className="bg-inverse-surface rounded-xl p-md text-white overflow-hidden relative group">
              <div className="relative z-10">
                <h3 className="font-title-md font-bold mb-1">Campus Map</h3>
                <p className="text-sm opacity-70 mb-md">
                  Interactive hot-spots for lost items.
                </p>
                <button className="bg-white/10 hover:bg-white/20 border border-white/20 w-full py-2 rounded-lg text-sm font-semibold transition-all backdrop-blur-md">
                  Open Global Map
                </button>
              </div>
              <div
                className="absolute inset-0 opacity-20 pointer-events-none bg-cover bg-center"
                data-alt="A high-tech digital map visualization of a modern university campus layout with glowing network nodes and topographic lines, dark aesthetic with deep blue and white accents."
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTktazKrnh1ayZp4m7Vq0V57wI6nL6Ybc5OjsP9o9AryPdCy8RgVd2M-jV_v1Mzy8Gvo31mZ5Q0P316vQWJE3qt6ElZPnAeLhep00L-hBaY8qxedZYS6miIsGF_h1-XrERjzzTFlow2niYu8KCkd2E2_19fVR5G5vN6KAh_nstSy0ivcL1lZaLvb5XOBflNsJZNGSYOIkfbkFVY7t9hiuhSK53mG9o5hDkflj2lj2_kyH_v63KfU8S")'
                }}
              />
            </div>
          </div>
  )
}

export default Sidebar
