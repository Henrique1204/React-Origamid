import React from "react";
import Header from "./Header.js";
import Home from "./Componentes/Home.js";
import Produtos from "./Componentes/Produtos.js";

const App = () => {
    const { pathname } = window.location;

    return (
        <>
            <Header />
            {(pathname === "/") ? <Home /> : <Produtos />}
        </>
    );
}

export default App;
