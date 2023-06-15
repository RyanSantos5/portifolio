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
                <h2 className='default-title'>About</h2>
            </div>
            <div className="container">
                <div className='about__left'>
                    <div className='about__left__image'>
                        <img  src={image} alt='' />
                    </div>
                    <div className='about__left__text'>
                        <p>Hello, I'm a <span>Ryan Santos</span></p>
                        <p>That's <span>me</span> !</p>
                    </div>
                    {/* <div className='about__left__layer-1'></div>
                    <div className='about__left__layer-2'></div>
                <div className='about__left__layer-3'></div> */}
                </div>
                <div className='about__right'>
                    <div className='about__right__text'>
                        <p className='about__right__text--p'>Irure adipisicing aute elit voluptate incididunt in consequat dolor. Eiusmod ipsum aliqua fugiat voluptate in ullamco aliqua sit.</p>
                        <p className='about__right__text--p'>Ex mollit consequat excepteur nostrud. Cillum quis voluptate consequat aute duis do nostrud sint Lorem aliqua. Non eu esse laboris ut fugiat occaecat dolore. </p>
                        <p className='about__right__text--highlight'><b>Lorem Ipsum</b></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;