import React from 'react';

const Link = ({caminho, children ,...props}) => (<a href={caminho} {...props}>{children}</a>);

export default Link;
