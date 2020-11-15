import React from 'react';
import Input from "./Form/Input.js";

const App = () => {
    const [cep, setCep] = React.useState("");
    const [erro, setErro] = React.useState(null);

    function validarCep(valor) {
        if (valor.length === 0) {
            setErro("Preencha um valor.");
            return false;
        } else if (!/^\d{5}-?\d{3}$/.test(valor)) {
            // ^ - Diz que tem que começar ali.
            // \d{5} - Diz que tem que ter 5 digitos.
            // -? - Diz que o traço é opcional.
            // \d{3} - Diz que tem que ter mais 3 digitos.
            // $ - Diz que tem que acabar ali.
            // .test() - Método de regex, que testa se o valor passado é válido pra expressão definida.
            setErro("Preencha um CEP válido.");
            return false;
        } else {
            setErro(null);
            return true;
        }
    }

    const inputCepProps = {
        label: "CEP",
        id: "cep",
        placeholder: "00000-000",
        value: cep,
        onChange: ({target}) => {
            if (erro) validarCep(target.value);
            setCep(target.value);
        },
        onBlur: ({target}) => {
            validarCep(target.value);
        }
    };

    function handleSubmit(event) {
        event.preventDefault();

        if (validarCep(cep)) {
            console.log("Enviou!");
            setErro(null);
        } else {
            setErro("Erro ao enviar, verifique os campos!");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input {...inputCepProps} />
            {erro && <small>{erro}</small>}
            <button>Enviar</button>
        </form>
    );
};

export default App;
