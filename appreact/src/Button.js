import React from 'react';
import PropTypes from "prop-types";

const Button = (props) => {
    return <button style={{width: `${props.width}px`, height: `${props.width / 3}px`}}>{props.children}</button>;
}

// Define um valor padrão pra propriedades.
Button.defaultProps = {
    width: 300
}

// Define o tipo das propriedades.
Button.propTypes = {
    width: PropTypes.number,
};

console.log(PropTypes.number);

export default Button;
