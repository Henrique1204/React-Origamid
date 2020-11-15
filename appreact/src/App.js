import React from 'react';
import Checkbox from './Form/Checkbox';

const App = () => {
    const [linguagens, setLinguagens] = React.useState([]);

    // No caso de ser um checkbox individual, você mantém do memso jeito.
    // E para checar se foi selecionado ou não você utiliza a fomra abaixo:
    // if (linguagens > 0) "Enviar"

    return (
        <form>
            <Checkbox options={["JavaScript", "Java", "PHP", "C#"]} valor={linguagens} setValor={setLinguagens}/>
        </form>
    );
};

export default App;
