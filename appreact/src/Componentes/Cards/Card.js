import React from 'react';

const Card = ({nome, propriedades}) => {
    return (
        <div style={{border: "1px solid", padding: "0 10px"}}>
            <h2>{nome}</h2>
            <ul>
                {
                    propriedades.map((p, i) => (
                        <li key={i + 1}>{p}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Card;
