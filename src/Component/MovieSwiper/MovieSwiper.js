import React from "react";

import Top from "../TopComponent/top";

import "../MovieSwiper/movieswiper.css";
import { movieFetchUrl } from "../../apilinks";

function MovieSwiper() {

    // const [url , setUrl] = useState([]);


    return(
        <>
            {
                movieFetchUrl.map((movieArray,movieArrayindex)=>(
                    <Top url = {movieArray.url}  tittle = {movieArray.swiperTittle} key = {movieArrayindex} />
                ))
            }
        </>
    );
}

export default MovieSwiper;