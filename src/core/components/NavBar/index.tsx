import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <div className="main-nav">
        <Link to="/">
            <h1 className="main-nav-title">
                Bootcamp DevSuperior
            </h1>
        </Link>
    </div>
);

export default NavBar;