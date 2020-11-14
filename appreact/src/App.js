import React from 'react';
import Form from './Form';

const campos = [
    {
        id: "nome",
        label: "Nome:",
        type: "text",
    },
    {
        id: "email",
        label: "E-mail:",
        type: "email",
    },
    {
        id: "senha",
        label: "Senha:",
        type: "password",
    },
    {
        id: "cep",
        label: "CEP:",
        type: "text",
    },
    {
        id: "rua",
        label: "Rua:",
        type: "text",
    },
    {
        id: "numero",
        label: "Numero:",
        type: "text",
    },
    {
        id: "bairro",
        label: "Bairro:",
        type: "text",
    },
    {
        id: "cidade",
        label: "Cidade:",
        type: "text",
    },
    {
        id: "estado",
        label: "Estado:",
        type: "text",
    }
];

const App = () => {
    return <Form campos={campos} />;
};

export default App;
