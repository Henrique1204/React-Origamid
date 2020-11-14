import React from 'react';

const Campo = ({id, label, ...props}) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text" {...props}/>
        </>
    );
};

export default Campo;
