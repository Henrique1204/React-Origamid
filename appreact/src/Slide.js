import React from 'react';
import estilos from "./Slide.module.css";

const Slide = ({slides}) => {
    const [ativo, setAtivo] = React.useState(0);
    const [posicao, setPosicao] = React.useState(0);
    const conteudoRef = React.useRef();

    React.useEffect(() => {
        const {width} = conteudoRef.current.getBoundingClientRect();
        setPosicao(-(width * ativo));
    }, [ativo]);

    function slidePrev() {
        setAtivo(ativo - 1);
    }

    function slideNext() {
        setAtivo(ativo + 1);
    }

    return (
        <section className={estilos.container}>
            <div ref={conteudoRef} className={estilos.conteudo} style={{transform: `translateX(${posicao}px)`}}>
                {slides.map(({id, texto}) => (
                    <div key={id} className={estilos.item}>{texto}</div>
                ))}
            </div>
            <nav className={estilos.nav}>
                <button onClick={slidePrev} disabled={ativo <= 0} >Anterior</button>
                <button onClick={slideNext} disabled={ativo >= (slides.length - 1)} >Próximo</button>
            </nav>
        </section>
    );
};

export default Slide;
