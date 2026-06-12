import DashboardLayout from "../layouts/DashboardLayout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function Analytics() {
  const inventoryTrend = [
    { day: "Mon", stock: 250 },
    { day: "Tue", stock: 230 },
    { day: "Wed", stock: 280 },
    { day: "Thu", stock: 240 },
    { day: "Fri", stock: 300 },
  ];

  const stockDistribution = [
    { name: "Healthy", value: 70 },
    { name: "Low Stock", value: 20 },
    { name: "Critical", value: 10 },
  ];

  const COLORS = ["#22c55e", "#facc15", "#ef4444"];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Analytics
        </h1>

        <p className="text-slate-400 mt-2">
          Inventory performance insights
        </p>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-900 p-6 rounded-2xl">
          <h3 className="text-slate-400 mb-2">
            Total Products
          </h3>

          <p className="text-3xl font-bold text-blue-500">
            250
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h3 className="text-slate-400 mb-2">
            Monthly Growth
          </h3>

          <p className="text-3xl font-bold text-green-400">
            +18%
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h3 className="text-slate-400 mb-2">
            Stock Wastage
          </h3>

          <p className="text-3xl font-bold text-red-400">
            4%
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

        {/* Line Chart */}
        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-6">
            Inventory Trend
          </h2>

          <div className="h-72">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <LineChart data={inventoryTrend}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="stock"
                  stroke="#3b82f6"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-6">
            Stock Distribution
          </h2>

          <div className="h-72">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <PieChart>
                <Pie
                  data={stockDistribution}
                  dataKey="value"
                  outerRadius={100}
                  label
                >
                  {stockDistribution.map(
                    (entry, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />
                    )
                  )}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-slate-900 p-6 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4">
          Insights
        </h2>

        <div className="space-y-4">
          <div className="bg-slate-800 p-4 rounded-xl">
            📉 Steel inventory dropped
            18% this week.
          </div>

          <div className="bg-slate-800 p-4 rounded-xl">
            📈 Demand increased in
            electrical materials.
          </div>

          <div className="bg-slate-800 p-4 rounded-xl">
            ⚠️ Copper wire stock depletion
            rising.
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Analytics;