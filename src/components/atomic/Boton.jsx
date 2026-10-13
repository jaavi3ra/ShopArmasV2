import '../../styles/atomic/filtroLink.css';

export function Boton({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export function FiltroLink({ text, value, active=false, onClick }) {

 return (
    <button
      type="button"
      className={`filter-link ${active ? "filter-link--active" : ""}`}
      onClick={() => onClick(value)}
    >
      {text}
    </button>);
  }