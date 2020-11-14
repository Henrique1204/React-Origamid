import React from 'react';
import {GlobalContext} from "./GlobalContext.js";

const Produto = () => {
    const {dados} = React.useContext(GlobalContext);

    return dados === null ? null : (
        <ul>
            {dados.map((d) => (
                <li key={d.id}>{d.nome}</li>
            ))}
        </ul>
    );
};

export default Produto;
