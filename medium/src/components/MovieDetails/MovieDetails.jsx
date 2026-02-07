import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './MovieDetails.css';

function MovieDetails() {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect( () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`
      }})
      .then(response => response.json())
      .then(data => setMovieInfo(data))
      .catch(() => alert("Oops something went wrong... Try again later"));
  }, []);

  return (
    <section>
      <h1>{movieInfo.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
        alt={`${movieInfo.title} poster`}
      />
      <p className="tagline">{movieInfo.tagline}</p>
      <p>{movieInfo.overview}</p>
      <p>Rating: {movieInfo.popularity}</p>
      <p>Release Date: {movieInfo.release_date}</p>

      <Link to='/'>
        <button>Back to Search</button>
      </Link>
    </section>
  )
}

export default MovieDetails;