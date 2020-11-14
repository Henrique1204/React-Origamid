import React from 'react';
import Input from './Form/Input';

const App = () => {
    const [nome, setNome] = React.useState("");
    const [email, setEmail] = React.useState("");

    return (
        <form>
            <Input id="nome" label="Nome" value={nome} onChange={({target}) => setNome(target.value)} />
            <Input id="email" label="E-mail" value={email} onChange={({target}) => setEmail(target.value)} required type="email" />
        </form>
    );
};

export default App;
