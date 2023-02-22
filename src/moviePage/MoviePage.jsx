import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import './MoviePage.scss'
import {AiOutlineArrowLeft} from 'react-icons/ai'

const MoviePage = () => {
    const {imdbID}= useParams()
    const[Info, setInfo]= useState('');
    const getMovieRes = async ()=>{
        const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=a0114002`;
    
        const movieRes = await fetch(url)
        const movieResJSON = await movieRes.json();

        setInfo(movieResJSON)
        console.log(movieResJSON)
      }
      useEffect(()=>{
        getMovieRes()
      }, [Info])
  return (
    <div  className='container'>
      <div className="sub-container">
        <div className="image">
            <img src={Info.Poster} alt="" />
        </div>
        <div className="info">
        <h1>{Info && Info.Title}</h1> <br />
        <h1>{Info && Info.Actors}</h1> <br />
        <h1>{Info && Info.Genre}</h1> <br />
        <p>{Info && Info.Plot}</p> <br />
        <h1>Ratings: {Info && Info.imdbRating}</h1> <br />
        <h1>{Info && Info.Type0}</h1> <br />
        <h4>
        <Link to='/' className='link'> <AiOutlineArrowLeft/> Go back</Link>
        </h4>

        </div>
    </div>

    </div>
  )
}

export default MoviePage