import { MdCampaign, MdOutlineFileDownload } from "react-icons/md";
import TotalStudentsIcon from '../../../assets/dashboard-icons/students-icon.svg'
import EmployeeRate from '../../../assets/dashboard-icons/employee-rate.svg'
import BrainDrainIndex from '../../../assets/dashboard-icons/brain-drain-index.svg'
import ActiveInstitutions from '../../../assets/dashboard-icons/active-institutions.svg'
import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";
import DashboardWelcome from "../components/DashboardWelcome";
import DashboardStats from "../components/DashboardStats";
import UpcomingEvents from "../components/UpcomingEvents";
import LatestAnnouncements from "../components/LatestAnnouncements";
import CareerAdvisor from "../components/CareerAdvisor";

export default function DashboardPage() {
  return (
    <>
      <main className="p-lg pb-32">
        {/* Welcome Section */}
        <DashboardWelcome />
        {/* Optimized Bento Grid */}
        <div className="bento-grid">
          {/* Academic Summary Column */}
          <DashboardStats />
          {/* Upcoming Deadlines & Events */}
          <UpcomingEvents />
          {/* Latest Announcements */}
          <LatestAnnouncements />
          {/* AI Advisor / Vacancies */}
          <CareerAdvisor />
        </div>
      </main>

    </>
  );
}