import React from 'react';
import Radio from './Form/Radio';

const App = () => {
    const [cor, setCor] = React.useState("");

    return (
        <form>
            <Radio options={["azul", "vermelho"]} value={cor} onChange={({target}) => setCor(target.value)} />
        </form>
    );
};

export default App;
