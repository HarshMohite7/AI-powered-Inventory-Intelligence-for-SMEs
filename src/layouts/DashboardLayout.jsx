import Sidebar from "../components/Sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="flex bg-slate-950 min-h-screen">
      <Sidebar />

      <main className="ml-64 p-8 w-full text-white">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;