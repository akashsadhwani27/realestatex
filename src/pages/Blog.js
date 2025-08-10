
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('%PUBLIC_URL%/posts.json').then(r => r.json()).then(setPosts);
  }, []);
  return (
    <div className="container">
      <h2>Insights & Updates</h2>
      <div className="grid cards">
        {posts.map(p => (
          <div className="card" key={p.slug}>
            <div className="badge">{new Date(p.date).toLocaleDateString()}</div>
            <h3 style={{margin:'8px 0'}}>{p.title}</h3>
            <Link to={`/blog/${p.slug}`}>Read →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
