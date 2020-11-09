import React from 'react';
import Card from "./Card";

const ListaProdutos = ({produtos}) => {
    return (
        <ul style={{listStyle: "none", padding: "0px"}}>
            {
                produtos.map(({nome, propriedades}, i) => (
                    <li key={i + 1}>
                        <Card nome={nome} propriedades={propriedades} />
                    </li>
                ))
            }
        </ul>
    );
}

export default ListaProdutos;
