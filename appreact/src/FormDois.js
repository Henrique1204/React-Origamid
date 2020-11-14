import React from 'react';

const FormDois = () => {
    // O estado é um objeto com as chaves correspondentes ao campos do form.
    const [form, setForm] = React.useState({
        nome: "",
        email: ""
    });

    function onSubmit(event) {
        event.preventDefault();
    }

    // Função para atualizar os estados do form.
    function onChange({target}) {
        // Precisa desestruturar o event pra pegar o target.
        // Precisa desestruturar o target pra pegar o valor de "id" e o "value" do campo.
        const {id, value} = target;

        // Chama a função que altera o estado do form.
        // Deve passar um objeto, com o rest para passar todos os valores do objeto que tá no estado...
        // Para não apagar os outros valores do objeto.
        // Depois deve usar o "id" dentro do [] para acessar a propriedade do objeto correspondente ao campo...
        // E passar o value como valor da propriedade.
        setForm({...form, [id]: value});
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="nome">Nome: {form.nome}</label>
            <input id="nome" type="text" value={form.nome} onChange={onChange}/>
    
            <label htmlFor="email">E-mail: {form.email}</label>
            <input id="email" type="email" value={form.email} onChange={onChange}/>

            <button>Enviar</button>
        </form>
    );
}

export default FormDois;
