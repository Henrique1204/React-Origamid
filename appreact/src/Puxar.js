import React from 'react';
import {GlobalContext} from "./GlobalContext.js";

const Puxar = () => {
    const {puxarDados} = React.useContext(GlobalContext);

    return <button onClick={puxarDados}>Puxar</button>;
};

export default Puxar;
