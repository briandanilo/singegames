import { useState } from 'react';
import './Contact.css';

const reasons = [
  { label: 'General Inquiry', value: 'general' },
  { label: 'Press / Media', value: 'press' },
  { label: 'Business Partnership', value: 'business' },
  { label: 'Player Support', value: 'support' },
  { label: 'Bug Report', value: 'bug' },
  { label: 'Other', value: 'other' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', reason: 'general', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ ok: true, msg: 'Message sent! We usually reply within 1–2 business days.' });
        setForm({ name: '', email: '', reason: 'general', message: '' });
      } else {
        setStatus({ ok: false, msg: data.error || 'Something went wrong.' });
      }
    } catch {
      setStatus({ ok: false, msg: 'Could not reach the server. Please try again.' });
    }
    setLoading(false);
  };

  return (
    <main className="page contact-page">
      <div className="container contact-grid">
        {/* Left */}
        <div>
          <p className="section-label">Get in touch</p>
          <h1 className="section-title">Let's talk</h1>
          <p className="contact-sub">
            Whether you're a player, press, or potential partner — we read every message.
          </p>
          <div className="contact-items">
            <div className="contact-item">
              <span className="ci-label">Email</span>
              <a href="mailto:hello@singegames.com" className="ci-value">hello@singegames.com</a>
            </div>
            <div className="contact-item">
              <span className="ci-label">Press inquiries</span>
              <a href="mailto:press@singegames.com" className="ci-value">press@singegames.com</a>
            </div>
            <div className="contact-item">
              <span className="ci-label">Player support</span>
              <a href="mailto:support@singegames.com" className="ci-value">support@singegames.com</a>
            </div>
            <div className="contact-item">
              <span className="ci-label">Discord</span>
              <a href="https://discord.gg/singegames" target="_blank" rel="noreferrer" className="ci-value">discord.gg/singegames</a>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="contact-form card" onSubmit={submit}>
          <div className="field-row">
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={e => set('name', e.target.value)}
                required
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={e => set('email', e.target.value)}
                required
              />
            </div>
          </div>
          <div className="field">
            <label>Reason</label>
            <select value={form.reason} onChange={e => set('reason', e.target.value)}>
              {reasons.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
            </select>
          </div>
          <div className="field">
            <label>Message</label>
            <textarea
              rows={6}
              placeholder="What's on your mind?"
              value={form.message}
              onChange={e => set('message', e.target.value)}
              required
            />
          </div>
          {status && (
            <div className={`form-status ${status.ok ? 'ok' : 'err'}`}>{status.msg}</div>
          )}
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      </div>
    </main>
  );
}
