import { NavLink } from "../atomic/Link";

export function NavMenu() {
  return (
    <nav className="main-nav">
      <NavLink text="SHOP" to="/shop" />
      <NavLink text="DROPS" to="/drops" />
      <NavLink text="ABOUT" to="/about" />
      <NavLink text="LOGIN" to="/login" />
    </nav>
  );
}