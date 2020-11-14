import React from 'react';

const FormUm = () => {
    const [nome, setNome] = React.useState(null);
    const [email, setEmail] = React.useState(null);

    function onSubmit(e) {
        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="nome">Nome: {nome}</label>
            <input type="text" value={nome} onChange={({target}) => {setNome(target.value)}}/>
    
            <label htmlFor="email">E-mail: {email}</label>
            <input type="email" value={email} onChange={({target}) => {setEmail(target.value)}}/>

            <button>Enviar</button>
        </form>
    );
}

export default FormUm;
