import "../../styles/atomic/Icono.css";

export  function Icono({ children, size = 20, className = "" }) {
  return (
    <span
      className={`icon ${className}`}
      style={{ fontSize: `${size}px` }}
    >
      {children}
    </span>
  );
}