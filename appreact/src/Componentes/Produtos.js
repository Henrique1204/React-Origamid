import React from 'react';
import Titulo from './Titulo';
import ListaProdutos from './Cards/ListaProdutos';

const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produtos = () => {
    return (
        <section>
            <Titulo>Produtos</Titulo>

            <ListaProdutos produtos={produtos} />
        </section>
    );
}

export default Produtos;
