import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-s">S</span>inge<span className="logo-games">GAMES</span>
          </Link>
          <p>Crafting unforgettable online gaming experiences.</p>
        </div>
        <div className="footer-cols">
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/games">Games</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/cookies">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4>Follow</h4>
            <ul>
              <li><a href="https://twitter.com/singegames" target="_blank" rel="noreferrer">Twitter / X</a></li>
              <li><a href="https://discord.gg/singegames" target="_blank" rel="noreferrer">Discord</a></li>
              <li><a href="https://twitch.tv/singegames" target="_blank" rel="noreferrer">Twitch</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>© {new Date().getFullYear()} Singe Games. All rights reserved.</p>
        <p>Made with passion for players worldwide.</p>
      </div>
    </footer>
  );
}
