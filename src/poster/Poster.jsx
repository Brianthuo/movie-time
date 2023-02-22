import React from 'react'
import './Poster.scss'
import {Link} from 'react-router-dom'

const Poster = ({movies}) => {
  return (
    <div className="poster">
      {
        movies.map((movies, index)=>{
          return(  
          <div>
            <Link to={`/MoviePage/${movies.imdbID}`} className="Link">
            <img src={movies.Poster} alt="" />
            </Link>
            <h2>
            <Link to={`/MoviePage/${movies.imdbID}`} className="Link">Veiw more</Link>
            </h2>
          </div>  
        )})
      }
    </div>
  )
}

export default Poster