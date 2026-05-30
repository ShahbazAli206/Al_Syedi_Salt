'use client';

import { useState } from 'react';

const initial = { name: '', email: '', phone: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  function update(field) {
    return (e) => setForm({ ...form, [field]: e.target.value });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ state: 'loading', message: '' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed.');
      setStatus({ state: 'success', message: data.message || 'Message sent.' });
      setForm(initial);
    } catch (err) {
      setStatus({ state: 'error', message: err.message });
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <input type="text"  placeholder="Your Name"  value={form.name}    onChange={update('name')}    required />
      <input type="email" placeholder="Your Email" value={form.email}   onChange={update('email')}   required />
      <input type="tel" className="full" placeholder="Your Phone" value={form.phone} onChange={update('phone')} />
      <textarea className="full" placeholder="Your Message" value={form.message} onChange={update('message')} required />
      <button type="submit" className="btn btn-gold" disabled={status.state === 'loading'}>
        {status.state === 'loading' ? 'Sending…' : 'Send Message'}
      </button>
      {status.message && (
        <p className="full" style={{
          fontSize: '.88rem',
          marginTop: '.5rem',
          color: status.state === 'error' ? '#d96e6e' : 'var(--gold)',
        }}>
          {status.message}
        </p>
      )}
    </form>
  );
}
