import React from 'react'

const DashboardWelcome = () => {
  return (
    <section className="mb-xl fade-in">
          <div className="relative overflow-hidden rounded-xl bg-primary-container p-xl text-white">
            <div className="relative z-10 grid md:grid-cols-2 gap-md items-center">
              <div>
                <h2 className="font-headline-lg text-headline-lg mb-xs">
                  Hoş gəldin, Zaur! 👋
                </h2>
                <p className="font-body-lg text-body-lg text-on-primary-container max-w-xl">
                  You have 3 lectures today and a pending assignment for Advanced
                  Algorithms. Keep up the great work!
                </p>
              </div>
              <div className="flex flex-wrap gap-sm justify-end">
                <div className="bg-white/10 backdrop-blur-md px-md py-sm rounded-lg border border-white/10">
                  <p className="text-[10px] uppercase font-bold text-white/70">
                    Next Class
                  </p>
                  <p className="text-body-md font-bold">Data Structures • 14:00</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-16 -top-16 opacity-10">
              <span
                className="material-symbols-outlined text-[240px]"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                school
              </span>
            </div>
          </div>
        </section>
  )
}

export default DashboardWelcome
