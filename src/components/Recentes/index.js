import React from 'react';
import './style.scss';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';  

import QuemSomos from './../../assets/images/quem-somos.jpg';

import Banner2 from './../../assets/images/teste/curso.png';
import { Link } from 'react-router-dom';
import ListaVip from '../ListaVip';

const Recentes = (props) => {
    console.log("CAT::" + props.data);
    const options = {
        items: 1,
        margin: 20,
        autoplay: false,
        URLhashListener: true,
    };
     
    // const events = {
    //     onDragged: function(event) {...},
    //     onChanged: function(event) {...}
    // };
    console.log(props);
    return  (
        <div className="recentes">
            <div className="content">
                <div className="contente-col1">
                    <h1 className="titulo-padrao">Recentes</h1>
                    <div>
                        <OwlCarousel  options={options} >
                            { props.data.map((post, index) => {
                                if(index < 5) {
                                    return (
                                        <Link className="categoria-item"  data-hash={post.id}>
                                            <div className="banner" style={{backgroundImage: `url('${Banner2}')` }} />
                                            <h1>{ post.title }</h1>
                                            <p> { post.description } </p>
                                            <span> { post.date } </span>
                                        </Link>
                                    )   
                                }
                            }) }
                        </OwlCarousel>
                        <div className="recentes-menu">
                                { props.data.map((post, index) => {
                                    if(index < 5) {
                                        return (
                                            <a className="categoria-item" style={{backgroundImage: `url('${Banner2}')` }} href={`#${post.id}`}>
                                                <h1>{ post.title }</h1>
                                                <p> { post.description } </p>
                                                <span> { post.date } </span>
                                            </a>
                                        )
                                    }
                                }) }
                        </div>
                    </div>
                </div>
                <div className="contente-col2">
                    <h1 className="titulo-padrao">Quem Somos</h1>
                    <a href="https://www.instagram.com/blogmhm/" className="bordar-insta">
                        <div className="img-insta"  style={{backgroundImage: `url('${QuemSomos}')` }} ></div>
                    </a>
                    <h1 className="titulo-padrao">Lista Vip</h1>
                    <div className="lista-vip">
                        <ListaVip />
                    </div>       
                </div>
            </div>
        </div>
    )
}

export default Recentes;