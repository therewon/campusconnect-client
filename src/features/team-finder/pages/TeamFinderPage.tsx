import { Link } from "react-router-dom";
import {
  Loader2,
  Plus,
  Users
} from "lucide-react";

import { TeamFinderCard } from "../components/TeamFinderCard";
import { useTeamFinder } from "../hooks/useTeamFinder";

export default function TeamFinderPage() {

  // const {
  //   data,
  //   isLoading,
  //   error,
  // } = useTeamFinder();

  // if (isLoading) {
  //   return (
  //     <div className="flex flex-col items-center justify-center min-h-[400px] gap-3">

  //       <Loader2
  //         className="animate-spin text-blue-600"
  //         size={34}
  //       />

  //       <p className="text-slate-500 font-medium">
  //         Team postları yüklənir...
  //       </p>

  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div
  //       className="
  //       max-w-md
  //       mx-auto
  //       my-12
  //       rounded-2xl
  //       border
  //       border-red-100
  //       bg-red-50
  //       p-8
  //       text-center
  //       "
  //     >
  //       <h2 className="font-bold text-red-600 mb-2">
  //         Xəta baş verdi
  //       </h2>

  //       <p className="text-red-500 text-sm">
  //         Team postlarını yükləmək mümkün olmadı.
  //       </p>
  //     </div>
  //   );
  // }

  return (
    <main className="min-h-screen">
      <div className="max-w-container-max mx-auto p-lg">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-xl">
          <div>
            <nav className="flex text-xs text-outline mb-2">
              <span>Ecosystem</span>
              <span className="mx-2">/</span>
              <span className="text-primary font-semibold">Team Finder</span>
            </nav>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Komanda Yoldaşı Tap
            </h2>
            <p className="text-on-surface-variant max-w-2xl mt-sm">
              Find the perfect collaborators for your university projects, research
              initiatives, or startup ideas within the National Digital Ecosystem.
            </p>
          </div>
          <Link to="/team-finder/create">
            <button className="bg-primary hover:bg-primary-container text-white px-lg py-3 rounded-xl flex items-center gap-sm transition-all shadow-lg active:scale-95 group">
              <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">
                add_circle
              </span>
              <span className="font-bold">Create Project Post</span>
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
          {/* Filters Sidebar (Bento-style inside grid) */}
          <div className="lg:col-span-3 space-y-md">
            <div className="bg-surface-container-lowest border border-outline-variant p-md rounded-2xl shadow-sm">
              <h3 className="font-bold text-primary mb-md flex items-center gap-2">
                <span className="material-symbols-outlined text-md">
                  filter_list
                </span>
                Filter Preferences
              </h3>
              <div className="space-y-lg">
                <div>
                  <label className="text-xs font-bold text-outline uppercase tracking-wider block mb-2">
                    Required Skills
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-primary-container text-on-primary-container rounded-lg text-xs font-semibold cursor-pointer">
                      React
                    </span>
                    <span className="px-3 py-1.5 bg-surface-container text-on-surface-variant rounded-lg text-xs font-semibold hover:bg-surface-variant transition-colors cursor-pointer">
                      Python
                    </span>
                    <span className="px-3 py-1.5 bg-surface-container text-on-surface-variant rounded-lg text-xs font-semibold hover:bg-surface-variant transition-colors cursor-pointer">
                      UI Design
                    </span>
                    <span className="px-3 py-1.5 bg-surface-container text-on-surface-variant rounded-lg text-xs font-semibold hover:bg-surface-variant transition-colors cursor-pointer">
                      PostgreSQL
                    </span>
                    <span className="px-3 py-1.5 bg-surface-container text-on-surface-variant rounded-lg text-xs font-semibold hover:bg-surface-variant transition-colors cursor-pointer">
                      Marketing
                    </span>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-outline uppercase tracking-wider block mb-2">
                    University Hub
                  </label>
                  <select className="w-full bg-surface-container-low border-outline-variant rounded-xl text-sm focus:border-primary focus:ring-0">
                    <option>All Universities</option>
                    <option>ADA University</option>
                    <option>Baku State University</option>
                    <option>UNEC (Economics)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-outline uppercase tracking-wider block mb-2">
                    Project Duration
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-sm cursor-pointer group">
                      <input
                        defaultChecked
                        className="rounded text-primary focus:ring-0 border-outline-variant"
                        type="checkbox"
                      />
                      <span className="text-sm group-hover:text-primary transition-colors">
                        Short-term (&lt; 1 month)
                      </span>
                    </label>
                    <label className="flex items-center gap-sm cursor-pointer group">
                      <input
                        className="rounded text-primary focus:ring-0 border-outline-variant"
                        type="checkbox"
                      />
                      <span className="text-sm group-hover:text-primary transition-colors">
                        Medium-term (1-3 months)
                      </span>
                    </label>
                    <label className="flex items-center gap-sm cursor-pointer group">
                      <input
                        className="rounded text-primary focus:ring-0 border-outline-variant"
                        type="checkbox"
                      />
                      <span className="text-sm group-hover:text-primary transition-colors">
                        Academic Year
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* Stats Card */}
            <div className="bg-secondary text-white p-lg rounded-2xl relative overflow-hidden shadow-md">
              <div className="relative z-10">
                <h4 className="text-sm font-medium opacity-80">
                  Ecosystem Activity
                </h4>
                <p className="text-2xl font-bold mt-1">124 Active Projects</p>
                <p className="text-xs mt-2 text-secondary-container flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">
                    trending_up
                  </span>
                  +12 this week
                </p>
              </div>
              <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-white/10 text-[120px]">
                hub
              </span>
            </div>
          </div>
          {/* Main Feed */}
          <div className="lg:col-span-9 space-y-md">
            {/* Search & Sort Row */}
            <div className="flex items-center justify-between bg-surface-container-lowest p-sm border border-outline-variant rounded-xl shadow-sm">
              <div className="flex gap-sm">
                <button className="px-4 py-2 bg-surface-container-high text-primary font-bold rounded-lg text-xs">
                  Recommended
                </button>
                <button className="px-4 py-2 text-on-surface-variant font-medium rounded-lg text-xs hover:bg-surface-container transition-colors">
                  Newest
                </button>
                <button className="px-4 py-2 text-on-surface-variant font-medium rounded-lg text-xs hover:bg-surface-container transition-colors">
                  Popular
                </button>
              </div>
              <span className="text-xs text-outline pr-md">
                Showing 38 collaborations
              </span>
            </div>
            {/* Project Card 1 */}
            <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-2xl hover:shadow-lg transition-all group relative">
              <div className="flex flex-col md:flex-row gap-lg">
                <div className="w-16 h-16 rounded-2xl bg-tertiary-fixed flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-tertiary-fixed-variant text-3xl">
                    smart_toy
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                          Research Project
                        </span>
                        <span className="w-1 h-1 rounded-full bg-outline-variant" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-outline">
                          ADA University
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors">
                        AI-Powered Campus Navigation
                      </h3>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">
                          group
                        </span>
                        12 Applicants
                      </span>
                      <p className="text-[10px] text-outline mt-1">
                        Ends in 4 days
                      </p>
                    </div>
                  </div>
                  <p className="text-on-surface-variant mb-md leading-relaxed">
                    We're developing an indoor AR navigation system for the new
                    campus extension. Looking for mobile developers and UI
                    specialists with a passion for accessible design.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-lg">
                    <span className="px-2 py-1 bg-surface-container-low border border-outline-variant/30 rounded text-[11px] font-medium text-outline">
                      SwiftUI
                    </span>
                    <span className="px-2 py-1 bg-surface-container-low border border-outline-variant/30 rounded text-[11px] font-medium text-outline">
                      ARKit
                    </span>
                    <span className="px-2 py-1 bg-surface-container-low border border-outline-variant/30 rounded text-[11px] font-medium text-outline">
                      Figma
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-md border-t border-outline-variant/50">
                    <div className="flex items-center gap-2">
                      <img
                        className="w-6 h-6 rounded-full grayscale hover:grayscale-0 transition-all"
                        data-alt="Close up high-resolution profile photo of an intelligent looking female academic researcher, wearing glasses and a professional blazer. Neutral lighting, academic environment background blurred. High quality corporate style."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdIyTo9liTQnAPhgAChFxSr7JKHiiIWajCMl-_iEFs47-2lnl7lHiq9KXn9cDUWfQ6sI8xfjJxHHm1VMPodFrozQQpMhAK_y-1Ui67O_KBQkQpAbPr-0IB_OSx8cpZ9daz4BKkBDLzL4iTDcwGmjLl2LM-1rSZc0GMRugvq_hkHgz8pBtaVWCcYEPLzOPvs_RcVSoUYsPuXq_mBm7E44MV_Pw0Tdw_6KSfjrc3d8yUKjRLgvrIHLT0"
                      />
                      <span className="text-xs font-medium">
                        Posted by Leyla Mammadova
                      </span>
                    </div>
                    <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm active:scale-95 transition-transform hover:shadow-md">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Project Card 2 */}
            <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-2xl hover:shadow-lg transition-all group relative">
              <div className="flex flex-col md:flex-row gap-lg">
                <div className="w-16 h-16 rounded-2xl bg-secondary-fixed flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-secondary-fixed-variant text-3xl">
                    eco
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
                          Community Project
                        </span>
                        <span className="w-1 h-1 rounded-full bg-outline-variant" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-outline">
                          Baku State University
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md text-on-surface group-hover:text-secondary transition-colors">
                        Green Campus Initiative Tracker
                      </h3>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">
                          group
                        </span>
                        3 Applicants
                      </span>
                      <p className="text-[10px] text-outline mt-1">
                        Ends in 12 days
                      </p>
                    </div>
                  </div>
                  <p className="text-on-surface-variant mb-md leading-relaxed">
                    Building a platform to track carbon footprint reduction across
                    university departments. Data visualization experts and Python
                    backend developers needed.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-lg">
                    <span className="px-2 py-1 bg-surface-container-low border border-outline-variant/30 rounded text-[11px] font-medium text-outline">
                      Python (Django)
                    </span>
                    <span className="px-2 py-1 bg-surface-container-low border border-outline-variant/30 rounded text-[11px] font-medium text-outline">
                      D3.js
                    </span>
                    <span className="px-2 py-1 bg-surface-container-low border border-outline-variant/30 rounded text-[11px] font-medium text-outline">
                      PostgreSQL
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-md border-t border-outline-variant/50">
                    <div className="flex items-center gap-2">
                      <img
                        className="w-6 h-6 rounded-full grayscale hover:grayscale-0 transition-all"
                        data-alt="A medium shot of an enthusiastic male engineering student in a workshop setting, wearing a modern polo shirt. Professional lighting, shallow depth of field with engineering equipment blurred in the background. Modern, corporate aesthetic."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs7OcYjiqPaOBvXEmfZ-jycazBZLXmwc0hDQAnwFxzojKzVApqk_FMc_uBn7cTWUDq3Qc2JiF7rM0oncqKrqxumr0H0ess3shJ8XGdyGgP05RachvTVV3cfGKVT5RgyxaTQZviXYQLH3jZNycIUDpKczgLqZmZNIULAuFXiZ7ob2HQtgtgxgpvya8LQJX0-1OpRSVV7OiAzwHl4JBj9kVgbGDyBL_rwRTds8oKAmZvUvypQHz4i_m_"
                      />
                      <span className="text-xs font-medium">
                        Posted by Emin Hajiyev
                      </span>
                    </div>
                    <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm active:scale-95 transition-transform hover:shadow-md">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Project Card 3 (Bento Variant / Featured) */}
            <div className="bg-inverse-surface text-white p-xl rounded-2xl relative overflow-hidden group">
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
                <div>
                  <div className="bg-primary/20 w-fit px-3 py-1 rounded-full text-[10px] font-bold text-primary-fixed border border-primary/30 mb-md uppercase tracking-widest">
                    Featured High-Impact Project
                  </div>
                  <h3 className="font-headline-lg text-headline-lg leading-tight mb-md">
                    National Academic Blockchain Registry
                  </h3>
                  <p className="text-white/70 mb-lg font-body-md leading-relaxed">
                    Join a Ministry-level initiative to secure academic credentials
                    across Azerbaijan and Turkey using decentralized ledgers.
                  </p>
                  <div className="flex gap-sm">
                    <button className="bg-white text-inverse-surface px-8 py-3 rounded-xl font-bold text-sm hover:bg-primary-fixed transition-colors active:scale-95">
                      View Special Requisition
                    </button>
                    <button className="px-4 py-3 rounded-xl font-bold text-sm border border-white/20 hover:bg-white/10 transition-colors">
                      <span className="material-symbols-outlined">bookmark</span>
                    </button>
                  </div>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
                    <span
                      className="material-symbols-outlined text-[160px] text-primary relative z-10 opacity-80"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      assured_workload
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 p-lg opacity-20 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-[120px]">
                  token
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  );
}