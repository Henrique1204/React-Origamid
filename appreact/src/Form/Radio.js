import React from 'react';

const Radio = ({options, value, ...props}) => (
    <>
        {
            options.map((op, i) => (
                <label key={op + i} style={{textTransform: "capitalize"}}>
                    <input type="radio" value={op} checked={value === op} {...props}/>
                    {op}
                </label>
            ))
        }
    </>
);

export default Radio;
