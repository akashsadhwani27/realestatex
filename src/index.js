
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from './pages/App';
import Blog from './pages/Blog';
import Post from './pages/Post';
import './index.css';

const PRIMARY = '918401840108';
const SECONDARY = '919227289563';

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="/logo_black.png" alt="RealestateX logo" />
        <div>
          <div style={{fontSize:18, fontWeight:900, letterSpacing:0.4}}>Realestate<span style={{color:'#0b84ff'}}>X</span></div>
          <div className="badge">Powered by PropbullsRealtors • propbullsrealtor.in</div>
        </div>
      </div>

      <div className="nav">
        <Link className="tab" to="/">Home</Link>
        <a className="tab" href="#large-showrooms">Large Showrooms</a>
        <a className="tab" href="#offices">Offices</a>
        <a className="tab" href="#warehouses">Warehouses</a>
        <a className="tab" href="#plots">Plots</a>
        <Link className="tab" to="/blog">Blog</Link>
        <a className="tab" href={`tel:+${PRIMARY}`}>Call: +91 84018 40108</a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      © 2025 RealestateX • propbullsrealtor.in — Built in Ahmedabad • Serving Gujarat & NRIs
    </div>
  );
}

function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <div className="wa-picker">
          <strong>Chat on WhatsApp</strong>
          <a href={`https://wa.me/${PRIMARY}?text=Hi%20RealestateX,%20I%20want%20to%20list%20a%20property.`} target="_blank" rel="noreferrer">
            Primary: +91 84018 40108
          </a>
          <a href={`https://wa.me/${SECONDARY}?text=Hi%20RealestateX,%20I%20want%20to%20list%20a%20property.`} target="_blank" rel="noreferrer">
            Secondary: +91 92272 89563
          </a>
        </div>
      )}
      <button className="float-whatsapp" onClick={()=>setOpen(v=>!v)}>
        WhatsApp
      </button>
    </>
  );
}

function Site() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />
      </Routes>
      <WhatsAppFloat />
      <Footer />
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<Site />);
