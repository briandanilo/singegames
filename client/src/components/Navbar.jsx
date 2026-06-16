import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/games', label: 'Games' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          <span className="logo-s">S</span>inge<span className="logo-games">GAMES</span>
        </Link>
        <button className="navbar-burger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
        <ul className={`navbar-links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.end} onClick={() => setOpen(false)}
                className={({ isActive }) => isActive ? 'active' : ''}>
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/contact" className="btn btn-primary navbar-cta" onClick={() => setOpen(false)}>
              Play Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
