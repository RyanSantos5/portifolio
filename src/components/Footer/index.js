import React, { useEffect } from 'react';
import './style.scss';
import 'react-owl-carousel2/lib/styles.css';  
import logo from '../../assets/images/logo.png';


const Footer = (props) => {


    return  (
        <div className="footer" id='footer'>
            <div className="content">
                <img src={ logo } />
                <p>Projeto desenvolvido por aluno do CEFET/RJ - Ryan dos Santos</p>
            </div>
        </div>
    )
}

export default Footer;