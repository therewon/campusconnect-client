import React from 'react'

const UpcomingEvents = () => {
  return (
    <div className="col-span-12 lg:col-span-8 space-y-lg">
            <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm">
              <div className="flex justify-between items-center mb-lg">
                <h3 className="font-title-md text-title-md text-on-surface">
                  Upcoming Deadlines
                </h3>
                <button className="text-primary font-label-md text-label-md flex items-center gap-xs hover:underline">
                  Academic Calendar{" "}
                  <span className="material-symbols-outlined text-[14px]">
                    calendar_month
                  </span>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                {/* Deadline Card */}
                <div className="p-md rounded-xl border border-outline-variant hover:border-primary/50 bg-surface-bright transition-all">
                  <div className="flex items-center gap-md">
                    <div className="w-12 h-12 flex flex-col items-center justify-center bg-error-container text-on-error-container rounded-lg">
                      <span className="text-[10px] font-bold uppercase">Oct</span>
                      <span className="text-xl font-bold">25</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-body-md font-bold truncate">
                        Assignment 4: Binary Trees
                      </h4>
                      <p className="text-[12px] text-on-surface-variant">
                        Algorithms • 23:59 PM
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-error">
                      priority_high
                    </span>
                  </div>
                </div>
                {/* Deadline Card */}
                <div className="p-md rounded-xl border border-outline-variant hover:border-primary/50 bg-surface-bright transition-all">
                  <div className="flex items-center gap-md">
                    <div className="w-12 h-12 flex flex-col items-center justify-center bg-surface-container-high text-on-surface-variant rounded-lg">
                      <span className="text-[10px] font-bold uppercase">Oct</span>
                      <span className="text-xl font-bold">28</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-body-md font-bold truncate">
                        Quiz 2: SQL Basics
                      </h4>
                      <p className="text-[12px] text-on-surface-variant">
                        Databases • In-class
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant/40">
                      timer
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-lg pt-lg border-t border-outline-variant">
                <h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-bold mb-md">
                  Campus Events
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div className="group relative overflow-hidden rounded-xl border border-outline-variant transition-all hover:border-primary/50">
                    <div
                      className="h-32 w-full bg-cover bg-center"
                      data-alt="Tech conference"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuByfretm3OJjj8VoABMPR9BTFjad84_uf_7nZuKH1rFF4JEdMfXfB0rKfNEp3QbCaU_ML0FIL6CuTGv0YaRQQzAaoXynJ3or0RmtM-Bzf4WXMnAn-Kxd36cnaH6j1Sx19FOWpIe3JHRSWVk9ZxVaxkbyg0PWX31_TXmLyiVRcozXS5kAFXtkgH8fOZtMwSDwoY3J1bAtcydeZXw6rkKaL9ShzfJOKpSqAXRXqx1KJULJ21BlPOQdEcn")'
                      }}
                    />
                    <div className="p-md">
                      <div className="flex items-center gap-sm text-primary mb-xs">
                        <span className="material-symbols-outlined text-[16px]">
                          calendar_today
                        </span>
                        <span className="font-label-md text-label-md">
                          Oct 24 • 14:00
                        </span>
                      </div>
                      <h4 className="font-body-md text-body-md font-bold mb-xs group-hover:text-primary transition-colors">
                        Digital Innovation Summit
                      </h4>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-xl border border-outline-variant transition-all hover:border-primary/50">
                    <div
                      className="h-32 w-full bg-cover bg-center"
                      data-alt="University library"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBBTsLuSGPI0x57liVO8Wxky6gmChfsFl01UwQEN8fWxDmDVuzZIkwLi1N-3BiYFtLj4U0va9oTCmdu2-ycZHXTfrSU9RqzpZxU5csikCJ-asVnW896bvdExk2L9DzL9Jb5FF8-Xg1dPREXu75HfAB66noL5xHqsbhwsOv5VTSLAxoIP4AV0jIFQm2HgvvQS4oYN5W87SpjkEJQ3BbuWSCcW7Fa2abK7cMWVNAA9s1qFVoIFdt3OdKM")'
                      }}
                    />
                    <div className="p-md">
                      <div className="flex items-center gap-sm text-primary mb-xs">
                        <span className="material-symbols-outlined text-[16px]">
                          calendar_today
                        </span>
                        <span className="font-label-md text-label-md">
                          Oct 28 • 10:00
                        </span>
                      </div>
                      <h4 className="font-body-md text-body-md font-bold mb-xs group-hover:text-primary transition-colors">
                        Alumni Career Fair
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default UpcomingEvents
