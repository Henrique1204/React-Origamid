import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Produto = () => {
    // Pega o parâmetro passado na rota.
    const parametro = useParams();
    // Pega informações da url.
    const localizacao = useLocation();

    return (
        <div>
            <h1>Produto</h1>
        </div>
    );
};

export default Produto;
