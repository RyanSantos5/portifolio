import React , { Component, useEffect, useState } from 'react';
import './style.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import ListOds from '../../components/ListOds';
import Description from '../../components/Description';
import { useParams } from 'react-router-dom';
// import ods from './../../assets/ods.json';



const OdsPage = () => {
    const [ods,setOds] = useState(null);
    const [odsActive,setOdsActive] = useState(null);
    const {key} = useParams();
    
    const loadData = async () => {

        try {
            const response = await fetch('./../data.json');
            console.log(response)
            const data = await response.json();
            setOds(data.data);
        } catch (error) {
            console.log("Ocorreu um erro ao buscar")
        }
    }


    const setData = (data) => {
        setOdsActive(data);
    }

    const onTop = () => {
        window.scrollTo(0, 0);
    }
    
    useEffect(() => {
        console.log(key)
        if(odsActive === null || (key-1) !== odsActive) {
            setOdsActive(key-1);
            onTop()
        }

        if(!ods) {
            console.log(ods)
            loadData();
        }
        
    });

    return (
        <div className="index"
         >
            <Header />
            <Banner ods={ods !== null || ods ? ods[odsActive] : {color:"#EAF0F1"}} />
            <Description ods={ods !== null || ods ? ods[odsActive] : null}/>
            <ListOds ods={ods} setData={setData}/>
            <Footer />
        </div>
    )
}

export default OdsPage;