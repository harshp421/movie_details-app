import React from 'react'
import { UseGlobleContet } from './contex'

const Search = () => {
  const {query,setQuery,isError} =UseGlobleContet();
  return (
    <div>

    <section className='center'>
    <h1>Enter the movie to search</h1>
      <form target='#' onSubmit={e=>e.preventDefault()}>
       <div>
        <input type="text" onChange={e=>setQuery(e.target.value)}  value={query}/>
        </div> 
      </form>
      

      <div className="errpr">

 {isError.show && isError.msg}
      </div>
    </section>

    </div>
  )
}

export default Search