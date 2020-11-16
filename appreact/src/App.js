import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";
import Sobre from "./Sobre.js";
import Footer from "./Footer.js";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
  
      <Footer />
    </BrowserRouter>
  );
};

export default App;
