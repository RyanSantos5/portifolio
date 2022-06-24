import React from 'react';
import './style.scss';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';  

import brand1w from './../../assets/images/brands/decale-w.png';
import brand2w from './../../assets/images/brands/ilumine-w.png';
import brand3w from './../../assets/images/brands/dmfit-w.png';
import brand4w from './../../assets/images/brands/hardyn-w.png';
import brand5w from './../../assets/images/brands/jescri-w.png';
import brand6w from './../../assets/images/brands/cvl-w.png';
import brand7w from './../../assets/images/brands/dily-w.png';
import brand8w from './../../assets/images/brands/tilev-w.png';
import brand9w from './../../assets/images/brands/hipy-w.png';
import brand10w from './../../assets/images/brands/riofit-w.png';
import brand11w from './../../assets/images/brands/v9-w.png';
import brand12w from './../../assets/images/brands/rgtx-w.png';
import brand13w from './../../assets/images/brands/fiturb-w.png';

const Contact = (props) => {
    const options = {
        items: 10,
        autoplay: true,
        autoplaySpeed: 500,
        autoplayTimeout: 3000,
        loop: true
    };
     
    // const events = {
    //     onDragged: function(event) {...},
    //     onChanged: function(event) {...}
    // };
    console.log(props);
    return  (
        <div className="brands">
            <div className="content">
                <OwlCarousel  options={options} >
                    <a className='brands__link' href="/" target="_blank">
                        <img alt="Brand" src={brand1w} />
                    </a>
                    <a className='brands__link' href="/" target="_blank">
                        <img alt="Brand" src={brand2w} />
                    </a>
                    <a className='brands__link' href="/" target="_blank">
                        <img alt="Brand" src={brand3w} />
                    </a>
                    <a className='brands__link' href="/" target="_blank">
                        <img alt="Brand" src={brand4w} />
                    </a>
                    <a className='brands__link' href="/" target="_blank">
                        <img alt="Brand" src={brand5w} />
                    </a>
                    <a className='brands__link' href="/" target="_blank">
                        <img alt="Brand" src={brand6w} />
                    </a>
                    <a className='brands__link' href="/" target="_blank">
                        <img alt="Brand" src={brand7w} />
                    </a>
                    <a className='brands__link' href="/" target="_blank">
                        <img alt="Brand" src={brand8w} />
                    </a>
                    <a className='brands__link' href="/" target="_blank">
                        <img alt="Brand" src={brand9w} />
                    </a>
                    <a className='brands__link' href="/" target="_blank">
                        <img alt="Brand" src={brand10w} />
                    </a>
                    <a className='brands__link' href="/" target="_blank">
                        <img alt="Brand" src={brand11w} />
                    </a>
                    <a className='brands__link' href="/" target="_blank">
                        <img alt="Brand" src={brand12w} />
                    </a>
                    <a className='brands__link' href="/" target="_blank">
                        <img alt="Brand" src={brand13w} />
                    </a>
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Contact;