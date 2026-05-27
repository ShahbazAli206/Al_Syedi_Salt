'use client';

import { useState } from 'react';
import { api } from '@/lib/api';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ state: 'loading', message: '' });
    try {
      const res = await api.subscribeNewsletter(email);
      setStatus({ state: 'success', message: res.message || 'Subscribed!' });
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
