import React, { useEffect, useState } from 'react';
import './style.scss';
import $ from 'jquery';
import shape1 from '../../assets/img/shape-1.png';
import shape2 from '../../assets/img/shape-2.png';
import shape3 from '../../assets/img/shape-3.png';
import shape4 from '../../assets/img/shape-4.png';
import shape5 from '../../assets/img/shape-5.png';
import shape6 from '../../assets/img/shape-6.png';
import 'jquery.easing';

const Banner = () => {

    const active = (e) => {
        const shape = $('.banner__shape-up');
        const shapeLeft = $('.banner__shape-left');
        const shapeLeft2 = $('.banner__shape-left2');
        const shapeDown = $('.banner__shape-down');
        const shapeUpRight = $('.banner__shape-upright');
        const scrollTop = $(window).scrollTop();
      
        const parallaxFactor = 0.2;
        const parallaxFactor2 = 0.1;

        const animationDuration = 500;
        console.log(shape)
      
        const initialOffset = shape.offset()?.left || 0;
        console.log(scrollTop);
      
        const distance = scrollTop - initialOffset;
        let animationSpeed = Math.abs(distance * parallaxFactor);
      
        if (animationSpeed > 1000) {
          animationSpeed = 1000;
        }
      
        shape.stop().animate(
          {
            marginTop: -scrollTop * parallaxFactor,
          },
          animationDuration,
          'easeOutCubic'
        );

        shapeDown.stop().animate(
            {
              marginTop: scrollTop * parallaxFactor,
            },
            animationDuration,
            'easeOutCubic'
          );

        shapeUpRight.stop().animate(
            {
              marginTop: -scrollTop * parallaxFactor,
              marginLeft: scrollTop * parallaxFactor,
            },
            animationDuration,
            'easeOutCubic'
          );

        shapeLeft.stop().animate(
            {
              marginLeft: -scrollTop * parallaxFactor2,
            },
            animationDuration,
            'easeOutCubic'
          );

        shapeLeft2.stop().animate(
            {
              marginLeft: -scrollTop * parallaxFactor,
            },
            animationDuration,
            'easeOutCubic'
          );
      };
    
    useEffect(() => {
        $(window).on('scroll',(e)=>active(e));
    },[]);
    return  (
        <section className="banner" id='banner'>
            <img className='banner__shape2 banner__shape2-1 banner__shape-down' src={shape2} alt=''/>
            <img className='banner__shape2 banner__shape2-2 banner__shape-left2' src={shape2} alt=''/>
            <img className='banner__shape3 banner__shape3-1 banner__shape-down' src={shape3} alt=''/>
            <img className='banner__shape4 banner__shape4-1 banner__shape-upright' src={shape4} alt=''/>
            <img className='banner__shape5 banner__shape5-1 banner__shape-left' src={shape5} alt=''/>
            <img className='banner__shape6 banner__shape6-1 banner__shape-left' src={shape6} alt=''/>
            <img className='banner__shape1 banner__shape1-1 banner__shape-left' src={shape1} alt=''/>
            <img className='banner__shape1 banner__shape1-2 banner__shape-left' src={shape1} alt=''/>
            <img className='banner__shape1 banner__shape1-3 banner__shape-left' src={shape1} alt=''/>

            <div className='banner__text'>
                <h2>Designer & Frontend Dev</h2>
                <p>I design and code beautifully simple things, and I love what I do.</p>
                <div className='banner__text__buttons'>
                    <a href='#about' className='primary-button'>Contact</a>
                    <a href='#about' className='secondary-button'>More about me!</a>
                </div>
            </div>
            <div className='banner__arrow'>
                <p></p>
            </div>
        </section>
    )
}

export default Banner;