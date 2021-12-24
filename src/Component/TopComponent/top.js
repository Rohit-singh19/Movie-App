import React, { useEffect, useState} from "react";
import "../TopComponent/top.css"
import Card from "../CardComponent/Card";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Top(props) {
    const [cards,setCard] = useState([]);

    useEffect(() =>{

        let url = props.url;
        fetch(url)
        .then((response)=> response.json())
        .then((data)=>{
            // console.log(data.results)
            setCard(data.results);
        })
    },[props.url]);

    let value = 5;

    useEffect(() => {
        
        if (window.innerWidth > 650) {
            value = 5
        }
        else{
            value = 3
        }
        
    }, [window.innerWidth])

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: value,
        swipeToSlide: true,responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            }
          ]
      };

    return(
        <>
            <div className ="topmost">
                <h1 key={props.index} className ="swipper-heading">{props.tittle}</h1>
                {
                    props.tittle === 'Top 10 in India Today' ? <Slider {...settings}>
                    {
                        cards.slice(0,10).map((card,index)=>(
                            <Card card= {card} key = {index}/>
                        ))
                    }
                    </Slider> : <Slider {...settings}>
                    {
                        cards.map((card,index)=>(
                            <Card card= {card} key = {index}/>
                        ))
                    }
                    </Slider>
                }

            </div>
        </>
    );
}

export default Top;