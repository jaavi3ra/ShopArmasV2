export function Boton({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}