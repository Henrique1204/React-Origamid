// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];
  
  const App = () => {
    return (
        <section>
            <ul style={{listStyle: "none", padding: "0px"}}>
                {
                    produtos.filter((p) => Number(p["preco"].replace("R$ ", "")) > 1500)
                    .map(({id, nome, preco, cores}) => (
                        <li key={id}>
                            <h2>{nome}</h2>
                            <p>Preço: {preco}</p>
                            <ul style={{listStyle: "none"}}>
                                {
                                    cores.map(c => (
                                        <li key={c} style={{color: "#FFF", backgroundColor: c, padding: "5px 10px", textTransform: "uppercase"}}>
                                            {c}
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
  };
  

export default App;
