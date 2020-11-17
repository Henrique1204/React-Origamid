import React from "react";

class Produtos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contar: 0
        };
    }

    componentDidMount() {
        console.log("Acontece quando o elemento é montado");
    }

    componentDidUpdate() {
        console.log("Acontece toda vez que o componente é renderizado");
    }

    componentWillUnmount() {
        console.log("Quando o componente desaparece da tela");
    }

    handleClick = () => {
        this.setState((state) => ({contar: state.contar + 1}));
    }

    render() {
        return (
            <div>
                <h1>{this.props.titulo}</h1>
                <p>{this.state.contar}</p>
                <button onClick={this.handleClick}>Contar</button>
            </div>
        );
    }
}

export default Produtos;
