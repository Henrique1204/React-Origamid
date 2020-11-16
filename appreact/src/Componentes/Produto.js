import React from "react";
import { useParams } from "react-router-dom";
import estilos from "./Produto.module.css";
import Head from "./Head.js";

const Produto = () => {
    const [produto, setProduto] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [erro, setErro] = React.useState(false);
    const {id} = useParams();

    React.useEffect(() => {
        async function fetchProduto(url) {
            try {
                setLoading(true);

                const res = await fetch(url);
                const json = await res.json();
    
                setProduto(json);
            } catch(e) {
                setErro("Um erro ocorreu.");
            } finally {
                setLoading(false);
            }
        }

        fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
    }, [id]);

    if (loading) return <div className="loading" ></div>;
    if (erro) return <p>{erro}</p>;
    if (produto === null) return null;

    return (
        <>
            <Head titulo={produto.nome} descricao={produto.descricao} />

            <section className={`${estilos.produto} animarEsquerda`} >
                <div>
                    {
                        produto.fotos.map((f) => (
                            <img key={f.src} src={f.src} alt={f.titulo} />
                        ))
                    }
                </div>

                <div>
                    <h1>{produto.nome}</h1>
                    <span className={estilos.preco} >R$ {produto.preco}</span>
                    <p className={estilos.descricao} >{produto.descricao}</p>
                </div>
            </section>
        </>
    );  
};

export default Produto;
