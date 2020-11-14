import React from 'react';
import useLocalStorage from "./useLocalStorage.js";

const App = () => {
    const [produto, setProduto] = useLocalStorage("produto", "");

    function handleClick({target}) {
        setProduto(target.innerText);
    }

    return (
        <div>
            <p>Produto: {produto}</p>
            <button onClick={handleClick}>Notebook</button>
            <button onClick={handleClick}>Smartphone</button>
        </div>
    );
};

export default App;
