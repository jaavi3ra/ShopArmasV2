import "../../styles/atomic/Nav-Link.css";

export  function NavLink({ text, href = "#", active = false }) {
  return (
    <a
      href={href}
      className={`nav-link ${active ? "nav-link--active" : ""}`}
    >
      {text}
    </a>
  );
}