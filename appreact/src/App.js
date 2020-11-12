import React from 'react';
import Produto from "./Produto.js";

const App = () => {
    const [produto, setProduto] = React.useState(null);

    function handleProduto({target}) {
        setProduto(target.innerText);
    }

    React.useEffect(() => {
        if (produto) {
            window.localStorage.setItem("produto", produto);
        }
    }, [produto]);

    React.useEffect(() => {
        const valor = window.localStorage.getItem("produto");
        if (valor) {
            setProduto(valor);
        }
    }, []);

    return (
        <div>
            <h1>Preferência: {produto}</h1>
            <button style={{margin: "0.5rem"}} onClick={handleProduto}>notebook</button>
            <button style={{margin: "0.5rem"}} onClick={handleProduto}>smartphone</button>
            <Produto produto={produto} />
        </div>
    );
}

export default App;
