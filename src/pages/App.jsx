import React from 'react';
import "../css/style.css";
import Banner from "../components/Banner";
import Card from "../components/Card";


function App() {
  return (
    <React.Fragment>
      <Banner txt={<h1>Chez vous, partout et ailleurs</h1>} classNameBanner='banner banner__home' classNameImg='img-home' />
      <Card />
    </React.Fragment>
  );
}

export default App;
