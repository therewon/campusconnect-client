import { CiSearch } from "react-icons/ci";
import NotificationBadge from "../../features/notifications/components/NotificationBadge.jsx";
import {
  useRealtimeNotifications,
} from "../../features/notifications/hooks/useNotifications";
import { TbWorld } from "react-icons/tb";
import { HiOutlineUser } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";

export default function Header() {

  // SignalR notification dinləyicisini başladır
  useRealtimeNotifications();

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between w-full h-16 px-6 bg-white border-b border-gray-200 shadow-sm transition-all">
      <div className="flex flex-1 items-center gap-4">
        <button className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors">
          <IoMenu size={24} />
        </button>

        <div className="relative hidden w-full max-w-md md:block">
          <CiSearch
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search statistics, reports, or universities..."
            className="w-full rounded-full bg-gray-100 py-2 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-500 outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-gray-100 hover:text-gray-900">
          {/* <NotificationBadge /> */}
        </button>

        <button className="hidden items-center gap-2 rounded-xl border border-gray-300 px-3 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-100 sm:flex">
          <TbWorld size={18} />
          AZ / TR / EN
        </button>

        <button className="flex items-center gap-2 rounded-xl bg-[#00288E] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#0038c7] active:scale-95">
          <HiOutlineUser size={18} />
          Profile
        </button>
      </div>
    </header>

  );
}