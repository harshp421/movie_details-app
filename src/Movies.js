import React from 'react'
import { NavLink } from 'react-router-dom';
import { UseGlobleContet } from './contex';

const Movies = () => {
  const {movie,isLoding}=UseGlobleContet();
  if(isLoding){
    return(
      <div className="movie-section">
        <div className="loading">
          loading...
        </div>
      </div>
    )
  }
  return (<>
  <section className='movie-page'>
    <div className="container">
    {
      //console.log(movie)
      movie.map((curMovie)=>{
        const{Title,Poster,imdbID}=curMovie;
        const movieName=Title.substring(0,15);
        return (
          <NavLink to={`movie/${imdbID}`}>
            
            <div className="card" key={imdbID}>
              <div className="card-info">
                <h2>{movieName.length >=15? `${movieName}...`:movieName}</h2>
               <div className="img"><img src={Poster} alt={imdbID} srcset="" /></div> 
              </div>
            </div>
          
          </NavLink>
        )
      })
     }
     </div>
     </section>
    </>
  )
}

export default Movies