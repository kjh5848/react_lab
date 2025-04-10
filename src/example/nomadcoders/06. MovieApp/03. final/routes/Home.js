import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMoviesV2 = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  const getMoviesV1 = async () => {
    const reponse = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await reponse.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMoviesV1();
  }, []);
  console.log(movies);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading....</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              year={movie.year}
              id={movie.id}
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}


export default Home;
