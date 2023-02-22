import './App.scss';
import Movie from './movie/Movie';
import MoviePage from './moviePage/MoviePage';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Movie/>}/>
        <Route path='/MoviePage/:imdbID'  element={<MoviePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
