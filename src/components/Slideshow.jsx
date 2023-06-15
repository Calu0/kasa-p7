import '../css/style.css';
import data from "../data.json";
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, UseEffect } from "react";
import arrow from "../assets/direction-arrow.png";
import styled from "styled-components";



function Slideshow(props){

    const { pictures } = props;
    const [currentIndex, setCurrentIndex] = useState(0)

    return(
        <div className='slideshow-container'>
            {pictures.map((picture, index) => 
                <img src={picture} alt='picture' className='picture' key={`${picture}-${index}`}></img>
            )}

        </div>       
    )
}

export default Slideshow;