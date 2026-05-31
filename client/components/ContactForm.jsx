'use client';

import { useState } from 'react';

const COUNTRIES = ['United Kingdom','United States','Canada','UAE','Germany','Pakistan','Australia','France','Netherlands','Saudi Arabia','Qatar','Other'];
const PRODUCTS  = ['Himalayan Pink Salt (Edible)','Bath & Spa Salt','Salt Lamps & Decor','Salt Bricks & Tiles','Industrial Salt','Custom Blend / Private Label','Other'];

const initial = { name:'', email:'', phone:'', country:'', message:'', quantity:'', product:'', terms:false };

export default function ContactForm() {
  const [form,   setForm]   = useState(initial);
  const [status, setStatus] = useState({ state:'idle', message:'' });

  function set(field) {
    return (e) => setForm({ ...form, [field]: e.type === 'checkbox' ? e.target.checked : e.target.value });
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!form.terms) return;
    setStatus({ state:'loading', message:'' });
    try {
      const res  = await fetch('/api/contact', {
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed.');
      setStatus({ state:'success', message:'Thank you! We\'ll reply within 24 business hours.' });
      setForm(initial);
    } catch (err) {
      setStatus({ state:'error', message: err.message });
    }
  }

  const charLeft = 500 - form.message.length;

  return (
    <form className="cform" onSubmit={onSubmit}>

      {/* Row 1: Name + Email */}
      <div className="cform-row">
        <div className="cform-field">
          <span className="cform-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </span>
          <input type="text" placeholder="Your Full Name" value={form.name} onChange={set('name')} required />
        </div>
        <div className="cform-field">
          <span className="cform-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/>
            </svg>
          </span>
          <input type="email" placeholder="Your Business Email" value={form.email} onChange={set('email')} required />
        </div>
      </div>

      {/* Row 2: Phone */}
      <div className="cform-field cform-full">
        <span className="cform-icon">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
        </span>
        <input type="tel" placeholder="Your Phone / WhatsApp" value={form.phone} onChange={set('phone')} />
      </div>

      {/* Row 3: Country */}
      <div className="cform-field cform-full cform-select">
        <span className="cform-icon">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/>
          </svg>
        </span>
        <select value={form.country} onChange={set('country')}>
          <option value="">Your Country</option>
          {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <span className="cform-chevron">
          <svg width="12" height="12" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5"/></svg>
        </span>
      </div>

      {/* Row 4: Message textarea with char counter */}
      <div className="cform-field cform-full cform-textarea-wrap">
        <span className="cform-icon cform-icon-top">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
        </span>
        <textarea
          placeholder="Tell us about your requirements..."
          value={form.message}
          onChange={set('message')}
          maxLength={500}
          required
          rows={4}
        />
        <span className="cform-counter">{form.message.length} / 500</span>
      </div>

      {/* Row 5: Quantity + Product */}
      <div className="cform-row">
        <div className="cform-field">
          <span className="cform-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4M21 7v10l-9 4M12 11v10"/>
            </svg>
          </span>
          <input type="text" placeholder="Estimated Quantity" value={form.quantity} onChange={set('quantity')} />
        </div>
        <div className="cform-field cform-select">
          <span className="cform-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M20.59 13.41L13.42 20.58a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><circle cx="7" cy="7" r="1.5"/>
            </svg>
          </span>
          <select value={form.product} onChange={set('product')}>
            <option value="">Preferred Product</option>
            {PRODUCTS.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
          <span className="cform-chevron">
            <svg width="12" height="12" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5"/></svg>
          </span>
        </div>
      </div>

      {/* Terms checkbox */}
      <label className="cform-terms">
        <input type="checkbox" checked={form.terms} onChange={set('terms')} required />
        <span>
          I agree to the <a href="#">Privacy Policy</a> and <a href="#">Terms of Use</a>.
        </span>
      </label>

      {/* Submit row */}
      <div className="cform-submit-row">
        <button type="submit" className="cform-submit" disabled={status.state === 'loading' || !form.terms}>
          {status.state === 'loading' ? 'Sending…' : 'Send Inquiry'}
          {status.state !== 'loading' && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
            </svg>
          )}
        </button>
        <p className="cform-secure">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/>
          </svg>
          Your information is secure and will never be shared.
        </p>
      </div>

      {/* Status message */}
      {status.message && (
        <p className={`cform-msg cform-msg--${status.state}`}>{status.message}</p>
      )}
    </form>
  );
}
