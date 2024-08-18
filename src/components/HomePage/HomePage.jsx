import React from "react";
import PropTypes from "prop-types";
import "./HomePage.css";
import Navbar from "../Navbar/Navbar";
import MovieCard from "../MovieCard/MovieCard";
import PageTitle from "../PageTitle/PageTitle"
import { useEffect,useState } from "react";

const HomePage = () =>{
  const [movies,setMovies] = useState([]);
  const [moviess, setMoviess] = useState([]);
  useEffect(()=>{
    const url = "https://api.themoviedb.org/3/discover/movie"
    const options = {
          method: 'GET',
          headers: {
          accept: 'application/json',
          Authorization: import.meta.env.VITE_API_KEY
        }
    };
    ///////////////////////
    fetch(url,options).then(res=>res.json()).then(res=> setMovies(res.results)).then(err=> console.error(err))
    
  },[]);
 
 
  return(
  <div className="HomePage">
    <PageTitle>Home Page</PageTitle>
    <div className="container movies-grid">
      {
        movies.map((movie,index)=>(
          <MovieCard key={index} movie = {movie} />
        ))
      }
    </div>
  </div>
)};


export default HomePage;
