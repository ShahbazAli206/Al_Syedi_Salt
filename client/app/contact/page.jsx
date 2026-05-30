import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import Chatbot from '@/components/Chatbot';
import Flag from '@/components/Flag';

export const metadata = { title: 'Contact — Al Syedi Group' };

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageHeader title="Contact Us" crumb="Contact" />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-card" data-reveal-toggle="left">
              <div className="eyebrow">Get in Touch</div>
              <h2>Let&apos;s Discuss Your <span className="gold-word">Salt Order</span></h2>
              <p>
                Bulk salt supply, private label packaging, custom grinds or container-load shipping — tell us what you need and our B2B team will respond within 24 hours with pricing, samples and logistics options.
              </p>
              <ContactForm />
            </div>

            <div data-reveal-toggle="right">
              <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>Head Office</div>
              <div className="contact-info-card" data-reveal-stagger>
                <InfoRow label="Headquarters" value="Khewra Salt Range Office · Punjab, Pakistan" icon={
                  <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>
                } />
                <InfoRow label="Email" value="sales@alsyedigroup.com" icon={
                  <><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></>
                } />
                <InfoRow label="Phone / WhatsApp" value="+92 323 538 3806" icon={
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
                } />
                <InfoRow label="Working Hours" value="Monday – Saturday · 9:00 AM – 6:00 PM PKT" icon={
                  <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>
                } />
                <div className="response-promise">
                  <h4>24-Hour Response Promise</h4>
                  <p>Every B2B inquiry answered within 24 business hours — with pricing, lead times and sample availability included in the first reply.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Global offices */}
          <div style={{ textAlign: 'center', marginTop: '5rem' }} data-reveal="up">
            <div className="eyebrow">Our Global Presence</div>
            <h2 className="section-title">Regional <span className="gold-word">Sales Offices</span></h2>
            <div className="title-rule"></div>
          </div>

          <div className="offices-grid" data-reveal-stagger>
            <Office code="gb" name="United Kingdom" region="EU & UK Sales" addr="14 Salt Wharf Road, Manchester M5 3AA, United Kingdom" phone="+44 161 555 0188" />
            <Office code="us" name="United States"  region="Americas Sales" addr="2200 Pink Crystal Ave, Suite 410, Newark NJ 07102, USA" phone="+1 973 555 0124" />
            <Office code="ca" name="Canada"         region="North America" addr="88 Mineral Drive, Mississauga ON L5T 2N5, Canada" phone="+1 905 555 0167" />
            <Office code="ae" name="UAE"            region="MENA & GCC" addr="Warehouse 8, Jebel Ali Free Zone, Dubai, UAE" phone="+971 4 555 0142" />
            <Office code="pk" name="Pakistan (HQ)"  region="Manufacturing" addr="Khewra Salt Range, District Jhelum, Punjab 49100" phone="+92 323 538 3806" />
            <Office code="de" name="Germany"        region="DACH Region" addr="Hafenstraße 17, 20457 Hamburg, Deutschland" phone="+49 40 555 0173" />
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </>
  );
}

function InfoRow({ label, value, icon }) {
  return (
    <div className="info-row">
      <div className="icn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          {icon}
        </svg>
      </div>
      <div className="info-content">
        <small>{label}</small>
        <p>{value}</p>
      </div>
    </div>
  );
}

function Office({ code, name, region, addr, phone }) {
  return (
    <div className="office-card">
      <div className="flag" style={{ marginBottom: '.75rem' }}>
        <Flag code={code} width={44} height={30} />
      </div>
      <small>{region}</small>
      <h4>{name}</h4>
      <p className="addr">{addr}</p>
      <p className="phone">{phone}</p>
    </div>
  );
}
