import React from 'react'

const LatestAnnouncements = () => {
  return (
    <div className="col-span-12 lg:col-span-7 bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm">
            <div className="flex justify-between items-center mb-lg">
              <h3 className="font-title-md text-title-md text-on-surface">
                Latest Announcements
              </h3>
              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-[11px] font-bold">
                2 NEW
              </span>
            </div>
            <div className="space-y-md">
              <div className="flex gap-md p-md hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer border border-transparent hover:border-outline-variant/30">
                <div className="w-12 h-12 bg-primary-container/10 flex items-center justify-center rounded-lg text-primary shrink-0">
                  <span className="material-symbols-outlined">campaign</span>
                </div>
                <div>
                  <div className="flex items-center gap-sm mb-1">
                    <span className="bg-error-container text-on-error-container text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-tight">
                      Urgent
                    </span>
                    <span className="text-[12px] text-on-surface-variant">
                      2 hours ago
                    </span>
                  </div>
                  <h4 className="font-body-md text-body-md font-bold text-on-surface">
                    Mid-term Registration Deadline
                  </h4>
                  <p className="text-[14px] text-on-surface-variant">
                    All students must finalize their mid-term exam course
                    registrations by Friday midnight.
                  </p>
                </div>
              </div>
              <div className="flex gap-md p-md hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer border border-transparent hover:border-outline-variant/30">
                <div className="w-12 h-12 bg-secondary-container/20 flex items-center justify-center rounded-lg text-secondary shrink-0">
                  <span className="material-symbols-outlined">
                    notifications_active
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-sm mb-1">
                    <span className="bg-surface-container text-on-surface-variant text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-tight">
                      General
                    </span>
                    <span className="text-[12px] text-on-surface-variant">
                      Yesterday
                    </span>
                  </div>
                  <h4 className="font-body-md text-body-md font-bold text-on-surface">
                    New Digital Library Access
                  </h4>
                  <p className="text-[14px] text-on-surface-variant">
                    CampusConnect now provides free access to IEEE and JSTOR journals
                    for all registered students.
                  </p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default LatestAnnouncements
