import { MdCampaign, MdOutlineFileDownload } from "react-icons/md";
import TotalStudentsIcon from '../../../assets/dashboard-icons/students-icon.svg'
import EmployeeRate from '../../../assets/dashboard-icons/employee-rate.svg'
import BrainDrainIndex from '../../../assets/dashboard-icons/brain-drain-index.svg'
import ActiveInstitutions from '../../../assets/dashboard-icons/active-institutions.svg'
import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";

export default function DashboardPage() {
  return (
    <>
      <div className="p-lg max-w-7xl mx-auto space-y-lg">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Ministry Overview
            </h2>
            <p className="text-on-surface-variant font-body-md">
              Real-time data synchronization across all national institutions.
            </p>
          </div>
          <div className="flex gap-sm">
            <button className="flex items-center gap-sm px-4 py-2 rounded-lg border border-outline-variant bg-white text-on-surface hover:bg-surface-container-low transition-all">
              <span className="material-symbols-outlined">download</span>
              <span className="font-label-md">Export PDF</span>
            </button>
            <button className="flex items-center gap-sm px-4 py-2 rounded-lg bg-secondary text-white hover:bg-on-secondary-container transition-all">
              <span className="material-symbols-outlined">campaign</span>
              <span className="font-label-md">National Announcement</span>
            </button>
          </div>
        </div>
        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
          <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <span className="material-symbols-outlined">school</span>
              </div>
              <span className="flex items-center text-secondary text-label-md font-bold">
                <span className="material-symbols-outlined text-[16px]">
                  trending_up
                </span>
                +2.4%
              </span>
            </div>
            <p className="text-on-surface-variant font-label-md mb-1">
              Total Students
            </p>
            <h3 className="text-headline-lg font-bold text-on-surface">412,850</h3>
          </div>
          <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                <span className="material-symbols-outlined">work</span>
              </div>
              <span className="flex items-center text-secondary text-label-md font-bold">
                <span className="material-symbols-outlined text-[16px]">
                  trending_up
                </span>
                +5.1%
              </span>
            </div>
            <p className="text-on-surface-variant font-label-md mb-1">
              Employability Rate
            </p>
            <h3 className="text-headline-lg font-bold text-on-surface">78.4%</h3>
          </div>
          <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-tertiary/10 rounded-lg text-tertiary">
                <span className="material-symbols-outlined">account_balance</span>
              </div>
              <span className="flex items-center text-on-surface-variant text-label-md font-medium">
                Steady
              </span>
            </div>
            <p className="text-on-surface-variant font-label-md mb-1">
              Active Institutions
            </p>
            <h3 className="text-headline-lg font-bold text-on-surface">54</h3>
          </div>
          <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-error/10 rounded-lg text-error">
                <span className="material-symbols-outlined">public</span>
              </div>
              <span className="flex items-center text-error text-label-md font-bold">
                <span className="material-symbols-outlined text-[16px]">
                  trending_down
                </span>
                -0.8%
              </span>
            </div>
            <p className="text-on-surface-variant font-label-md mb-1">
              Brain Drain Index
            </p>
            <h3 className="text-headline-lg font-bold text-on-surface">12.2</h3>
          </div>
        </div>
        {/* Bento Grid Charts */}
        <div className="bento-grid">
          {/* Employment Bar Chart */}
          <div className="col-span-12 lg:col-span-8 bg-white p-lg rounded-xl border border-outline-variant shadow-sm">
            <div className="flex items-center justify-between mb-lg">
              <div>
                <h4 className="font-title-md text-on-surface">
                  Employment Rates by Faculty
                </h4>
                <p className="text-on-surface-variant text-label-md">
                  Comparison of top 5 academic disciplines nationwide.
                </p>
              </div>
              <select className="bg-surface-container border-none rounded-lg text-label-md py-1.5 px-3 focus:ring-primary">
                <option>Annual View</option>
                <option>Q1 - Q2</option>
              </select>
            </div>
            <div className="chart-container flex items-end justify-between gap-4 pt-4 px-4 h-64">
              <div className="flex-1 flex flex-col items-center gap-2 group">
                <div
                  className="w-full bg-primary/20 rounded-t-lg relative transition-all group-hover:bg-primary"
                  style={{ height: "92%" }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    92%
                  </div>
                </div>
                <span className="text-[10px] text-on-surface-variant text-center leading-tight">
                  IT &amp; Engineering
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2 group">
                <div
                  className="w-full bg-primary/20 rounded-t-lg relative transition-all group-hover:bg-primary"
                  style={{ height: "78%" }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    78%
                  </div>
                </div>
                <span className="text-[10px] text-on-surface-variant text-center leading-tight">
                  Medicine
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2 group">
                <div
                  className="w-full bg-primary/20 rounded-t-lg relative transition-all group-hover:bg-primary"
                  style={{ height: "65%" }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    65%
                  </div>
                </div>
                <span className="text-[10px] text-on-surface-variant text-center leading-tight">
                  Business Admin
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2 group">
                <div
                  className="w-full bg-primary/20 rounded-t-lg relative transition-all group-hover:bg-primary"
                  style={{ height: "52%" }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    52%
                  </div>
                </div>
                <span className="text-[10px] text-on-surface-variant text-center leading-tight">
                  Architecture
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2 group">
                <div
                  className="w-full bg-primary/20 rounded-t-lg relative transition-all group-hover:bg-primary"
                  style={{ height: "48%" }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    48%
                  </div>
                </div>
                <span className="text-[10px] text-on-surface-variant text-center leading-tight">
                  Social Sciences
                </span>
              </div>
            </div>
          </div>
          {/* Brain Drain World Map Visualization */}
          <div className="col-span-12 lg:col-span-4 bg-primary-container text-on-primary-container p-lg rounded-xl shadow-sm overflow-hidden relative">
            <div className="relative z-10 h-full flex flex-col">
              <h4 className="font-title-md text-white">Global Talent Flow</h4>
              <p className="text-white/70 text-label-md mb-lg">
                Tracking student migration and post-grad destinations.
              </p>
              <div className="flex-1 flex items-center justify-center">
                {/* Image of a map */}
                <div
                  className="w-full h-full min-h-[200px]"
                  data-alt="A futuristic stylized world map dashboard showing glowing blue data points and flowing line segments representing student migration routes across continents. The map is minimalist with a dark navy background and bright cyan and magenta highlights, creating a high-tech data visualization aesthetic."
                  data-location="Baku"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBiiPkHnJe6UnTmu1Lp-3_eL-N2_B3adQ_JdwmK5tEn4zHazkvQE5H2eHpIOkUA1WifS7l3YD70l4S4vp7926z0joXy-BkdvkE3V6vfolXV1mNbAGyQ8XyI6Nr7L57pjru2XpfURcgSEEs_TUKSfeK8VtS7Dh2ooUj-6iTPTlAM1gybHThX4rRwMhyLl8cUqqqNle4zRNUHIss5yaH0XUh5I6eKo000_dfOFhtnZNeGUHTPFzX0m9Dy")'
                  }}
                />
              </div>
              <div className="grid grid-cols-2 gap-md mt-lg">
                <div className="bg-white/10 p-md rounded-lg backdrop-blur-md">
                  <p className="text-[10px] uppercase text-white/60">
                    Top Destination
                  </p>
                  <p className="text-body-lg font-bold text-white">Germany</p>
                </div>
                <div className="bg-white/10 p-md rounded-lg backdrop-blur-md">
                  <p className="text-[10px] uppercase text-white/60">Return Rate</p>
                  <p className="text-body-lg font-bold text-white">15.4%</p>
                </div>
              </div>
            </div>
          </div>
          {/* University Status Table */}
          <div className="col-span-12 bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden">
            <div className="p-lg flex items-center justify-between border-b border-outline-variant bg-surface-container-low">
              <h4 className="font-title-md text-on-surface">
                Institutional Compliance &amp; Enrollment
              </h4>
              <div className="flex gap-md">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                    filter_list
                  </span>
                  <input
                    className="pl-8 py-1 rounded-lg border-outline-variant bg-white text-label-md focus:ring-primary"
                    placeholder="Filter institutions..."
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low/50">
                    <th className="px-lg py-4 font-label-md text-on-surface-variant border-b border-outline-variant">
                      INSTITUTION
                    </th>
                    <th className="px-lg py-4 font-label-md text-on-surface-variant border-b border-outline-variant text-center">
                      STUDENT COUNT
                    </th>
                    <th className="px-lg py-4 font-label-md text-on-surface-variant border-b border-outline-variant">
                      SYSTEM STATUS
                    </th>
                    <th className="px-lg py-4 font-label-md text-on-surface-variant border-b border-outline-variant">
                      RANK (NAT)
                    </th>
                    <th className="px-lg py-4 font-label-md text-on-surface-variant border-b border-outline-variant">
                      LAST UPDATED
                    </th>
                    <th className="px-lg py-4 font-label-md text-on-surface-variant border-b border-outline-variant" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  <tr className="hover:bg-surface-container transition-colors">
                    <td className="px-lg py-4">
                      <div className="flex items-center gap-md">
                        <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold">
                          BA
                        </div>
                        <span className="font-body-md font-semibold text-on-surface">
                          Baku State University
                        </span>
                      </div>
                    </td>
                    <td className="px-lg py-4 text-center font-body-md">24,500</td>
                    <td className="px-lg py-4">
                      <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-bold uppercase">
                        Active
                      </span>
                    </td>
                    <td className="px-lg py-4 text-center font-code-sm text-primary">
                      #01
                    </td>
                    <td className="px-lg py-4 text-on-surface-variant text-[12px]">
                      2 hours ago
                    </td>
                    <td className="px-lg py-4 text-right">
                      <button className="text-on-surface-variant hover:text-primary">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container transition-colors">
                    <td className="px-lg py-4">
                      <div className="flex items-center gap-md">
                        <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold">
                          AZ
                        </div>
                        <span className="font-body-md font-semibold text-on-surface">
                          Azerbaijan Technical University
                        </span>
                      </div>
                    </td>
                    <td className="px-lg py-4 text-center font-body-md">18,200</td>
                    <td className="px-lg py-4">
                      <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-bold uppercase">
                        Active
                      </span>
                    </td>
                    <td className="px-lg py-4 text-center font-code-sm text-primary">
                      #03
                    </td>
                    <td className="px-lg py-4 text-on-surface-variant text-[12px]">
                      5 hours ago
                    </td>
                    <td className="px-lg py-4 text-right">
                      <button className="text-on-surface-variant hover:text-primary">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container transition-colors">
                    <td className="px-lg py-4">
                      <div className="flex items-center gap-md">
                        <div className="w-8 h-8 rounded bg-tertiary/10 flex items-center justify-center text-tertiary font-bold">
                          NA
                        </div>
                        <span className="font-body-md font-semibold text-on-surface">
                          Nakhchivan State University
                        </span>
                      </div>
                    </td>
                    <td className="px-lg py-4 text-center font-body-md">12,100</td>
                    <td className="px-lg py-4">
                      <span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant text-[11px] font-bold uppercase">
                        Pending Review
                      </span>
                    </td>
                    <td className="px-lg py-4 text-center font-code-sm text-primary">
                      #08
                    </td>
                    <td className="px-lg py-4 text-on-surface-variant text-[12px]">
                      Yesterday
                    </td>
                    <td className="px-lg py-4 text-right">
                      <button className="text-on-surface-variant hover:text-primary">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container transition-colors">
                    <td className="px-lg py-4">
                      <div className="flex items-center gap-md">
                        <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold">
                          ADA
                        </div>
                        <span className="font-body-md font-semibold text-on-surface">
                          ADA University
                        </span>
                      </div>
                    </td>
                    <td className="px-lg py-4 text-center font-body-md">6,400</td>
                    <td className="px-lg py-4">
                      <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-bold uppercase">
                        Active
                      </span>
                    </td>
                    <td className="px-lg py-4 text-center font-code-sm text-primary">
                      #02
                    </td>
                    <td className="px-lg py-4 text-on-surface-variant text-[12px]">
                      1 hour ago
                    </td>
                    <td className="px-lg py-4 text-right">
                      <button className="text-on-surface-variant hover:text-primary">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Approval Flow Card */}
          <div className="col-span-12 lg:col-span-6 bg-white p-lg rounded-xl border border-outline-variant shadow-sm">
            <div className="flex items-center gap-md mb-lg">
              <span className="material-symbols-outlined text-tertiary">
                task_alt
              </span>
              <h4 className="font-title-md text-on-surface">Approval Queue</h4>
            </div>
            <div className="space-y-md">
              <div className="p-md rounded-lg border border-outline-variant hover:border-primary transition-all flex items-center justify-between">
                <div className="flex items-center gap-md">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
                      campaign
                    </span>
                  </div>
                  <div>
                    <p className="font-body-md font-semibold">
                      Scholarship Program 2024
                    </p>
                    <p className="text-[12px] text-on-surface-variant">
                      National Announcement Proposal
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center text-error hover:bg-error/10 transition-all">
                    <span className="material-symbols-outlined text-[18px]">
                      close
                    </span>
                  </button>
                  <button className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-on-secondary-container transition-all shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">
                      check
                    </span>
                  </button>
                </div>
              </div>
              <div className="p-md rounded-lg border border-outline-variant hover:border-primary transition-all flex items-center justify-between">
                <div className="flex items-center gap-md">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
                      description
                    </span>
                  </div>
                  <div>
                    <p className="font-body-md font-semibold">
                      Accreditation Renewal
                    </p>
                    <p className="text-[12px] text-on-surface-variant">
                      Baku Engineering University
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center text-error hover:bg-error/10 transition-all">
                    <span className="material-symbols-outlined text-[18px]">
                      close
                    </span>
                  </button>
                  <button className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-on-secondary-container transition-all shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">
                      check
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Recent Activity */}
          <div className="col-span-12 lg:col-span-6 bg-white p-lg rounded-xl border border-outline-variant shadow-sm">
            <h4 className="font-title-md text-on-surface mb-lg">System Logs</h4>
            <div className="space-y-4 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-outline-variant">
              <div className="relative pl-8">
                <div className="absolute left-1 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white" />
                <p className="text-body-md font-medium text-on-surface">
                  New University Registered
                </p>
                <p className="text-[12px] text-on-surface-variant">
                  Technopark Innovation Center joined the network.
                </p>
                <span className="text-[10px] text-on-surface-variant font-medium">
                  15 MINUTES AGO
                </span>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-1 top-1.5 w-4 h-4 rounded-full bg-secondary border-4 border-white" />
                <p className="text-body-md font-medium text-on-surface">
                  Data Sync Completed
                </p>
                <p className="text-[12px] text-on-surface-variant">
                  All 54 institutions updated their student counts successfully.
                </p>
                <span className="text-[10px] text-on-surface-variant font-medium">
                  1 HOUR AGO
                </span>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-1 top-1.5 w-4 h-4 rounded-full bg-outline border-4 border-white" />
                <p className="text-body-md font-medium text-on-surface">
                  Security Audit
                </p>
                <p className="text-[12px] text-on-surface-variant">
                  System-wide routine security scan performed by Admin #04.
                </p>
                <span className="text-[10px] text-on-surface-variant font-medium">
                  4 HOURS AGO
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}