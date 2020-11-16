import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Header from './Componentes/Header.js';
import Produtos from "./Componentes/Produtos.js";
import Produto from "./Componentes/Produto.js";
import Contato from "./Componentes/Contato.js";
import Footer from './Componentes/Footer.js';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        
          <div className="conteudo">
            <Routes>
              <Route path="/" element={<Produtos />} />
              <Route path="produto/:id" element={<Produto />} />
              <Route path="contato" element={<Contato />} />
            </Routes>
          </div>
        
        <Footer />
      </BrowserRouter>
    </div>
    );
  };
  
  export default App;
  