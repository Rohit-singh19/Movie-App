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

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function(index) {
        //   console.log(
        //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        //   );
        }
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