import React, {useEffect, useState} from 'react'
import Poster from '../poster/Poster'
import {AiOutlineSearch} from 'react-icons/ai'
import './Movie.scss'

const Movie = () => {

  const [movie ,setMovie]= useState([])
  const [searchValue , setSearchValue] =useState('')
 

  const getMovieRes = async (searchValue)=>{
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=a0114002`;

    const movieRes = await fetch(url)
    const movieResJSON = await movieRes.json();

    if(movieResJSON.Search){
      setMovie(movieResJSON.Search)
    }
  }

  const Onchange =(e)=>{
    setSearchValue (e.target.value)
  }

  useEffect(()=>{
    getMovieRes(searchValue)
  }, [searchValue])

  return (
    <div className='main-container'>
        <div className="sub-container">
            <div className="search">
            <input type="text" placeholder='Search...' onChange={Onchange}/>
            <button> <AiOutlineSearch/></button>
            </div>
            <div className="poster">
            <Poster movies={movie}/>
            </div>
        </div>
    </div>
  )
}

export default Movie