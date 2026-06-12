import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="text-slate-400 mt-2">
          Smart inventory intelligence overview
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Inventory" value="250" />
        <StatCard title="Low Stock" value="15" />
        <StatCard title="Critical Items" value="6" />
        <StatCard title="Alerts" value="12" />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Low Stock */}
        <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">
            Low Stock Items
          </h2>

          <div className="space-y-3">
            <div className="bg-slate-800 p-4 rounded-lg flex justify-between">
              <span>Copper Wire</span>
              <span className="text-red-400">
                12 left
              </span>
            </div>

            <div className="bg-slate-800 p-4 rounded-lg flex justify-between">
              <span>Motor Coil</span>
              <span className="text-yellow-400">
                18 left
              </span>
            </div>

            <div className="bg-slate-800 p-4 rounded-lg flex justify-between">
              <span>Steel Rod</span>
              <span className="text-red-400">
                7 left
              </span>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">
            AI Insights
          </h2>

          <div className="space-y-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              ⚠️ Motor Coil stock may run out in 3 days.
            </div>

            <div className="bg-slate-800 p-4 rounded-lg">
              📈 Demand expected to increase next week.
            </div>

            <div className="bg-slate-800 p-4 rounded-lg">
              💡 Reorder Copper Wire tomorrow.
            </div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
