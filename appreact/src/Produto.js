import React from 'react';
import {GlobalContext} from "./GlobalContext.js";

const Produto = () => {
    const {contar, setContar} = React.useContext(GlobalContext);

    function handleClick() {
        setContar(contar + 1);
    }

    return (
        <>
            <p>{contar}</p>
            <button onClick={handleClick}>Contar</button>
        </>
    );
};

export default Produto;
