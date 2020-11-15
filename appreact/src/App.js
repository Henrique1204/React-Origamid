import React from 'react';
import Slide from './Slide';

const App = () => {
  const slides = [
    {
      id: "slide1",
      texto: "Texto 1"
    },
    {
      id: "slide2",
      texto: "Texto 2"
    },
    {
      id: "slide3",
      texto: "Texto 3"
    },
    {
      id: "slide4",
      texto: "Texto 4"
    }
  ]

  return (
    <div>
      <Slide slides={slides} />
    </div>    
  );
};

export default App;
