import React from 'react';
import Campo from './Campo.js';

const Form = ({campos}) => {
    // Cria automaticamente um objeto com os valores iniciais dos campos do formulário.
    const [form, setForm] = React.useState(campos.reduce((acc, campo) => {
        return {
            ...acc,
            [campo.id]: ""
        };
    }, {}));
    const [resposta, setResposta] = React.useState(null);

    function onSubmit(event) {
        event.preventDefault();

        fetch('https://ranekapi.origamid.dev/json/api/usuario/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        }).then((res) => {
            setResposta(res);
        });
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
            {
                campos.map(({id, label, type}) => (
                    <div key={id}>
                        <Campo id={id} label={label} type={type} onChange={onChange} />
                    </div>
                ))
            }

            {resposta && resposta.ok && <p>Formulário enviado com sucesso!</p>}
            <button>Enviar</button>
        </form>
    );
}

export default Form;
