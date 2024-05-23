// src/components/ArticleList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../articles/_list'

const ARTICLES_PER_PAGE = 20; // Number of articles per page

const ArticleList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const currentArticles = articles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);

  return (
    <div>
      <p>
        We are Open Tech Community working together to bring an inspiring community across the country to form a better future with Open Technologies and Information and Communication Technology (ICT). Our community is a team of volunteers dedicated to build capacity and raise awareness amongst various institutes in Nepal including government bodies and universities.
        <br/>
        Open Tech is a set of technologies which are built over the philosophy of openness and freedom. Currently, our team is formed with a group of professionals working in the area of Open Data, Free and Open Source Software (FOSS) and Open Mapping.
      </p>
      <h1>Events & Activities</h1>
      <ul>
        {currentArticles.map(article => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ArticleList;
