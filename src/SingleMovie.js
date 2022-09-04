import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const API_KEY=`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;



const SingleMovie = () => {
  const[movie,setMovie]=useState("");
  const[isLoding,setisLoding]=useState(true);
  const {id} =useParams();
  
  const findmovie= async(url)=>{
     setisLoding(true);
     try{
     const res= await fetch(url);
      const data=  await res.json();
      console.log(data);
     
      if(data.Response === 
        "True"){
        setMovie(data)
        setisLoding(false)
        
        //console.log(movie);
        
      }else{
        
  
      }
     }catch(e){
      console.log(e);
     }
    
  
    }
  
  useEffect(() => {
   let timerout = setTimeout(() => {
      findmovie(`${API_KEY}&i=${id}`);  
    }, 500);
  return ()=> clearTimeout(timerout);
  }, [id])
  
 
  if(isLoding){
    return(
      <div className="movie-section">
        <div className="loading">
          loading...
        </div>
      </div>
    )
  }

  const movieplot=movie.Plot.substring(0,10000)
  return (
   
   <>
   <div className='containersingle'>
    <div className="moviebox">
    <div className="left">
     <img src={movie.Poster} alt="" srcset="" />
    </div>
    <div className="right">
       <p>{movie.Title}</p>
       <p> <span>Country :</span> {movie.Country}</p>
       <p> <span>Language :</span> {movie.Language}</p>
       <p> <span>summery:</span> {movieplot}</p>
       <p> <span>Released data : </span> {movie.Released}</p>
       <p> <span>Colletion: </span> {movie.BoxOffice}</p>
       <NavLink to='/' className="link"> Go back</NavLink>
    </div>
    </div>
   </div>
   </>
  )
}

export default SingleMovie