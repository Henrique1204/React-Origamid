import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {
    const [dados, setDados] = React.useState(null);

    const puxarDados = React.useCallback(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto/')
        .then((res) => res.json())
        .then((json) => setDados(json))
        .catch((e) => console.log(e));
    }, []);

    const limparDados = React.useCallback(() => {
        setDados(null);
    }, []);

    React.useEffect(() => {
        puxarDados();
    }, [puxarDados]);

    return <GlobalContext.Provider value={{dados, limparDados, puxarDados}}>{children}</GlobalContext.Provider>;
};
