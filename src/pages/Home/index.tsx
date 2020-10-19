import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="home-container">
        <h1 className="home-title">
            Desafio do Capítulo 3,
            Bootcamp DevSuperior
        </h1>
        <div className="home-content-subtitle">
            <p>
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
            </p>
            <p>
                Favor observar as instruções passadas no capítulo sobre a elaboração
                deste projeto.
            </p>
            <p>
                Este design foi adaptado a partir de Ant Design System for Figma, de
                Mateusz Wierzbicki: <span>antforfigma@gmail.com</span>
            </p>
        </div>
        <Link to="/search">
            <button type="button" className="btn home-button">
                Começar
            </button>
        </Link>


    </div>
);

export default Home;
