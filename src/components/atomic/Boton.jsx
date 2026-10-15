import '../../styles/atomic/Boton.css';
import '../../styles/atomic/filtroLink.css';

export function Boton({
  children,
  text,
  onClick,
  variant,
  className = '',
  type = 'button',
  ...props
}) {
  const variantClass = variant ? `boton-${variant}` : '';
  const combinedClassName = `boton-base ${variantClass} ${className}`.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      {...props}
    >
      {text || children}
    </button>
  );
}

export const Button = Boton;

export function FiltroLink({ text, value, active = false, onClick }) {
  return (
    <button
      type="button"
      className={`filter-link ${active ? "filter-link--active" : ""}`}
      onClick={() => onClick(value)}
    >
      {text}
    </button>
  );
}