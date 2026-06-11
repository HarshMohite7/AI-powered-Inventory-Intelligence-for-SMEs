import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white p-5 fixed">
      <h1 className="text-2xl font-bold text-blue-500 mb-10">
        Inventory AI
      </h1>

      <nav className="flex flex-col gap-4">
        <Link
          to="/dashboard"
          className="hover:bg-slate-800 p-3 rounded-lg"
        >
          Dashboard
        </Link>

        <Link
          to="/inventory"
          className="hover:bg-slate-800 p-3 rounded-lg"
        >
          Inventory
        </Link>

        <Link
          to="/analytics"
          className="hover:bg-slate-800 p-3 rounded-lg"
        >
          Analytics
        </Link>

        <Link
          to="/ai-insights"
          className="hover:bg-slate-800 p-3 rounded-lg"
        >
          AI Insights
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;