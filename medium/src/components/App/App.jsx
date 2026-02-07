import {Routes, Route} from 'react-router-dom';
import './App.css';
import Search from '../Search/Search';
import MovieDetails from '../MovieDetails/MovieDetails';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>    
  )
}

export default App;
