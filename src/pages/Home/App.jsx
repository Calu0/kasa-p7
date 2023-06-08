import React from 'react';
import "../../css/style.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import imgHome from "../../assets/banner-homepage.png";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Banner img={imgHome} txt={<h1>Chez vous, partout et ailleurs</h1>}/>
      <Card />
      <Footer />
    </React.Fragment>
  );
}

export default App;
