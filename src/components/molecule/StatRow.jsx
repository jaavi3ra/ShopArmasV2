export function StatRow({ label, value }) {
  return (
    <div className="stat-row">
      <span className="stat-label">
        {label}
      </span>

      <div className="stat-bar">
        <div
          className="stat-fill"
          style={{ width: `${value}%` }}
        />
      </div>

      <span className="stat-value">
        {value}
      </span>
    </div>
  );
}