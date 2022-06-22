import React from 'react';
import './style.scss';

const DestaqueTexto = (props) => {
    console.log(props);
    return  (
        <div className="destaque-texto">
            <h1> {props.data.title} </h1>
            <p> {props.data.description} </p>
            <span className="texto-tag"> {props.data.tag} </span>
            <span className="texto-data"> {props.data.date} </span>
        </div>
    )
}

export default DestaqueTexto;