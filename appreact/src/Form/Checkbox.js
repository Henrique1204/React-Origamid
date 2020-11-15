import React from 'react';

const Checkbox = ({options, valor, setValor,...props}) => {
    function handleChange({target}) {
        if (target.checked) {
            setValor([...valor, target.value]);
        } else {
            setValor(valor.filter((v) => v !== target.value));
        }
    }

    return (
        <>
            {
                options.map((op, i) => (
                    <label key={op + i}>
                        <input type="checkbox" value={op} onChange={handleChange} checked={valor.includes(op)} />
                        {op}
                    </label>
                ))
            }   
        </>
    );
};

export default Checkbox;
