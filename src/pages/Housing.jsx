import "../css/style.css";
import data from "../data.json";
import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import RedStar from "../assets/red-star.png";
import GreyStar from "../assets/grey-star.png";



function ratingStars(rating) {
  let i = 0;
  const starArray = [];

  for (i = 1; i <= 5; i++) {
    if (i <= rating) {
      starArray.push(RedStar)
    }
    else {
      starArray.push(GreyStar)

    }
  }
  return starArray
}



function Housing() {

  const params = useParams()
  const id = params.id
  const filteredHouse = data.filter(house => house.id === id)
  const navigate = useNavigate()

  useEffect(() => {
    if (filteredHouse.length === 0){
      navigate('/*')
    }
  })
  
  return (
    <main className="housing">
      {filteredHouse.map(({ id, title, description, equipments, host, location, pictures, rating, tags }) => (
        <div key={id}>
          <section className="Slideshow">
            <Slideshow pictures={pictures}></Slideshow>
          </section>
          <section className="info">
            <div className="container-info">
              <div className="houseTitle">
                <h1>{title}</h1>
                <h2>{location}</h2>
                <ul className="container-tags">
                  {tags.map((tag, index) => (
                    <li key={`${tag}-${index}`} className="tag">{tag}</li>
                  ))}
                </ul>
              </div>
              <div className="host-rating">
                <div className="host">
                  <p>{host.name}</p>
                  <img src={host.picture} alt="host" className="circle"></img>
                </div>
                <div className="rating">
                  {ratingStars(rating).map((star, index) => (
                    <img key={`${star}-${index}`} src={star} alt="star" className="stars"></img>
                  ))}
                </div>
              </div>
            </div>

            <div className="collapseContainer">
              <Collapse  classNameWrapper='wrapper-housing' classNameArticle='article-housing' classNameTitle='title-housing' classNameText='text-housing' title='description' content={description} />
              <Collapse  classNameWrapper='wrapper-housing' classNameArticle='article-housing' classNameTitle='title-housing' classNameText='text-housing' title='équipements' content={equipments.map((equipement, index) => (
                <li key={`${equipement}-${index}`} className="listEquip">{equipement}</li>
              ))} />
            </div>
          </section>

        </div>
      ))}
    </main>
  );

}
export default Housing;

