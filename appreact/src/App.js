// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
};

const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
        { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
};

const App = () => {
    const dados = mario;

    const situacao = (
        <span style={{ color: (dados.ativa) ? "green" : "red" }}>
            {(dados.ativa) ? "Ativa" : "Inativa"}
        </span>
    );

    const totalGasto = dados["compras"]
        .map(c => Number(c["preco"].replace("R$ ", "")) )
        .reduce((total, atual) => total + atual, 0);

    return (
        <div>
            <ul style={{listStyle: "none", padding: "0px", fontWeight: "600"}}>
                <li>Nome: {dados.cliente}</li>
                <li>Idade: {dados.idade}</li>
                <li>Situação: {situacao}</li>
                <li>Total gasto: R$ {totalGasto}</li>
                {totalGasto >= 10000 && <li>Você está gastando muito.</li>}
            </ul>
        </div>
    );
};

export default App;
