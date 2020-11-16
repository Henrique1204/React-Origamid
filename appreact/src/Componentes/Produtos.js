import React from "react";
import { Link } from "react-router-dom";
import estilos from "./Produtos.module.css";
import Head from "./Head.js";

const Produtos = () => {
    const [produtos, setProdutos] = React.useState(null);

    React.useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto/')
        .then((r) => r.json())
        .then((json) => setProdutos(json));
    }, []);

    if (produtos === null) return null;

    return (
        <>
            <Head decricao="Conheça nossos produtos e escolha o ideal." />

            <section className={`${estilos.produtos} animarEsquerda`}>
                {
                    produtos.map(({id, nome, fotos}) => (
                        <Link to={`produto/${id}`} key={id}>
                            <h2 className={estilos.nome}>{nome}</h2>
                            <img src={fotos[0].src} alt={fotos[0].titulo}/>
                        </Link>
                    ))
                }
            </section>
        </>
    );
};

export default Produtos;
