
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from './pages/App';
import Blog from './pages/Blog';
import Post from './pages/Post';
import './index.css';

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="/logo_black.png" alt="RealestateX logo" />
        <div>
          <div style={{fontSize:18, fontWeight:800}}>Realestate<span style={{color:'var(--blue)'}}>X</span></div>
          <div className="badge">Powered by PropbullsRealtors • propbullsrealtor.in</div>
        </div>
      </div>
      <nav style={{display:'flex', gap:16}}>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <a href="tel:+918401840108">Call us</a>
      </nav>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div>© 2025 RealestateX • propbullsrealtor.in</div>
      <div style={{fontSize:12}}>Direct brand ↔ landlord • NRI concierge • Verified listings</div>
    </div>
  );
}

function WhatsAppFloat() {
  const href = "https://wa.me/918401840108?text=Hi%20RealestateX,%20I%20want%20to%20list%20a%20property";
  return <a className="float-whatsapp" href={href} target="_blank" rel="noreferrer">WhatsApp</a>
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
