import React, {useState, useEffect} from "react";
import "../HeaderComponent/header.css";
import { Image_Url, Highest_Url } from "../../apilinks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation, faPlay } from '@fortawesome/free-solid-svg-icons';

const Header= () =>{
    const [movie,setMovie] = useState(0);
    const [adult,setAdult] = useState(null);

    useEffect(() => {
        let i = Math.floor((Math.random() * 20) + 1);
        let url = Highest_Url;
        fetch(url)
        .then((response)=> response.json())
        .then((data)=>{
            const movies = data.results;
            setMovie(movies[i]);

            if (!movie.adult) {
                setAdult("16 +");
            }
            else{
                setAdult(null);
            }
        })
      },[movie.adult]);


    return(
        <>
            <header style= {{backgroundImage:`url(${Image_Url}${movie.backdrop_path}`}} >
                <div className = "header_detail">
                    <div className = "tittle-name"> {movie.title} </div>
                    <div className = "movie-description">{movie.overview}
                    </div>
                    <div className = "btns">
                        <div className = "play-btn header-btn"><FontAwesomeIcon icon={faPlay} /> <span>Play</span> </div>
                        <div className = "more-btn header-btn"><FontAwesomeIcon icon={faExclamation} /> <span>More Info</span> </div>
                    </div>
                </div>

                <div className= "adult-detail">
                    {
                        adult
                    }
                </div>
            </header>
        </>
    )
}

export default Header;