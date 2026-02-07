import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

function Search() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const searchMovies = async (event) => {
    event.preventDefault();

    if (!search.trim()) return;

    const url = `https://api.themoviedb.org/3/search/movie?query=${search}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`
      }
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error('Unable to connect to TMDB');
      }

      const data = await response.json();
      setMovies(data.results);
    } catch (e) {
      console.error('Fetch error: ', e);
    }
  }

  return (
    <section className='app'>
      <h1>Movie Search</h1>

      <form className='form' onSubmit={searchMovies}>
        <label className='form__label'>Movie Title:</label>
        <input 
          className='form__input'
          type='text' 
          placeholder='Search...' 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className='form__btn' type='submit'>Search</button>
      </form>

      <section className='search-results'>
        { movies.length > 0 ?  <h2>Search Results</h2> : <></> }
        <div className='search-results__content'>
          {movies.map(movie => (
            <Link 
              className='search-results__content--movie'
              key={movie.id}
              to={`/movie/${movie.id}`}
            >
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={`${movie.title} poster`}
              />
              <h3>{movie.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </section>
  )
}

export default Search;