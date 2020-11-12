import React from 'react';

const App = () => {
    const [comentarios, setComentarios] = React.useState([]);
    const [input, setInput] = React.useState("");
    const inputElement = React.useRef();

    function handleClick() {
        setComentarios([...comentarios, input]);
        setInput("");
        inputElement.current.focus();
    }

    return (
        <div>
            <ul>
                {comentarios.map((c, i) => (
                    <li key={i + 1}>{c}</li>
                ))}
            </ul>

            <input type="text" value={input} onChange={({target}) => {setInput(target.value)}} ref={inputElement}/>
            <button onClick={handleClick}>Enviar</button>
        </div>
    );
}

export default App;
