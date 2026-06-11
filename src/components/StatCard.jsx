function StatCard({ title, value }) {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
      <h3 className="text-slate-400 text-sm mb-2">
        {title}
      </h3>

      <p className="text-3xl font-bold text-blue-500">
        {value}
      </p>
    </div>
  );
}

export default StatCard;