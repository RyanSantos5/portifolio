import React from 'react';
import './style.scss';
import lapa from '../../assets/images/lapa2.png';
import birds from '../../assets/images/birds.png';
import triangulo1 from '../../assets/images/triangulo1.png';
import triangulo2 from '../../assets/images/triangulo2.png';

const About = () => {
    return  (
        <div className="about" id='about'>
            <div className="content">
                <div className='about-text'>
                    <h2 className='default-title'>Sobre</h2>
                    <div className='about-texts'>
                        <p className='about-text__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                        <p className='about-text__text'>dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                        <p className='about-text__text'>printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    </div>
                </div>
                <div className='about-images'>
                    <img className='birds' src={birds} />
                    <img className='lapa' src={lapa} />
                </div>
            </div>
            <div className='about-info-1'>
                <div className='about-info-1--button'>
                    <img className='about-info-1--button__arrow' src={triangulo1}/>
                </div>
            </div>
            <div className='about-info-2'>
                <div className='about-info-2--button'>
                    <img className='about-info-2--button__arrow' src={triangulo2}/>
                </div>
            </div>
        </div>
    )
}

export default About;