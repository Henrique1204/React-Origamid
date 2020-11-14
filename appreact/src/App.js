import React from 'react';

const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

const App = () => {
    const [cores, setCores] = React.useState([]);

    function handleChange({target}) {
        if (target.checked) {
            setCores([...cores, target.value]);
        } else {
            setCores(cores.filter((cor) => cor !== target.value));
        }
    }

    function checkCor(cor) {
        return cores.includes(cor);
    }

    return (
        <form>
            {
                coresArray.map((c) => (
                <label key={c} style={{textTransform: "capitalize"}}>
                    <input type="checkbox" value={c} checked={checkCor(c)} onChange={handleChange}/>
                    {c}
                </label>
                ))
            }
        </form>
    );
};

export default App;
