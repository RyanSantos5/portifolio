import React from 'react';
import Logo from '../Logo';
import Menu from '../Menu';
import logo_menu from '../../assets/images/logo_menu.jpeg';
import menu_icon1 from '../../assets/images/sculpture.png';
import menu_icon1b from '../../assets/images/three-birds.png';
import menu_icon2 from '../../assets/images/experience.png';
import menu_icon2b from '../../assets/images/experience2.png';
import menu_icon3 from '../../assets/images/signature.png';
import menu_icon4 from '../../assets/images/pin.png';
import './style.scss';

const Header = () => {
    return  (
        <div className="header"alt="Icon" id='contato'>
            <div className="menu">
                <div className="menu__content">
                    {/* <div className="menu__content-row row1">
                        <div className="logo-menu">
                            <img src={logo_menu} />
                        </div>
                    </div> */}
                    <div className="menu__content-row row2">
                        <a className='row-item' href="#about">
                            <div className="menu-icons">
                                <img src={menu_icon1} alt="Icon"/>
                                <img src={menu_icon1b} alt="Icon"/>
                            </div>
                        <p className="menu-text">Sobre</p>
                        </a>
                    </div>
                    <div className="menu__content-row row3">
                        <a className='row-item' href="#skill">
                            <div className="menu-icons">
                                <img src={menu_icon2} alt="Icon"/>
                                <img src={menu_icon2b} alt="Icon"/>
                            </div>
                        <p className="menu-text">Habilidades</p>
                        </a>
                    </div>
                    <div className="menu__content-row row4">
                        <a className='row-item' href="#contato">
                            <div className="menu-icons">
                                <img src={menu_icon3} alt="Icon"/>
                            </div>
                            <p className="menu-text">Trabalhos</p>
                        </a>
                        </div>
                    <div className="menu__content-row row5">
                        <a className='row-item' href="#contato">
                            <div className="menu-icons">
                                <img src={menu_icon4} alt="Icon"/>
                            </div>
                            <p className="menu-text">Contato</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;