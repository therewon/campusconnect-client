import React from 'react'

const CareerAdvisor = () => {
  return (
    <div className="col-span-12 lg:col-span-5 bg-inverse-surface text-white p-lg rounded-xl shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-sm mb-md">
                <div className="p-1.5 bg-secondary-fixed text-on-secondary-fixed rounded-lg">
                  <span className="material-symbols-outlined text-[20px]">
                    auto_awesome
                  </span>
                </div>
                <h3 className="font-title-md text-title-md">Career Advisor AI</h3>
              </div>
              <p className="text-on-primary-container text-[13px] mb-lg leading-relaxed">
                Based on your focus in Computer Engineering and high GPA, I recommend
                these vacancies:
              </p>
              <div className="space-y-sm">
                <div className="bg-white/10 p-md rounded-lg border border-white/5 hover:bg-white/20 transition-all cursor-pointer">
                  <div className="flex justify-between items-center mb-1">
                    <h5 className="font-label-md text-label-md font-bold">
                      Junior Data Analyst
                    </h5>
                    <span className="text-[10px] bg-secondary text-white px-2 py-0.5 rounded-full">
                      94% Match
                    </span>
                  </div>
                  <p className="text-[12px] text-white/60">
                    Azercell Telecom • Baku, Azerbaijan
                  </p>
                </div>
                <div className="bg-white/10 p-md rounded-lg border border-white/5 hover:bg-white/20 transition-all cursor-pointer">
                  <div className="flex justify-between items-center mb-1">
                    <h5 className="font-label-md text-label-md font-bold">
                      Backend Intern
                    </h5>
                    <span className="text-[10px] bg-secondary text-white px-2 py-0.5 rounded-full">
                      88% Match
                    </span>
                  </div>
                  <p className="text-[12px] text-white/60">
                    PASHA Bank • Remote / Baku
                  </p>
                </div>
              </div>
              <button className="w-full mt-lg py-sm bg-primary text-white rounded-lg font-label-md text-label-md transition-all active:scale-95 border border-primary-container">
                Open Career Portal
              </button>
            </div>
            {/* Decorative shape */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary opacity-20 blur-3xl rounded-full" />
          </div>
  )
}

export default CareerAdvisor
