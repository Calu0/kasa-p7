import React from 'react';
import "../css/style.css";
import Banner from "../components/Banner";
import Card from "../components/Card";


function App() {
  return (
    <React.Fragment>
      <Banner txt={<h1>Chez vous, partout et ailleurs</h1>} className='imgHome'/>
      <Card />
    </React.Fragment>
  );
}

export default App;
