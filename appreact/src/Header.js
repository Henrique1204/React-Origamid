import React from "react";

const Titulo = ({cor, children}) => (<h1 style={{color: cor}}>{children}</h1>);

const Header = () => {
    return (
        <header>
            <Titulo cor="red">Header</Titulo>
        </header>
    );
}

export default Header;
