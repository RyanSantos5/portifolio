import React, { useEffect } from 'react';
import './style.scss';
import { LazyLoadImage } from "react-lazy-load-image-component";


import retrato1 from '../../assets/img/retrato-1.jpg';
import retrato2 from '../../assets/img/retrato-2.jpg';
import retrato3 from '../../assets/img/retrato-3.jpg';
import paisagem1 from '../../assets/img/paisagem-1.jpg';
import paisagem2 from '../../assets/img/paisagem-2.jpg';
import quadrado1 from '../../assets/img/quadrado-1.jpg';
import quadrado2 from '../../assets/img/quadrado-2.jpg';
import quadrado3 from '../../assets/img/quadrado-3.jpg';
import $ from 'jquery';


const Gallery = () => {

    const active = (e) => {
        // if($("#gallery").offset().top - $(window).scrollTop() < 450 && !$(".gallery").hasClass("animate")) {
        //     $(".gallery").addClass("animate");
        // }

        $(".gallery__image").each((id,el) => {
            if($(el).offset().top - $(window).scrollTop() < 500 && !$(el).hasClass("show")) {
                $(el).addClass("show");
            }
        })
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="gallery" id='gallery'>
            <div className="container__full">
                <div className='gallery__image gallery__image-1'>
                    <LazyLoadImage src={paisagem2} alt='' />
                </div>
                <div className='gallery__image gallery__image-2'>
                    <LazyLoadImage src={quadrado1} alt='' />
                </div>
                <div className='gallery__image gallery__image-3'>
                    <div className='gallery__image__title'>
                        <h3 id='wedding'>Wedding</h3>
                    </div>
                </div>
                <div className='gallery__image gallery__image-4'>
                    <LazyLoadImage src={retrato1} alt='' />
                </div>
                <div className='gallery__image gallery__image-5'>
                    <LazyLoadImage src={quadrado2} alt='' />
                </div>
                <div className='gallery__image gallery__image-6'>
                    <LazyLoadImage src={quadrado1} alt='' />
                </div>
                <div className='gallery__image gallery__image-7'>
                    <LazyLoadImage src={paisagem1} alt='' />
                </div>
                <div className='gallery__image gallery__image-8'>
                    <LazyLoadImage src={retrato2} alt='' />
                </div>
                <div className='gallery__image gallery__image-9'>
                    <LazyLoadImage src={quadrado1} alt='' />
                </div>
                <div className='gallery__image gallery__image-10'>
                    <LazyLoadImage src={retrato3} alt='' />
                </div>
                <div className='gallery__image gallery__image-11'>
                    <div className='gallery__image__title gallery__image__title--2'>
                        <h3 id='birthday'>Birthday</h3>
                    </div>
                </div>
                <div className='gallery__image gallery__image-12'>
                    <LazyLoadImage src={quadrado3} alt='' />
                </div>
                <div className='gallery__image gallery__image-13'>
                    <LazyLoadImage src={retrato2} alt='' />
                </div>
                <div className='gallery__image gallery__image-14'>
                    <LazyLoadImage src={paisagem2} alt='' />
                </div>
                <div className='gallery__image gallery__image-15'>
                    <LazyLoadImage src={quadrado3} alt='' />
                </div>
            </div>
        </section>
    )
}

export default Gallery;