import { createContext, useContext, useEffect, useState } from "react";

const API_KEY=`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

///creating context
const AppContext=createContext();

//context provider
const AppProvider =({children})=>{

  const[movie,setMovie]=useState([]);
  const[isLoding,setisLoding]=useState(true);
  const[isError,setError]=useState({show:"false",msg:""});
  const [query,setQuery]=useState("titanic")

const findmovie= async(url)=>{
  setisLoding(true);
     try{
     const res= await fetch(url);
      const data=  await res.json();
      console.log(data);
     
      if(data.Response === 
        "True"){
        setMovie(data.Search)
        setisLoding(false)
        setError({
          show:false,
          msg:"",
        })
        
        //console.log(movie);
        
      }else{
        setError({
          show:true,
          msg:data.Error,
        })

      }
     }catch(e){
      console.log(e);
     }
    
  
    }

  useEffect(() => {
   let timerout = setTimeout(() => {
      findmovie(`${API_KEY}&s=${query}`);  
    }, 500);
 return ()=> clearTimeout(timerout);
  }, [query])
  

 return(
 <AppContext.Provider value={{movie,isError,isLoding,query,setQuery}}>
        {children}
  </AppContext.Provider>)
}


/// consumer //useContext

const UseGlobleContet=()=>{
    return useContext(AppContext);
}
export { AppContext,AppProvider,UseGlobleContet}