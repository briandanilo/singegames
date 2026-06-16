import './About.css';

const team = [
  { name: 'Alex Morrow', role: 'CEO & Co-founder', bio: 'Former lead designer at three AAA studios. Founded Singe Games in 2016 to make the games he wanted to play but couldn\'t find.' },
  { name: 'Priya Nair', role: 'CTO & Co-founder', bio: 'Full-stack game engineer with 15 years building online multiplayer infrastructure. Architect behind Ember Protocol\'s server tech.' },
  { name: 'Jordan Weeks', role: 'Creative Director', bio: 'Narrative designer and world-builder. Responsible for the lore, tone, and art direction across all Singe titles.' },
  { name: 'Sam Chen', role: 'Head of Engineering', bio: 'Distributed systems specialist keeping our game servers stable for millions of concurrent players.' },
  { name: 'Leah Torres', role: 'Community Director', bio: 'Player advocate and community architect. Manages our Discord, socials, and player feedback pipelines.' },
  { name: 'Marcus Hill', role: 'Lead Game Designer', bio: 'Systems designer obsessed with game feel, balance, and making every click satisfying. Five shipped titles before Singe.' },
];

const values = [
  { icon: '🎮', title: 'Player First', desc: 'Every decision we make starts with the question: is this good for the player? Not just for revenue.' },
  { icon: '🔥', title: 'Quality over Speed', desc: 'We take the time to get it right. Rushed games are forgotten; crafted games are remembered.' },
  { icon: '🤝', title: 'Community-Driven', desc: 'Our players co-create with us. Beta programs, design councils, and direct dev access are core to how we build.' },
  { icon: '⚡', title: 'Relentless Iteration', desc: 'Ship, listen, improve, repeat. We push updates every week and take feedback seriously.' },
];

export default function About() {
  return (
    <main className="page about-page">
      <div className="container">
        {/* Mission */}
        <div className="about-hero">
          <p className="section-label">Who we are</p>
          <h1 className="section-title">Built by gamers,<br />for gamers</h1>
          <p className="about-hero-sub">
            Singe Games is an independent online game developer founded in 2016.
            We're a team of 40+ designers, engineers, and storytellers distributed
            across the globe, united by one obsession: making online games worth playing.
          </p>
        </div>

        {/* Values */}
        <section className="about-section">
          <p className="section-label">Our values</p>
          <h2 className="section-title">What drives us</h2>
          <div className="grid-2 values-grid">
            {values.map(v => (
              <div key={v.title} className="card value-card">
                <span className="value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="about-section story-section">
          <div className="grid-2" style={{ alignItems: 'center', gap: 64 }}>
            <div className="story-art" />
            <div>
              <p className="section-label">Our story</p>
              <h2 className="section-title">Started with a bad game</h2>
              <p style={{ color: 'var(--muted)', marginBottom: 16 }}>
                In 2016, co-founders Alex and Priya were frustrated — the online games
                they loved were being monetized into misery. Pay-to-win mechanics,
                abandoned updates, communities left to rot.
              </p>
              <p style={{ color: 'var(--muted)', marginBottom: 16 }}>
                They quit their jobs and built Circuit Break on a tight budget in six
                months. It wasn't perfect, but it was honest. Players noticed. The community
                grew. And Singe Games was born.
              </p>
              <p style={{ color: 'var(--muted)' }}>
                Today we're a team of 40+ across four time zones, but the founding
                principle hasn't changed: make games we'd actually want to play, treat
                players like adults, and build things that last.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="about-section">
          <p className="section-label">The team</p>
          <h2 className="section-title">The people behind the games</h2>
          <div className="grid-3 team-grid">
            {team.map(m => (
              <div key={m.name} className="card team-card">
                <div className="team-avatar" />
                <h3 className="team-name">{m.name}</h3>
                <p className="team-role">{m.role}</p>
                <p className="team-bio">{m.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
