import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import ContactImage from '@/components/ContactImage';
import Chatbot from '@/components/Chatbot';

export const metadata = { title: 'Contact — Al Syedi Group' };

const INFO_CARDS = [
  {
    icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>,
    title: 'Head Office',
    lines: ['Khewra Salt Range Office', 'Punjab, Pakistan'],
  },
  {
    icon: <><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></>,
    title: 'Email Us',
    lines: ['sales@alsyedigroup.com', 'We reply within 24 hours'],
  },
  {
    icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>,
    title: 'Phone / WhatsApp',
    lines: ['+92 323 538 3806', 'Mon – Sat, 9 AM – 6 PM PKT'],
  },
  {
    icon: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
    title: 'Working Hours',
    lines: ['Monday – Saturday', '9:00 AM – 6:00 PM PKT'],
  },
];

const TRUST = [
  {
    icon: <><path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4M21 7v10l-9 4M12 11v10"/></>,
    title: 'Bulk & Wholesale Experts',
    sub: 'Specialized in bulk salt supply for global businesses.',
  },
  {
    icon: <><path d="M20.59 13.41L13.42 20.58a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><circle cx="7" cy="7" r="1.5"/></>,
    title: 'Competitive Pricing',
    sub: 'Factory-direct pricing with maximum value.',
  },
  {
    icon: <><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>,
    title: 'Reliable Supply Chain',
    sub: 'On-time delivery with secure packaging and logistics.',
  },
  {
    icon: <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></>,
    title: 'Quality Assured',
    sub: '100% natural, lab-tested Himalayan pink salt.',
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="cp-page">
        <div className="cp-inner">

          {/* Page title */}
          <div className="cp-titlebar">
            <h1 className="cp-title">Contact Us</h1>
            <div className="cp-title-rule" />
          </div>

          {/* Two columns: form (left) + info (right) */}
          <div className="cp-cols">

            {/* Left — form card */}
            <div className="cp-form-card">
              <div className="eyebrow cp-eyebrow">Get in Touch</div>
              <h3 className="cp-form-title">
                Let&apos;s Discuss Your <span className="gold-word">Salt Requirements</span>
              </h3>
              <p className="cp-form-sub">
                Fill out the form below and our B2B team will get back to you within 24 business hours.
              </p>
              <ContactForm />
            </div>

            {/* Right — image + intro + contact info */}
            <div className="cp-info">
              {/* Small salt image above the heading */}
              <div className="cp-thumb">
                <ContactImage className="cp-thumb-img" />
              </div>

              <h2 className="cp-help-title">We&apos;re Here to Help Your Business</h2>
              <p className="cp-help-sub">
                Have questions about our pink salt products or need a custom bulk order?
                Our team is ready to assist you with product details, pricing, samples, and logistics.
              </p>

              <div className="eyebrow cp-eyebrow" style={{ margin: '1.75rem 0 1.25rem' }}>Contact Information</div>

              <div className="cp-info-grid">
                {INFO_CARDS.map((c) => (
                  <div className="cp-info-card" key={c.title}>
                    <div className="cp-info-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        {c.icon}
                      </svg>
                    </div>
                    <div>
                      <strong>{c.title}</strong>
                      {c.lines.map((l, i) => <span key={i}>{l}</span>)}
                    </div>
                  </div>
                ))}
              </div>

              {/* 24h promise */}
              <div className="cp-promise">
                <div className="cp-promise-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M3 11a9 9 0 0118 0M12 11v5l3 2"/><circle cx="12" cy="11" r="9"/>
                  </svg>
                </div>
                <div className="cp-promise-body">
                  <strong>24-Hour Response Promise</strong>
                  <p>
                    Every B2B inquiry is important to us. We guarantee a response within 24 business
                    hours with pricing, lead times, and sample availability.
                  </p>
                </div>
                <div className="cp-promise-badge">
                  <span>24h</span>
                  <small>RESPONSE</small>
                </div>
              </div>
            </div>
          </div>

          {/* ── Trust strip ── */}
          <div className="cp-trust-strip">
            {TRUST.map((t) => (
              <div className="cp-trust-item" key={t.title}>
                <div className="cp-trust-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">{t.icon}</svg>
                </div>
                <div>
                  <strong>{t.title}</strong>
                  <span>{t.sub}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
      <Chatbot />
    </>
  );
}
