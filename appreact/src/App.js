import React from 'react';

const App = () => {
    const [produto, setProduto] = React.useState("");
    const [cor, setCor] = React.useState("");

    return (
        <form>
            <div>
                <h2>Produto</h2>
                <p>Selecionado: {produto}</p>
                <label>
                    <input type="radio" name="produto" value="notebook" onChange={({target}) => {setProduto(target.value)}}/>
                    Notebook
                </label>

                <label>
                    <input type="radio" name="produto" value="smartphone" onChange={({target}) => {setProduto(target.value)}}/>
                    Smartphone
                </label>
            </div>

            <div>
                <h2>Cor</h2>
                <p>Selecionado: {cor}</p>
                <label>
                    <input type="radio" name="cor" value="azul" onChange={({target}) => {setCor(target.value)}}/>
                    Azul
                </label>

                <label>
                    <input type="radio" name="cor" value="vermelhor" onChange={({target}) => {setCor(target.value)}}/>
                    Vermelhor
                </label>
            </div>
        </form>
    );
};

export default App;
