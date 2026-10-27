import { NavLink } from "react-router-dom";

const links = [
  { to: "/experience", label: "Experience" },
  { to: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="logo" aria-label="Hanna Abrahem home">
        HA
      </NavLink>
      <nav className="nav" aria-label="Primary">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
