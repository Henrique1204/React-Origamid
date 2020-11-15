import React from 'react';

const Input = ({id, label, valor, type, placeholder, erro, onBlur, onChange}) => {
    const propsInput = {
        id,
        name: id,
        type: type || "text",
        value: valor,
        placeholder,
        onBlur,
        onChange
    };  

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input {...propsInput}  />
            {erro && <small style={{display: "block"}}>{erro}</small>}
        </>
    );
}

export default Input;
