import React , { Component, useEffect, useState } from 'react';
import './style.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import $ from 'jquery'
import ListOds from '../../components/ListOds';
import HomeText from '../../components/HomeText';
// import ods from './../../assets/ods.json';



const Home = () => {
    const [ods,setOds] = useState(null);
    const [odsActive,setOdsActive] = useState(0);
    const [chuck,setChuck] = useState(0);
    
    const loadData = async () => {

        try {
            const response = await fetch('./data.json');
            const data = await response.json();
            console.log(data.data)
            setOds(data.data);
        } catch (error) {
            console.log("Ocorreu um erro ao buscar")
        }
    }

    const setData = (data) => {
        setOdsActive(data);
    }
    
    useEffect(() => {
        if(!ods) {
            console.log(ods)
            loadData();
        }
        
    }, [chuck]);

    return (
        <div className="index"
         >
            <Header />
            <Banner ods={ods !== null || ods ? ods[odsActive] : {color:"#EAF0F1"}} />
            <ListOds ods={ods} setData={setData}/>
            <HomeText />
            <Footer />
        </div>
    )
}

export default Home;