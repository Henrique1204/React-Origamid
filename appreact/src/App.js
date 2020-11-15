import React from 'react';
import Select from './Form/Select';

const App = () => {
    const [select, setSelect] = React.useState("Tablet");

    return (
        <form>
            <Select options={["Smartphone", "Tablet"]} value={select} onChange={({target}) => setSelect(target.value)}/>
        </form>
    );
};

export default App;
