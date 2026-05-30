import Link from 'next/link';
import Logo from './Logo';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Logo width={120} height={68} />
          <p>
            Al Syedi Group is an ISO 22000 &amp; HACCP certified manufacturer and exporter of premium Himalayan Pink Salt, edible salts, bath blends, salt lamps and industrial salts — trusted by 320+ B2B clients across 42 countries.
          </p>
          <div className="footer-meta">
            <span>EXPORT LICENSE:</span> PK-EXP-09-1051935<br />
            <span>NTN:</span> 7843921-6
          </div>
          <div className="socials">
            <a href="#" className="social-icon" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 013.36-1.85c3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 11.01-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.55V9h3.57z" />
              </svg>
            </a>
            <a href="https://wa.me/923235383806" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7 0-.4-.2-1.5-.5-2.8-1.7-1-.9-1.7-2.1-1.9-2.4-.2-.4 0-.5.2-.7l.5-.6c.2-.2.2-.3.4-.6.1-.2.1-.4 0-.6l-.9-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.2 3.3 5.2 4.6 1.8.8 2.5.8 3.4.7.5-.1 1.8-.7 2-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.7-.4zM12 22a10 10 0 01-5.3-1.5L2 22l1.6-4.5A10 10 0 1112 22z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4>Products</h4>
          <ul className="footer-links">
            <li><Link href="/products">All Products</Link></li>
            <li><Link href="/products">Edible Salts</Link></li>
            <li><Link href="/products">Bath &amp; Spa</Link></li>
            <li><Link href="/products">Lamps &amp; Decor</Link></li>
            <li><Link href="/products">Bricks &amp; Tiles</Link></li>
            <li><Link href="/products">Industrial Salt</Link></li>
            <li><Link href="/brands">Salt Collections</Link></li>
            <li><Link href="/#varieties">Salt Varieties</Link></li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul className="footer-links">
            <li><Link href="/#about">About Al Syedi</Link></li>
            <li><Link href="/#benefits">Health Benefits</Link></li>
            <li><Link href="/#composition">Mineral Composition</Link></li>
            <li><Link href="/#process">Mine-to-Market Process</Link></li>
            <li><Link href="/#certifications">Certifications</Link></li>
            <li><Link href="/#markets">Global Markets</Link></li>
            <li><Link href="/#partners">Retail Partners</Link></li>
            <li><Link href="/#brands-labeled">Private Label Brands</Link></li>
          </ul>
        </div>

        <div>
          <h4>B2B Info</h4>
          <ul className="footer-links">
            <li><Link href="/#pricing">Bulk Pricing Tiers</Link></li>
            <li><Link href="/#grades">Salt Grade Chart</Link></li>
            <li><Link href="/#packaging">Packaging Options</Link></li>
            <li><Link href="/#promise">Quality Promise</Link></li>
            <li><Link href="/#reviews">Google Reviews</Link></li>
            <li><Link href="/#faq">FAQ</Link></li>
            <li><Link href="/#insights">B2B Insights</Link></li>
            <li><Link href="/contact">Request a Quote</Link></li>
          </ul>
        </div>
      </div>

      {/* Contact + newsletter strip */}
      <div className="footer-contact-strip">
        <div className="footer-contact-grid">
          <div className="footer-contact-block">
            <h4>Head Office</h4>
            <div className="contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>Khewra Salt Range Office,<br />District Jhelum, Punjab — Pakistan</div>
            </div>
            <div className="contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              <div>+92 323 538 3806 (WhatsApp)</div>
            </div>
            <div className="contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16v16H4z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
              <div>sales@alsyedigroup.com</div>
            </div>
            <div className="contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <div>Mon–Sat · 9 AM – 6 PM PKT</div>
            </div>
          </div>
          <div className="newsletter">
            <h4>B2B Salt Insights</h4>
            <p>Mine reports, market pricing trends &amp; private label tips — monthly newsletter to your inbox.</p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Al Syedi Group · مجموعة السيدي — Pakistan · All Rights Reserved</p>
        <div className="footer-badges">
          <span>ISO 22000</span>
          <span>HACCP</span>
          <span>BRC AA+</span>
          <span>Halal · Kosher</span>
          <span>FDA Registered</span>
        </div>
      </div>
    </footer>
  );
}
