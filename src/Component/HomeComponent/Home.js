import React from "react";
import "./home.css";
import Header from "../HeaderComponent/Header";
import MovieSwiper from "../MovieSwiper/MovieSwiper";

const Home = () =>{
    return (
        <>
            <div className = "container">
                <Header/>
                <MovieSwiper/>
            </div>        
        </>
    )
}

export default Home;