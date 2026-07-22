import React from 'react'

const DashboardStats = () => {
  return (
    <div className="col-span-12 lg:col-span-4 space-y-lg">
            {/* GPA Widget */}
            <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-md">
                <div>
                  <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-bold">
                    Current GPA
                  </p>
                  <div className="flex items-baseline gap-xs">
                    <h3 className="font-headline-lg text-headline-lg text-primary">
                      3.84
                    </h3>
                    <span className="text-xs text-secondary font-bold">
                      +0.12 vs last sem
                    </span>
                  </div>
                </div>
                <div className="p-sm bg-primary-container/10 text-primary rounded-lg">
                  <span className="material-symbols-outlined">auto_graph</span>
                </div>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full" style={{ width: "84%" }} />
              </div>
            </div>
            {/* Attendance Widget */}
            <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-md">
                <div>
                  <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-bold">
                    Attendance Rate
                  </p>
                  <h3 className="font-headline-lg text-headline-lg text-secondary">
                    92%
                  </h3>
                </div>
                <div className="p-sm bg-secondary-container/20 text-secondary rounded-lg">
                  <span className="material-symbols-outlined">task_alt</span>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1">
                <div className="h-3 bg-secondary rounded-sm" title="Mon: Present" />
                <div className="h-3 bg-secondary rounded-sm" title="Tue: Present" />
                <div className="h-3 bg-secondary rounded-sm" title="Wed: Present" />
                <div className="h-3 bg-secondary rounded-sm" title="Thu: Present" />
                <div className="h-3 bg-error/30 rounded-sm" title="Fri: Absent" />
                <div className="h-3 bg-surface-variant rounded-sm" />
                <div className="h-3 bg-surface-variant rounded-sm" />
              </div>
              <p className="mt-2 text-[11px] text-on-surface-variant">
                Last 7 days performance
              </p>
            </div>
            {/* Course Progress Overview */}
            <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm">
              <h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-bold mb-md">
                Course Progress
              </h4>
              <div className="space-y-md">
                <div>
                  <div className="flex justify-between text-[12px] mb-1">
                    <span className="font-medium">Algorithm Design</span>
                    <span className="text-on-surface-variant">78%</span>
                  </div>
                  <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "78%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[12px] mb-1">
                    <span className="font-medium">Database Systems</span>
                    <span className="text-on-surface-variant">45%</span>
                  </div>
                  <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary" style={{ width: "45%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default DashboardStats
