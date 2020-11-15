import React from 'react';

const Input = ({id, label, ...props}) => (
    <>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} type="text" {...props} />
    </>
);

export default Input;
