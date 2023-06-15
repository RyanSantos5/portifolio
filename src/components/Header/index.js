import React, { useEffect } from 'react';
import './style.scss';

import $ from 'jquery';


const Header = () => {

    const handleScroll = () => {
        if (document.documentElement.scrollTop > 100) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    }
    
    useEffect(() => {
        window.onscroll = () => handleScroll()
    },[]);
    

    return  (
        <div className="header" id='header'>
            <div className='container-fluid'>
                <div className='header__logo'>
                    <a href='/'>RYAN<span>SANTOS</span></a>
                </div>

                <ul className='header__menu'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    {/* <li><a href='#skills'>Skills</a></li> */}
                    <li className='highlight'><a href='#job'>My Works</a></li>
                </ul>

                <a href='#contact' className='header__button primary-button'>
                    Say Hello
                </a>
            </div>
        </div>
    )
}

export default Header;