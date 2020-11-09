import React from 'react';
import Link from './Link';

const Navegacao = () => {
    return (
        <nav>
            <ul>
                <li><Link caminho="/">Home</Link></li>
                <li><Link caminho="/produtos">Produtos</Link></li>
            </ul>
        </nav>
    );
}

export default Navegacao;
