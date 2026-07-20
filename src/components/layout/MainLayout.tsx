import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function MainLayout() {
  return (
    <div className="main-layout">

      <Sidebar />

      <div className="main-content">

        <Header />

        <main>
          <Outlet />
        </main>

      </div>

    </div>
  );
}