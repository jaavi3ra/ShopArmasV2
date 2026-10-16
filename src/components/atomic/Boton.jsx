import '../../styles/atomic/filtroLink.css';
import '../../styles/atomic/Boton.css'

export function Boton({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export function FiltroLink({ text, value, active = false, onClick }) {

  return (
    <button
      type="button"
      className={`filter-link ${active ? "filter-link--active" : ""}`}
      onClick={() => onClick(value)}
    >
      {text}
    </button>);
}

export function TabButton({ children, active = false, onClick }) {
  return (
    <button
      className={`auth-tab ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
