import React from 'react';
import Produto from "./Produto.js";
import {GlobalStorage} from "./GlobalContext.js";

const App = () => {

    return (
        <GlobalStorage>
            <Produto />
        </GlobalStorage>
    );
};

export default App;
