import React , { Component, useEffect, useState } from 'react';
import './style.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import $ from 'jquery'
import ListOds from '../../components/ListOds';
import HomeText from '../../components/HomeText';
// import ongs from './../../assets/ongs.json';



const OngsPage = () => {
    const [ongs,setOngs] = useState(null);
    
    const loadData = async () => {

        try {
            const response = await fetch('./ongs.json');
            const data = await response.json();
            console.log(data.ongs)
            setOngs(data.ongs);
        } catch (error) {
            console.log("Ocorreu um erro ao buscar")
        }
    }

    
    useEffect(() => {
        console.log(ongs)
        if(!ongs) {
            loadData();
        }
        
    }, []);

    return (
        <div className="ongs"
         >
            <Header />
            <h1 className='default-title'>Lista de Ongs</h1>
            <div className='ongs__list container'>
            {ongs?.map( (item,key) => {
                    return (
                        <li key={key} className='ongs__item'>
                            { item.text!== "" ?
                                <div className='ongs__info'>
                                    <p className='ongs__name'>{item.name}</p>
                                    <p className='ongs__address'>{item.address}.</p>
                                    <p className='ongs__phone'>{item.phone}</p>
                                </div>
                            :
                                <>
                                </>
                            }
                        </li>
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}

export default OngsPage;