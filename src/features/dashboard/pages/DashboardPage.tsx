import { MdCampaign, MdOutlineFileDownload } from "react-icons/md";
import TotalStudentsIcon from '../../../assets/dashboard-icons/students-icon.svg'
import EmployeeRate from '../../../assets/dashboard-icons/employee-rate.svg'
import BrainDrainIndex from '../../../assets/dashboard-icons/brain-drain-index.svg'
import ActiveInstitutions from '../../../assets/dashboard-icons/active-institutions.svg'
import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";

export default function DashboardPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-[#00288E] text-[32px] leading-10 font-semibold tracking-[-0.32px]">Ministry Overview</h1>
            <p className="leading-4 text-[#444653]">Real-time data synchronization across all national institutions.</p>
          </div>
          <div className="flex gap-2">
            <button className="gap-2 flex items-center bg-white text-[#141B2B] border border-[#C4C5D5] px-4 py-3 rounded leading-6">
              <MdOutlineFileDownload size={16}/>
              Export PDF
            </button>
            <button className="gap-2 flex items-center bg-[#006C49]  text-[#ffffff] border border-[#C4C5D5] px-4 py-3 rounded leading-6">
              <MdCampaign size={16}/>
              National Announcement
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 my-6">
          <div className="border border-[#C4C5D5] rounded-lg p-6 bg-white">
              <div className="flex justify-between items-start mb-1">
                <div className="px-2 pt-2 pb-3.5 bg-[#00288E10] rounded-sm">
                    <img src={TotalStudentsIcon} alt="" />
                </div>
                <div className="flex text-[#006C49] items-center  text-xs font-bold">
                  <IoIosTrendingUp />
                  +2.4%
                </div>
              </div>
              <div className="text-[#444653] pt-3 mb-1">
                <h2>
                  Total Students
                </h2>
              </div>
              <div>
                <p className="text-[32px] font-bold tracking-[-0.32px]">
                  412,850
                </p>
              </div>
          </div>
          <div className="border border-[#C4C5D5] rounded-lg p-6 bg-white">
              <div className="flex justify-between items-start mb-1">
                <div className="px-2 pt-2 pb-3.5 bg-[#006C4910] rounded-sm">
                    <img src={EmployeeRate} alt="" />
                </div>
                <div className="flex text-[#006C49] items-center  text-xs font-bold">
                  <IoIosTrendingUp />
                  +5.1%
                </div>
              </div>
              <div className="text-[#444653] pt-3 mb-1">
                <h2>
                  Employability Rate
                </h2>
              </div>
              <div>
                <p className="text-[32px] font-bold tracking-[-0.32px]">
                  78.4%
                </p>
              </div>
          </div>
          <div className="border border-[#C4C5D5] rounded-lg p-6 bg-white">
              <div className="flex justify-between items-start mb-1">
                <div className="px-2 pt-2 pb-3.5 bg-[#170CAE10] rounded-sm">
                    <img src={ActiveInstitutions} alt="" />
                </div>
                <div className="flex text-[#444653] items-center  text-xs font-bold">
                  Steady
                </div>
              </div>
              <div className="text-[#444653] pt-3 mb-1">
                <h2>
                  Active Institutions
                </h2>
              </div>
              <div>
                <p className="text-[32px] font-bold tracking-[-0.32px]">
                  54
                </p>
              </div>
          </div>
          <div className="border border-[#C4C5D5] rounded-lg p-6 bg-white">
              <div className="flex justify-between items-start mb-1">
                <div className="px-2 pt-2 pb-3.5 bg-[#BA1A1A10] rounded-sm">
                    <img src={BrainDrainIndex} alt="" />
                </div>
                <div className="flex text-[#BA1A1A] items-center text-xs font-bold">
                  <IoIosTrendingDown />
                  -0.8%
                </div>
              </div>
              <div className="text-[#444653] pt-3 mb-1">
                <h2>
                  Brain Drain Index
                </h2>
              </div>
              <div>
                <p className="text-[32px] font-bold tracking-[-0.32px]">
                  12.2
                </p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}