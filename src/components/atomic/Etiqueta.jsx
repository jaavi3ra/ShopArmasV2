import React from 'react';
import '../../styles/atomic/etiqueta.css';

export function EyebrowText({ children }) {
  return (
    <span className="eyebrow">
      {children}
    </span>
  );
}