import React from 'react';

const useLocalStorage = (key, inicial) => {
    const [state, setState] = React.useState(() => {
        const local = window.localStorage.getItem(key);
        // Pra verificar se existe conteúdo no localStorage.
        // Caso exista ele retorna o valor já armazenado.
        // Se não retorna o valor passado como parâmetro.
        return (local) ? local : inicial;
    });

    React.useEffect(() => {
        window.localStorage.setItem(key, state);
    }, [state, key]);

    return [state, setState];
};

export default useLocalStorage;
