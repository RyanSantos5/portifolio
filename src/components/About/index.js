import React, { useEffect } from 'react';
import './style.scss';
import image from '../../assets/img/logoRyan.jpg';
import $ from 'jquery';


const About = () => {

    const active = (e) => {
        if($("#about").offset().top - $(window).scrollTop() < 450 && !$(".about").hasClass("animate")) {
            $(".about").addClass("animate");
        }
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="about" id='about'>
             <div className='container'>
                <h2 className='default-title'>Sobre</h2>
            </div>
            <div className="container">
                <div className='about__left'>
                    <div className='about__left__image'>
                        <img  src={image} alt='' />
                    </div>
                    <div className='about__left__text'>
                        <p>Olá,  <span>eu sou</span></p>
                        <p><b>Ryan Santos</b>!</p>
                    </div>
                    {/* <div className='about__left__text'>
                        <p>Hello, I'm a <span>Ryan Santos</span></p>
                        <p>That's <b>me</b> !</p>
                    </div> */}
                    {/* <div className='about__left__layer-1'></div>
                    <div className='about__left__layer-2'></div>
                <div className='about__left__layer-3'></div> */}
                </div>
                <div className='about__right'>
                    <div className='about__right__text'>
                        {/* <p className='about__right__text--p'>
                        I have been working as a Frontend developer for over 4 years. I focus on business evolution in the digital realm.
                        I have experience in team and project management, overseeing the development process from inception to GoLive.</p>
                        <p className='about__right__text--p'> I love cats, and one of my passions is traveling. If you want to get to know me better, just send me a "hello"!</p>
                        <p className='about__right__text--highlight'><b>from a Dreamer!</b></p> */}
                        <p className='about__right__text--p'>
                        Trabalho como desenvolvedor Frontend há mais de 4 anos. Meu foco é a evolução dos negócios no mundo digital. 
                        Tenho experiência em gerenciamento de equipes e projetos, supervisionando o processo de desenvolvimento desde o início até o GoLive.</p>
                        <p className='about__right__text--p'>Se quiser me conhecer melhor é só me mandar um “Oi”!</p>
                        <p className='about__right__text--highlight'><b>Ryan Santos</b></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;