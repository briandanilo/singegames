import './Games.css';

const games = [
  {
    title: 'Ember Protocol',
    genre: 'Action RPG',
    platform: 'PC / Browser',
    status: 'Live',
    statusClass: 'tag-red',
    year: '2022',
    desc: 'A dark fantasy action RPG where ancient fire magic collides with modern survival. Explore procedurally generated dungeons, craft legendary gear, and battle relentless bosses in a world on the edge of ruin. Ember Protocol features full cross-platform multiplayer with dedicated server infrastructure.',
    features: ['Co-op multiplayer (up to 4 players)', 'Procedural dungeons', 'Seasonal battle pass', 'Controller support'],
  },
  {
    title: 'Voidrift',
    genre: 'Real-Time Strategy',
    platform: 'PC / Browser',
    status: 'Beta',
    statusClass: 'tag-orange',
    year: '2024',
    desc: 'Command your fleet across a fractured galaxy in this deep real-time strategy game. Colonize planets, manage economies, form diplomatic alliances — or crush them. Voidrift scales from quick skirmishes to multi-week persistent campaigns.',
    features: ['Persistent campaign servers', '1v1 to 8-player lobbies', 'Full mod support', 'Weekly ranked seasons'],
  },
  {
    title: 'Neon Relic',
    genre: 'Roguelite',
    platform: 'PC / Mobile / Browser',
    status: 'Coming Soon',
    statusClass: 'tag-blue',
    year: '2025',
    desc: 'Descend into a procedurally generated cyberpunk megacity where every run rewrites the rules. Hack systems, upgrade your neural implants, and fight through 30+ enemy factions. Neon Relic will launch with full cross-play and cloud save on day one.',
    features: ['100+ abilities to combine', 'Daily challenge runs', 'Cross-platform cloud save', 'Leaderboards'],
  },
  {
    title: 'Ashbound',
    genre: 'Survival MMO',
    platform: 'PC',
    status: 'In Development',
    statusClass: 'tag-orange',
    year: 'TBD',
    desc: 'A post-apocalyptic open-world survival MMO with player-driven economies, base building, and territory control. Ashbound supports thousands of concurrent players on a single seamless server.',
    features: ['Open world PvP/PvE zones', 'Player housing & guilds', 'Real-time economy', 'Voice chat built-in'],
  },
  {
    title: 'Circuit Break',
    genre: 'Competitive Puzzle',
    platform: 'PC / Mobile / Browser',
    status: 'Live',
    statusClass: 'tag-red',
    year: '2020',
    desc: 'A lightning-fast competitive puzzle game where two players race to solve circuit-themed logic puzzles. Simple to learn, brutally hard to master. Circuit Break has a thriving esports scene with monthly tournaments.',
    features: ['1v1 ranked matchmaking', 'Monthly tournaments', 'Custom puzzle editor', 'Spectator mode'],
  },
  {
    title: 'ShadowBound',
    genre: 'Horror Adventure',
    platform: 'PC / Browser',
    status: 'Live',
    statusClass: 'tag-red',
    year: '2021',
    desc: 'A co-op horror adventure where up to 6 players explore haunted environments, solve mysteries, and survive the dark. ShadowBound uses proximity voice chat and environmental storytelling for unmatched atmosphere.',
    features: ['Up to 6-player co-op', 'Proximity voice chat', 'Randomized haunt events', 'Weekly story drops'],
  },
];

export default function Games() {
  return (
    <main className="page games-page">
      <div className="container">
        <div className="games-header">
          <p className="section-label">Our portfolio</p>
          <h1 className="section-title">All Games</h1>
          <p className="section-sub">
            Every title we ship is designed to keep players engaged for years,
            not weeks. Here's what we've built.
          </p>
        </div>
        <div className="games-grid">
          {games.map(g => (
            <article key={g.title} className="game-article card">
              <div className="ga-thumb" />
              <div className="ga-body">
                <div className="ga-meta">
                  <span className={`tag ${g.statusClass}`}>{g.status}</span>
                  <span className="ga-genre">{g.genre}</span>
                  <span className="ga-platform">{g.platform}</span>
                </div>
                <h2 className="ga-title">{g.title}</h2>
                <p className="ga-desc">{g.desc}</p>
                <ul className="ga-features">
                  {g.features.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
