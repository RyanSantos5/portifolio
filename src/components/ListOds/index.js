import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './style.scss';

const ListOds = (props) => {
    let {ods, setData} = props;

    useEffect(() => {
    });
    
    const renderList = () => {
        if(!ods) {
            return (<></>)
        }

        return (
            <>
                {ods.map( (item,key) => {
                    return (
                        <Link key={key} to={`/portifolio/ods/${item.number}`} className='list-ods__item' style={{ backgroundColor: item.color}}>
                            <div className='list-ods__info'>
                                <p className='list-ods__number'>{item.number}</p>
                                <p className='list-ods__name'>{item.name}</p>
                            </div>
                            <img className='list-ods__icon'  src={item.icon}/>
                        </Link>
                    )
                })}
            </>
        )
    }
        
    return  (
        <div className="list-ods" id='list-ods'>
            <div className='container'>
                <h2 className='default-title'>Objetivos de Desenvolvimento Sustentável</h2>
                <ul className='list-ods__list'>
                    { renderList() }
                </ul>
            </div>
        </div>
    )
}

export default ListOds;