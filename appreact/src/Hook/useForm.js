import React from 'react';

const tipos = {
    cep: {
        regex: /^\d{5}-?\d{3}$/,
        menssagem: "CEP inválido!"
    },
    email: {
        regex: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        menssagem: "E-mail inválido!"
    },
    senha: {
        regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        menssagem: "Mínimo 8 caractes, 1 letra e 1 numero."
    }
}

const useForm = (tipo) => {
    const [valor, setValor] = React.useState("");
    const [erro, setErro] = React.useState(null);

    function validar(valor) {
        if (tipo === false) return true;

        if (valor.length === 0) {
            setErro("Preencha um valor.");
            return false;
        } else if (tipos[tipo] && !tipos[tipo].regex.test(valor)) {
            setErro(tipos[tipo].menssagem);
            return false;
        } else {
            setErro(null);
            return true;
        }
    }

    return { 
        valor,
        setValor,
        erro,
        validar: () => validar(valor),
        onChange: ({target}) => {
            if (erro) validar(target.value);
            setValor(target.value);
        },
        onBlur: () => {
            validar(valor)
        }
    };
};

export default useForm;
