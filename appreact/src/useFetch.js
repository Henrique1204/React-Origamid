import React from "react";

const useFetch = () => {
    const [dados, setDados] = React.useState(null);
    const [erro, setErro] = React.useState(null);
    const [loading, setLoading] = React.useState(null);

    const request = React.useCallback(async (url, opcoes) => {
        let response;
        let json;

        try {
            setErro(null);
            setLoading(true);
    
            response = await fetch(url, opcoes);
            json = await response.json();
        } catch (erro) {
            json = null;
            setErro("Erro");
        } finally {
            setDados(json);
            setLoading(false);
            return {response, json};
        }
    }, []);

    return {dados, erro, loading, request};
};

export default useFetch;
