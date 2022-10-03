import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './style.scss';

const Logo = (props) => {
    return  (
        <div className="logo">
            <Link to="/">
                <img src={ logo } />
                <div className="logo_text">
                    <p>Objetivo de Desenvolvimento Sustentável</p>
                    <p>Segundo ONU</p>
                </div>
            </Link>
        </div>
    )
}

export default Logo;