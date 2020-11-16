import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Header</h1>

            <nav style={{display: "flex", justifyContent: "space-between", maxWidth: "400px"}}>
                <NavLink to="/" end activeStyle={{color: "tomato"}} >Home</NavLink>
                <NavLink to="sobre" activeStyle={{color: "tomato"}} >Sobre</NavLink>
                <NavLink to="login" activeStyle={{color: "tomato"}} >Login</NavLink>
            </nav>
        </header>
    );
};

export default Header;
