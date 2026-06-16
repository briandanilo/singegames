import { Link } from 'react-router-dom';
import './Home.css';

const games = [
  {
    title: 'Ember Protocol',
    genre: 'Action RPG',
    status: 'Live',
    statusClass: 'tag-red',
    desc: 'A dark fantasy action RPG set in a world consumed by arcane fire. Forge alliances, master spells, and survive the Ember Wastes.',
  },
  {
    title: 'Voidrift',
    genre: 'Strategy',
    status: 'Beta',
    statusClass: 'tag-orange',
    desc: 'Build your galactic empire, manage resources, and outmaneuver rivals in this deep real-time strategy experience.',
  },
  {
    title: 'Neon Relic',
    genre: 'Roguelite',
    status: 'Coming Soon',
    statusClass: 'tag-blue',
    desc: 'A cyberpunk roguelite with procedurally generated levels, fast-paced combat, and relentless neon aesthetic.',
  },
];

const stats = [
  { value: '3M+', label: 'Players worldwide' },
  { value: '12', label: 'Game releases' },
  { value: '4.8★', label: 'Average rating' },
  { value: '2016', label: 'Founded' },
];

export default function Home() {
  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <p className="section-label">Singe Games Studio</p>
          <h1 className="hero-title">
            Games Built to<br />
            <span className="gradient-text">Ignite Players</span>
          </h1>
          <p className="hero-sub">
            We design and develop online games that push boundaries — immersive worlds,
            tight mechanics, and communities that keep players coming back.
          </p>
          <div className="hero-actions">
            <Link to="/games" className="btn btn-primary">Explore Our Games</Link>
            <Link to="/about" className="btn btn-outline">About Us</Link>
          </div>
        </div>
        <div className="hero-grid-lines" />
      </section>

      {/* Stats */}
      <section className="stats-bar">
        <div className="container stats-inner">
          {stats.map(s => (
            <div key={s.label} className="stat-item">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Games */}
      <section className="page">
        <div className="container">
          <p className="section-label">What we build</p>
          <h2 className="section-title">Featured Games</h2>
          <p className="section-sub">
            From action RPGs to strategy titles, every Singe game is crafted for
            maximum replayability and player engagement.
          </p>
          <div className="grid-3">
            {games.map(g => (
              <div key={g.title} className="card game-card">
                <div className="game-thumb" />
                <div className="game-meta">
                  <span className={`tag ${g.statusClass}`}>{g.status}</span>
                  <span className="game-genre">{g.genre}</span>
                </div>
                <h3 className="game-title">{g.title}</h3>
                <p className="game-desc">{g.desc}</p>
                <Link to="/games" className="btn btn-outline game-btn">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Singe */}
      <section className="why-section">
        <div className="container">
          <div className="grid-2 why-grid">
            <div>
              <p className="section-label">Why Singe</p>
              <h2 className="section-title">Player-first,<br />always</h2>
              <p className="section-sub" style={{ marginBottom: 24 }}>
                We don't chase trends. We listen to our community and build games
                we'd actually want to play.
              </p>
              <ul className="why-list">
                <li><span>No pay-to-win mechanics — ever</span></li>
                <li><span>Regular free content updates</span></li>
                <li><span>Active community & direct developer access</span></li>
                <li><span>Cross-platform play as standard</span></li>
              </ul>
              <Link to="/about" className="btn btn-primary" style={{ marginTop: 32 }}>Meet the Team</Link>
            </div>
            <div className="why-art" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Ready to play?</h2>
          <p>Jump into any of our live titles — all free to start.</p>
          <Link to="/games" className="btn btn-primary">Browse Games</Link>
        </div>
      </section>
    </main>
  );
}
