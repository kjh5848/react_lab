import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ coverImg, title, summary, genres }) => {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to="./movie">{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movie;