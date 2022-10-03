import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Description = ({ods}) => {


    useEffect(() => {
        console.log(ods)
    },[]);
        
    const renderList = () => {
        if(!ods || !ods?.objectives) {
            return (<></>)
        }

        return (
            <>
                {ods.objectives?.map( (item,key) => {
                    return (
                        <li key={key} className='description__item'>
                            { item.text!== "" ?
                                <div className='description__info'>
                                    <p className='description__prefix'>{item.prefix}.</p>
                                    <p className='description__description'>{item.text}</p>
                                </div>
                            :
                                <>
                                </>
                            }
                        </li>
                    )
                })}
            </>
        )
    }
        
    return  (
        <div className="description" id='description'>
            <div className='container'>
                <h2 className='default-title'>Alguns Objetivos</h2>
                <ul className='description__list'>
                    { renderList() }
                </ul>
                <a href='https://brasil.un.org/pt-br/sdgs'>Baseado no site <span>https://brasil.un.org/pt-br/sdgs</span> para mais informações clique aqui! </a>
            </div>
        </div>
    )
}

export default Description;