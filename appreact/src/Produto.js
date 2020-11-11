import React from 'react'

const Produto = ({dados}) => {
    const {nome, preco, fotos} = dados;
    const {src, titulo} = fotos[0];

    return (
        <div>
            <h1>{nome}</h1>
            <p>R$ {preco}</p>
            <img src={src} alt={titulo}/>
        </div>
    );
}

export default Produto
