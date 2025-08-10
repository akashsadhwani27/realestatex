
import React, { useState } from 'react';

const zones = {
  Ahmedabad: ['East', 'West', 'North', 'South'],
  Surat: ['Ring Road', 'Ghod Dod', 'VIP Road', 'Adajan'],
  Vadodara: ['Alkapuri', 'Old Padra', 'Gotri', 'Vasna'],
  Rajkot: ['Kalawad Road', '150 Feet Ring Rd', 'Yagnik Rd'],
  Anand: ['V V Nagar', 'Anand City'],
  Nadiad: ['Dabhan Rd', 'Santram Mandir Area'],
  Jamnagar: ['Patel Colony', 'Khambhaliya Rd'],
  Bhavnagar: ['Waghawadi Rd', 'Virpur Road']
};

const PRIMARY = '+91 84018 40108';
const SECONDARY = '+91 92272 89563';
const PRIMARY_RAW = '918401840108';
const SECONDARY_RAW = '919227289563';

export default function App() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', type:'Large Showroom', message:'' });
  const [city, setCity] = useState('Ahmedabad, Gujarat');

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('New enquiry from RealestateX website');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nType: ${form.type}\nMessage: ${form.message}`
    );
    window.open(`mailto:sales@propbullsrealtor.in?subject=${subject}&body=${body}`, '_blank');
    const text = encodeURIComponent(`Hi RealestateX, I want to discuss a ${form.type}. Name: ${form.name}, Phone: ${form.phone}`);
    // open primary in new tab and fallback secondary
    window.open(`https://wa.me/${PRIMARY_RAW}?text=${text}`, '_blank');
    window.open(`https://wa.me/${SECONDARY_RAW}?text=${text}`, '_blank');
  };

  const cities = [
    'Ahmedabad East, Gujarat', 'Ahmedabad West, Gujarat', 'Ahmedabad North, Gujarat', 'Ahmedabad South, Gujarat',
    'Surat, Gujarat', 'Vadodara, Gujarat', 'Rajkot, Gujarat', 'Anand, Gujarat', 'Nadiad, Gujarat', 'Jamnagar, Gujarat', 'Bhavnagar, Gujarat'
  ];

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(city)}&output=embed`;

  return (
    <div className="container">
      <section className="hero">
        <div className="contact-strip">
          <span>☎️ <a href="tel:+918401840108">{PRIMARY}</a></span>
          <span>•</span>
          <span>☎️ <a href="tel:+919227289563">{SECONDARY}</a></span>
          <span>•</span>
          <span>✉️ <a href="mailto:sales@propbullsrealtor.in">sales@propbullsrealtor.in</a></span>
        </div>
        <img src="/logo_white.png" alt="logo" style={{height:64, borderRadius:12, marginTop:14, boxShadow:'0 6px 22px rgba(0,0,0,0.35)'}} />
        <h1>Find. Match. Close.</h1>
        <p>
          Broker-light commercial marketplace — direct brand ↔ landlord, verified listings, and an NRI Relationship Manager.
        </p>
        <div style={{display:'flex', gap:12, justifyContent:'center', marginTop:16}}>
          <a href="#contact" className="btn">List a Property</a>
          <a href="#contact" className="btn light">Post a Requirement</a>
        </div>
      </section>

      <section id="large-showrooms" className="section">
        <div className="kicker">Featured</div>
        <h2 style={{margin:'6px 0 12px'}}>Large Showrooms • Grade‑A High Street</h2>
        <div className="grid cards">
          <div className="card"><strong>Corner, 60–120 ft frontage</strong><div className="tag">Ahmedabad West</div><div className="tag">Surat</div></div>
          <div className="card"><strong>Mega retail boxes 5k–20k sqft</strong><div className="tag">Vadodara</div><div className="tag">Rajkot</div></div>
          <div className="card"><strong>Flagship stores & anchors</strong><div className="tag">SG Road</div><div className="tag">CG Road</div></div>
        </div>
      </section>

      <section id="offices" className="section">
        <div className="kicker">Workplaces</div>
        <h2 style={{margin:'6px 0 12px'}}>Premium Offices & Co‑working</h2>
        <div className="grid cards">
          <div className="card">Grade‑A business parks • 1k–20k sqft</div>
          <div className="card">Plug‑and‑play managed offices</div>
          <div className="card">Enterprise floors with parking</div>
        </div>
      </section>

      <section id="warehouses" className="section">
        <div className="kicker">Supply Chain</div>
        <h2 style={{margin:'6px 0 12px'}}>Industrial & Warehousing</h2>
        <div className="grid cards">
          <div className="card">Logistics belts near ring roads</div>
          <div className="card">ESR‑style grade‑A sheds</div>
          <div className="card">Last‑mile dark stores</div>
        </div>
      </section>

      <section id="plots" className="section">
        <div className="kicker">Land</div>
        <h2 style={{margin:'6px 0 12px'}}>Commercial Plots & IT Parks</h2>
        <div className="grid cards">
          <div className="card">Retail corridors & petrol pump plots</div>
          <div className="card">IT/ITES campus land</div>
          <div className="card">Highway‑adjacent land parcels</div>
        </div>
      </section>

      <section className="section">
        <div className="kicker">Coverage</div>
        <h2 style={{margin:'6px 0 12px'}}>Gujarat Coverage — Cities & Zones</h2>
        <div className="grid cards">
          {Object.entries(zones).map(([city, areas]) => (
            <div className="card" key={city}>
              <strong style={{fontSize:18}}>{city}</strong>
              <div style={{marginTop:8}}>
                {areas.map(a => <span key={a} className="tag">{a}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="kicker">Explore on Google Maps</div>
        <div className="map-wrap">
          <div className="map-toolbar">
            <label htmlFor="city">City/Zone:&nbsp;</label>
            <select id="city" value={city} onChange={(e)=>setCity(e.target.value)}>
              {cities.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <iframe className="map-iframe" title="Gujarat Map" src={mapSrc} loading="lazy" allowFullScreen />
        </div>
      </section>

      <section id="contact" className="section">
        <div className="kicker">Talk to Us</div>
        <h2>Relationship Manager — Quick Connect</h2>
        <form onSubmit={onSubmit} className="grid" style={{maxWidth:820}}>
          <input placeholder="Name" required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
          <input placeholder="Email" type="email" required value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
          <input placeholder="Phone" required value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
          <select value={form.type} onChange={e=>setForm({...form, type:e.target.value})}>
            <option>Large Showroom</option><option>Office</option><option>Warehouse</option><option>Land/Plot</option>
          </select>
          <textarea placeholder="Message" rows="4" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} />
          <button className="btn" type="submit">Send & Open WhatsApp</button>
          <div style={{fontSize:12, color:'#aab4c2', marginTop:6}}>
            Or call us at <a href="tel:+918401840108">{PRIMARY}</a> / <a href="tel:+919227289563">{SECONDARY}</a>
          </div>
        </form>
      </section>
    </div>
  );
}
