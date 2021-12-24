import React from "react";
import "../CardComponent/card.css"
import { Image_Url} from "../../apilinks";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";


// import { NavLink } from "react-router-dom";

// import { useState } from "react/cjs/react.development";
// import MoviePage from "../MoviePage/MoviePage";
// import { ApiKey } from "../../apilinks";

function Card(props) {

    

    return(
        <>
            <NavLink to = {`/movie-detail/${props.card.id}`} style = {{textDecoration : "none"}} className="movie-card">
                <div >
                        <div className="movie-img">
                            {/* <img src={Image_Url+props.card.poster_path} alt = {props.card.title} /> */}
                            {
                                props.card.poster_path === null || props.card.poster_path === undefined || props.card.poster_path === "" ? 
                                <img src="https://i.pinimg.com/736x/24/24/5a/24245a75a8f50f93d82a7b3f163464f8.jpg" alt = "not found" />:
                                <img src={Image_Url+props.card.poster_path} alt = {props.card.title} />
                            }
                            {/* <img src={Image_Url+props.card.poster_path} alt = {props.card.title} /> */}
                        </div>
                        <div className = "card-bottom">
                            <div className="movie-vote"><span>Ratings : </span> {props.card.vote_average}</div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                </div>
            </NavLink>
        </>
    )
}

export default Card;