// src/components/Article.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

const Article = () => {
  const { articleId } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    import(`../articles/${articleId}.md`)
      .then(res => {
        fetch(res.default)
          .then(response => response.text())
          .then(text => setContent(text))
      })
      .catch(err => console.error(err));
  }, [articleId]);

  return (
    <div>
      <Link to="/">Back to Events & Activities</Link>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Article;
