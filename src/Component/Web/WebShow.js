import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// importing style..................

import Card from '../CardComponent/Card'

// importing style..................

import "../Web/webshow.css";
import "../../App.css";
// import Search from '../Search/Search'

// importing links for search .....................


// import { Websearch } from '../../apilinks';

const WebShow = (props) => {

    const [query,setQuery] = useState(props.navPageData.query);
    const [searchData,setSearchData] = useState([]);

    let notAvailable = undefined;

    // console.log(props.navPageData)

    useEffect(() => {
        // let url = props.navPageData.url+`${query}`;
        let url = undefined;

        (props.navPageData.title === "New & Popular") ? (url = props.navPageData.url) : (url = props.navPageData.url+`${query}`)

        // console.log(url)
        fetch(url)
        .then((response)=> response.json())
        .then((data)=>{
            console.log(data.results)
            if(data.results.length === 0 ){
                notAvailable = true;
                console.log("not found")
            }else{
                setSearchData(data.results);
            }
        })
        // console.log(query)
    }, [query , props.navPageData.url, props.navPageData.title]);

    return (
        <>
            <header className = "nav-page-header">
                <div className = "page-heading"> {props.navPageData.title} </div>
                <div className = "searchbox" >
                    <input type ="search" onChange = {(e) => (e.target.value.trim() === "") ? setQuery("all") : setQuery(e.target.value)} placeholder = "Search..."/>
                    <div className = "search"> <FontAwesomeIcon icon={faSearch} /> </div>
                </div>
            </header>
            <section className = "card-container">
                {
                    // searchData.map((movie, index) =>(
                    //     <Card card = {movie} key = {index} />
                    // ))
                    (notAvailable) ? <h1>Not found</h1>: (searchData.map((movie, index) =>(
                        <Card card = {movie} key = {index} />
                    )))
                    
                }
            </section>
        </>
    )
}

export default WebShow;
