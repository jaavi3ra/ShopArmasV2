import "../../styles/atomic/Contador.css";

export  function Badge({ value }) {
  return (
    <span className="badge">
      {value}
    </span>
  );
}