import React from 'react';
import {GlobalStorage} from "./GlobalContext.js";
import Produto from "./Produto.js";
import Limpar from "./Limpar.js";
import Puxar from "./Puxar.js";

const App = () => {
    return (
        <GlobalStorage>
            <Produto />
            <Limpar />
            <Puxar />
        </GlobalStorage>
    );
};

export default App;
