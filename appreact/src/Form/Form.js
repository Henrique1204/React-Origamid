import React from 'react'
import Button from './Button'
import Input from './Input';

const Form = () => {
    return (
        <form>
            <Input id="email" label="E-mail:" />

            <Input id="senha" label="Senha:" type="password" />

            <Button />
        </form>
    );
}

export default Form;
