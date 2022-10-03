import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import './style.scss';

const Menu = () => {

        useEffect(() => {

        },[]);
    return  (
        <div className="menu" id='menu'>
            <Link to='/portifolio/'>Home</Link>
            <Link to='/portifolio/project'>Projeto</Link>
            <Link to='/portifolio/weather'>Weather</Link>
            <Link to='/portifolio/ongs'>Ongs</Link>
            <Link to='/portifolio/weather'>Weather</Link>
        </div>
    )
}

export default Menu;