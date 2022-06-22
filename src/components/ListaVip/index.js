import React from 'react';
import './style.scss';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';  

import QuemSomos from './../../assets/images/quem-somos.jpg';

import Banner2 from './../../assets/images/teste/curso.png';
import { Link } from 'react-router-dom';

const ListaVip = (props) => {
    console.log("CAT::" + props.data);
    
    console.log(props);
    return  (
        <div class="form">
            <input autoComplete="false" type="email" id="name" placeholder="Seu Nome"/>
            <input autoComplete="false" type="name" id="password" placeholder="Seu Email"/>
            <input autoComplete="false" type="text" id="cel" placeholder="Seu Telefone"/>  
            <input type="submit" id="submit" value="Entrar" />
        </div>
    )
}

export default ListaVip;