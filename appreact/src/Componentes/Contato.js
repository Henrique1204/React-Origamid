import React from "react";
import estilos from "./Contato.module.css";
import foto from "../img/contato.jpg";
import Head from "./Head";

const Contato = () => {
    return (
        <>
            <Head titulo="Contato" descricao="Entre em contato com nosso suporte e tire dúvidas." />

            <section className={`${estilos.contato} animarEsquerda`}>
                <img src={foto} alt="Máquina de escrever"/>
                <div>
                    <h1>Entre em contato.</h1>
                    <ul className={estilos.dados}>
                        <li>pauloh16.pdr@gmail.com</li>
                        <li>99999-9999</li>
                        <li>Rua Ali perto, 999</li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Contato;
