import React from 'react';
import useLocalStorage from "./useLocalStorage.js";
import useFetch from "./useFetch.js";

const App = () => {
    const [produto, setProduto] = useLocalStorage("produto", "");
    const {request, dados, loading, erro} = useFetch();

    function handleClick({target}) {
        setProduto(target.innerText);
    }

    React.useEffect(() => {
        async function fetchDados () {
            const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/');
        }

        fetchDados();
    }, [request]);

    if (erro) return <p>{erro}</p>;
    if (loading) return <p>Carregando...</p>;

    if (dados) {
        return (
            <div>
                <p>Produto: {produto}</p>
                <button onClick={handleClick}>Notebook</button>
                <button onClick={handleClick}>Smartphone</button>
            </div>
        );
    } else {
        return null;
    }
};

export default App;
