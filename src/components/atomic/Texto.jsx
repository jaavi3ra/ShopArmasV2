import React from "react";
export function Texto({ children, variant = 'p', className }) {
  const Tag = variant;
  return <Tag className={className}>{children}</Tag>;
}

