import React, { useEffect, useState } from "react";

function MovieAppPartOne() {
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
    <div>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image}/>
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieAppPartOne;
