import React from 'react';

const Titulo = ({children, ...props}) => (<h1 style={{color: "green"}} {...props}>{children}</h1>);

export default Titulo;
