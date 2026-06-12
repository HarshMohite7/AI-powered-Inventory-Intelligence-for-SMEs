import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

function AIInsights() {
  const [loading, setLoading] = useState(false);

  const [insights, setInsights] = useState([]);

  const generateInsights = () => {
    setLoading(true);

    setTimeout(() => {
      setInsights([
        {
          title: "Critical Alert",
          color: "red",
          text:
            "Motor Coil inventory may run out in 3 days based on stock trends.",
        },
        {
          title: "Demand Forecast",
          color: "yellow",
          text:
            "Copper Wire demand expected to increase by 24% next week.",
        },
        {
          title: "Recommendation",
          color: "blue",
          text:
            "Reorder Steel Rod inventory tomorrow to avoid shortage.",
        },
      ]);

      setLoading(false);
    }, 2000);
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          AI Insights
        </h1>

        <p className="text-slate-400 mt-2">
          Smart inventory recommendations
        </p>
      </div>

      {/* Generate Button */}
      <button
        onClick={generateInsights}
        className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-medium transition mb-8"
      >
        {loading
          ? "Generating..."
          : "Generate AI Insights"}
      </button>

      {/* Loading */}
      {loading && (
        <div className="bg-slate-900 p-6 rounded-2xl text-center text-slate-300 animate-pulse">
          AI is analyzing inventory...
        </div>
      )}

      {/* Dynamic Insights */}
      <div className="space-y-5 mt-6">
        {insights.map((insight, index) => (
          <div
            key={index}
            className={`bg-slate-900 p-6 rounded-2xl border ${
              insight.color === "red"
                ? "border-red-500/20"
                : insight.color === "yellow"
                ? "border-yellow-500/20"
                : "border-blue-500/20"
            }`}
          >
            <h2
              className={`font-semibold mb-2 ${
                insight.color === "red"
                  ? "text-red-400"
                  : insight.color === "yellow"
                  ? "text-yellow-400"
                  : "text-blue-400"
              }`}
            >
              {insight.title}
            </h2>

            <p className="text-slate-300">
              {insight.text}
            </p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

export default AIInsights;