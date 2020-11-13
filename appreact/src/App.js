import React from 'react';

const App = () => {
    const [contar, setContar] = React.useState(0);

    // Evita que uma função seja declarada toda vez que for renderizado o componente.
    const handleClick = React.useCallback(() => {
        // o primeiro parâmetro do callback que o setState recebe é o valor anterior.
        // É utilizado um callback em vez de passar o valor direto pra evitar de criar dependência.
        // Pq com a dependência ele declararia a função a cada mudança de estado e seria o mesmo de não usar o useCallBack.
        setContar((valorAnterios) => valorAnterios + 1);
    }, []);

    return <button onClick={handleClick}>{contar}</button>
}

export default App;
