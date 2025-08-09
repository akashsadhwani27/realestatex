
import React, { useState } from 'react';

export default function App() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', type:'Shop', message:'' });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('New enquiry from RealestateX website');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nType: ${form.type}\nMessage: ${form.message}`
    );
    window.open(`mailto:sales@propbullsrealtor.in?subject=${subject}&body=${body}`, '_blank');
    const text = encodeURIComponent(`Hi RealestateX, I want to discuss a ${form.type}. Name: ${form.name}, Phone: ${form.phone}`);
    window.open(`https://wa.me/918401840108?text=${text}`, '_blank');
  };

  return (
    <div className="container">
      <section className="hero">
        <img src="/logo_white.png" alt="logo" style={{height:60, borderRadius:12, boxShadow:'0 4px 12px rgba(0,0,0,0.08)'}} />
        <h1 style={{fontSize:42, marginBottom:8}}>Find. Match. Close.</h1>
        <p style={{fontSize:18, color:'#444', maxWidth:720, margin:'0 auto'}}>
          Gujarat’s broker-light commercial marketplace — direct brand ↔ landlord, verified listings, and an NRI Relationship Manager.
        </p>
        <div style={{display:'flex', gap:12, justifyContent:'center', marginTop:16}}>
          <a href="#contact" className="btn">List a Property</a>
          <a href="#contact" className="btn light">Post a Requirement</a>
        </div>
      </section>

      <section className="section">
        <div className="grid cards">
          <div className="card"><h3>Verified Listings</h3><p>Media‑verified, geo‑tagged, and periodically re‑checked.</p></div>
          <div className="card"><h3>Smart Matching</h3><p>Match score on size, frontage, budget, adjacencies, possession.</p></div>
          <div className="card"><h3>NRI Concierge</h3><p>Dedicated RM for overseas owners — updates via WhatsApp.</p></div>
        </div>
      </section>

      <section className="section">
        <h2>Top Gujarat Micro‑Markets</h2>
        <div className="grid cards">
          <div className="card">SG Road (Ahmedabad)</div>
          <div className="card">CG Road (Ahmedabad)</div>
          <div className="card">Prahladnagar</div>
          <div className="card">Maninagar</div>
          <div className="card">Vastrapur</div>
          <div className="card">Ring Road (Surat)</div>
          <div className="card">Alkapuri (Vadodara)</div>
          <div className="card">Kalawad Road (Rajkot)</div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Talk to a Relationship Manager</h2>
        <form onSubmit={onSubmit} className="grid" style={{maxWidth:720}}>
          <input placeholder="Name" required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
          <input placeholder="Email" type="email" required value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
          <input placeholder="Phone" required value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
          <select value={form.type} onChange={e=>setForm({...form, type:e.target.value})}>
            <option>Shop</option><option>Office</option><option>Warehouse</option><option>Land/Plot</option>
          </select>
          <textarea placeholder="Message" rows="4" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} />
          <button className="btn" type="submit">Send & Open WhatsApp</button>
          <div style={{fontSize:12, color:'#666'}}>You can also call us at <a href="tel:+918401840108">+91 84018 40108</a>.</div>
        </form>
      </section>
    </div>
  );
}
