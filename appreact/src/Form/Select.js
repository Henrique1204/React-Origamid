import React from 'react';

const Select = ({options, ...props}) => (
    <select {...props}>
        <option disabled value="">Selecione a opção...</option>
        {
            options.map((op) => (
                <option key={op} value={op}>{op}</option>
            ))
        }
    </select>
);

export default Select;
