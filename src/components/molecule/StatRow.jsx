import React from "react";
import '../../styles/molecule/StatRow.css';

export function StatRow({ label, value }) {
  return (
    <div className="stat">
      <span className="stat-label">
        {label}
      </span>

      <div className="stat-bar">
        <div
          className="stat-value"
          style={{ width: `${value}%` }}
        />
      </div>

      <div>
         <b>{value}</b>
      </div>
    </div>
  );
}