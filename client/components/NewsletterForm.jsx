'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ state: 'loading', message: '' });
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Subscription failed.');
      setStatus({ state: 'success', message: data.message || 'Subscribed!' });
      setEmail('');
    } catch (err) {
      setStatus({ state: 'error', message: err.message });
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        placeholder="your@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" disabled={status.state === 'loading'}>
        {status.state === 'loading' ? 'Subscribing…' : 'Subscribe'}
      </button>
      {status.message && (
        <p style={{ fontSize: '.78rem', marginTop: '.5rem', color: status.state === 'error' ? '#d96e6e' : 'var(--gold)' }}>
          {status.message}
        </p>
      )}
    </form>
  );
}
