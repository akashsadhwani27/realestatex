
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { marked } from 'marked';

export default function Post() {
  const { slug } = useParams();
  const [html, setHtml] = useState('<p>Loading…</p>');

  useEffect(() => {
    fetch('/posts.json')
      .then(r => r.json())
      .then(list => {
        const item = list.find(i => i.slug === slug);
        if (!item) { setHtml('<p>Not found.</p>'); return; }
        fetch('/' + item.file).then(r => r.text()).then(md => {
          setHtml(marked.parse(md));
        });
      });
  }, [slug]);

  return (
    <div className="container">
      <div dangerouslySetInnerHTML={{__html: html}} />
    </div>
  );
}
