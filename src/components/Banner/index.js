import React from 'react';
import Logo from '../Logo';
import P5 from '../p5';
import background1 from '../../assets/images/background_home.jpg';
import neblina1 from '../../assets/images/neblina1.png';
import neblina2 from '../../assets/images/neblina2.png';
import './style.scss';

const Banner = () => {
    return  (
        <div className="banner">
            <div className="banner-content">
                <div className="banner-content__image" style={{backgroundImage:`url(${background1})`}}>
                    <img className='neblina1 neblina' src={neblina1} />
                    <img className='neblina2 neblina' src={neblina2} />
                </div>
                <div className='banner-content__titulo'>
                    <h3>Olá, <span>eu sou</span></h3>
                    <h2>Ryan Santos</h2>
                </div>
                <div className='banner-content__buttons'>
                    <div className="banner-content__button"></div>
                    <div className="banner-content__button"></div>
                </div>
            </div>
        </div>
    )
}

export default Banner;