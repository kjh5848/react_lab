import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import style from "./Movie.module.css"

const Movie = ({ id, coverImg, title, summary, genres, year }) => {
  return (
    <div className={style.movie}>
      <img src={coverImg} alt={title} className={style.movie__img} />
      <h2 className={style.movie__title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <h3 className={style.movie__year}>{year}</h3>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul className={style.movie__genres}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default Movie;