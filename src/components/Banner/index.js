import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Banner = ({ods}) => {


    useEffect(() => {
        console.log(ods)
    },[]);
        
    return  (
        <div className="banner" id='banner'
        style={{ backgroundColor: ods? ods.color : "#EAF0F1"}}>
            <div className='container'>
                <div className='banner__info'>
                    <p className='banner__number'>{ods?.number}</p>
                    <div>
                        <p className='banner__name'>{ods?.name}</p>
                        <p className='banner__description'>{ods?.description}</p>
                        <Link to="" className='banner__button' style={{ color: ods?.color}}>Veja mais</Link>
                    </div>
                </div>
                <img className='banner__icon'  src={ods?.icon}/>
            </div>
        </div>
    )
}

export default Banner;