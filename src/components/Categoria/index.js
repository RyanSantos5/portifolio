import React from 'react';
import './style.scss';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';  

import Banner2 from './../../assets/images/teste/curso.png';
import { Link } from 'react-router-dom';

const Destaques = (props) => {
    console.log("CAT::" + props.data);
    const options = {
        items: 5,
        nav: true,
        rewind: false,
        autoplay: false,
        margin: 10,
        navText : ["",""]
    };
     
    // const events = {
    //     onDragged: function(event) {...},
    //     onChanged: function(event) {...}
    // };
    console.log(props);
    return  (
        <div className="categoria">
            <div className="content">
                <h1 className="titulo-padrao">Cortes de Cabelo</h1>
                <OwlCarousel  options={options} >
                { props.data.map(post => (
                    <Link className="categoria-item" style={{backgroundImage: `url('${Banner2}')` }}>
                        <h1>{ post.title }</h1>
                        <p> { post.description } </p>
                        <span> { post.date } </span>
                    </Link>
                )) }
            </OwlCarousel>
            </div>
        </div>
    )
}

export default Destaques;