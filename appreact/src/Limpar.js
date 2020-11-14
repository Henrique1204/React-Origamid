import React from 'react';
import {GlobalContext} from "./GlobalContext.js";

const Limpar = () => {
    const {limparDados} = React.useContext(GlobalContext);

    return <button style={{margin: "0.5rem"}} onClick={limparDados}>Limpar</button>;
};

export default Limpar;
