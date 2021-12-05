import React, { useEffect, useState } from 'react'
import "../MoviePage/moviepage.css";

//importing ImageUrl and apiKey from Apilinks

import {ApiKey, Image_Url} from "../../apilinks";
import { useParams } from 'react-router';

function MoviePage() {

    const [movie, setMovie] = useState([])

    const {id} = useParams();

    
    useEffect(() => {
        
        let url = `https://api.themoviedb.org/3/movie/${id}?${ApiKey}&language=en-US`;
        fetch(url)
        .then((response)=> response.json())
        .then((data)=>{
            console.log(data)
            setMovie(data);
            // console.log(data.production_companies[0].logo_path)
        })
    },[id]);
    
    return (
        <section className = "movieDetailContainer">

            <div className= "poster">
                {(movie.backdrop_path === null) ? (
                    <img src= "https://media.istockphoto.com/vectors/error-404-page-not-found-space-exploration-modern-background-cute-vector-id1221736099?s=612x612" />
                ) : (<img src= {Image_Url+movie.backdrop_path} />)}

                

                
            </div>
            
            <div className = "movieDetail">
                <h1 className = "movieName">
                    {movie.title}
                </h1>
                <h4 className= "tagline">
                    {
                        movie.tagline
                    }
                </h4>
                
                <div className = "moveiContainer">
                    <div>
                        <p className="overview">
                            <h2> Overview</h2>
                            {
                                movie.overview
                            }
                        </p>
                        <p className = "pop">
                            <span>Release Date : </span>
                            {
                                movie.release_date
                            }
                        </p>

                        <div className = "pop">
                            <span>Popularity : </span>
                            {
                                movie.popularity
                            }
                        </div>
                        
                        <div className = "btn" >Watch </div>

                        <div className = "companies">
                            {
                                // (movie.production_companies.length === 0) ? (
                                //     <h1>{}</h1>
                                // ) : ()

                                // movie.production_companies.map((companies,index)=>(
                                //     (companies.logo_path === null || companies.logo_path ==="") ? (
                                //         <img src = {Image_Url + companies.logo_path} key = {index}/>
                                //     ): (
                                //         companies.name
                                //     )
                                // ))
                            }
                        </div>
                    </div>
                    <div>
                        <img src= {Image_Url+movie.poster_path} />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default MoviePage
