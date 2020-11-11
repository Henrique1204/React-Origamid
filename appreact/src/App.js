import React from "react";
import Produto from "./Produto.js";

const App = () => {
    const [dados, setDados] = React.useState(null);
    const [carregando, setCarregando] = React.useState(null);

    async function handleClick({target}) {
        setCarregando(true);

        const url = `https://ranekapi.origamid.dev/json/api/produto/${target.innerText.toLowerCase()}/`;
        const req = await fetch(url);
        const dados = await req.json();

        setDados(dados);
        setCarregando(false);
    }

    return (
        <div>
            <button style={{margin: "0.5rem"}} onClick={handleClick}>Notebook</button>
            <button style={{margin: "0.5rem"}} onClick={handleClick}>Smartphone</button>
            <button style={{margin: "0.5rem"}} onClick={handleClick}>Tablet</button>
            {carregando && <p>Carregando....</p>}
            {!carregando && dados && <Produto dados={dados} />}
        </div>
    );
}

export default App;
