import React from 'react';

const Radio = ({pergunta, options, id, value, onChange, ativo}) => {
    if (!ativo) return null;

    return (
        <fieldset style={{padding: "2rem", marginBottom: "1rem", border: "2px solid #ddd"}}>
            <legend style={{fontWeight: "bold"}}>{pergunta}</legend>
            {
                options.map((op) => (
                    <label key={op} style={{marginBottom: "1rem", fontFamily: "monospace"}}>
                        <input id={id} type="radio" value={op} onChange={onChange} checked={value === op} />
                        {op}
                    </label>
                ))
            }
        </fieldset>
    );
};

export default Radio;
