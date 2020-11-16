import React from "react";
import { NavLink } from "react-router-dom";
import estilos from "./Header.module.css";

const Header = () => {
    return (
        <nav className={estilos.header}>
            <ul>
                <li>
                    <NavLink to="/" activeClassName={estilos.ativo} className={estilos.link} end >Produto</NavLink>
                </li>
                <li>
                    <NavLink to="/contato" activeClassName={estilos.ativo} className={estilos.link} >Contato</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
