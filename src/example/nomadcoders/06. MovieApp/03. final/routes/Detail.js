import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from "./Detail.module.css"

function Detail() {
  const { id } = useParams()
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie()
  }, [])

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>Loading...</div>
      ) : (
        <div className={styles.detail}>
          <div className={styles.detail__left}>
            <img 
              src={movie.large_cover_image} 
              alt={movie.title} 
              className={styles.detail__img}
            />
          </div>
          <div className={styles.detail__right}>
            <div>
              <h1 className={styles.detail__title}>
                {movie.title}
              </h1>
              {movie.title !== movie.title_english && (
                <div className={styles.detail__original_title}>
                  {movie.title_english}
                </div>
              )}
            </div>
            
            <div className={styles.detail__meta}>
              <span>{movie.year}</span>
              <span>{movie.runtime}min</span>
              <span className={styles.detail__rating}>★ {movie.rating}</span>
              <span>{movie.language.toUpperCase()}</span>
            </div>

            <ul className={styles.detail__genres}>
              {movie.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>

            <p className={styles.detail__description}>
              {movie.description_full || "No description available."}
            </p>

            <div className={styles.detail__info_grid}>
              <div className={styles.detail__info_item}>
                <div className={styles.detail__info_label}>Download Size</div>
                <div className={styles.detail__info_value}>
                  {movie.torrents?.[0]?.size || "N/A"}
                </div>
              </div>
              <div className={styles.detail__info_item}>
                <div className={styles.detail__info_label}>Quality</div>
                <div className={styles.detail__info_value}>
                  {movie.torrents?.[0]?.quality || "N/A"}
                </div>
              </div>
            </div>

            {movie.yt_trailer_code && (
              <div className={styles.detail__trailer}>
                <a 
                  href={`https://www.youtube.com/watch?v=${movie.yt_trailer_code}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.detail__trailer_button}
                >
                  ▶ Watch Trailer
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Detail