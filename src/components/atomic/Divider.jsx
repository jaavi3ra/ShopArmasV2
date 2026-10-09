import "../../styles/atomic/Divider.css";

export  function Divider({
  orientation = "horizontal",
  className = "",
}) {
  return (
    <div
      className={`divider divider--${orientation} ${className}`}
    />
  );
}