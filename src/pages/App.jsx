import React from 'react';
import "../css/style.css";
import Banner from "../components/Banner";
import Card from "../components/Card";
import imgHome from "../assets/banner-homepage.png";


function App() {
  return (
    <React.Fragment>
      <Banner img={imgHome} txt={<h1>Chez vous, partout et ailleurs</h1>}/>
      <Card />     
    </React.Fragment>
  );
}

export default App;
