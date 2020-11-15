import React from 'react';
import Input from "./Form/Input.js";
import useForm from './Hook/useForm.js';

const App = () => {
    const nome = useForm();
    const sobrenome = useForm(false);
    const email = useForm("email");
    const senha = useForm("senha");

    function handleSubmit(event) {
        event.preventDefault();
        const isValido = nome.validar() && email.validar() && senha.validar();

        if (!isValido) {
            console.log("Não enviou!");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input label="Nome:" id="nome" {...nome} />
            <Input label="Sobrenome:" id="sobrenome" {...sobrenome} />
            <Input label="E-mail:" id="email" type="email" {...email} />
            <Input label="Senha:" id="senha" type="password" {...senha} />

            <button>Enviar</button>
        </form>
    );
};

export default App;
