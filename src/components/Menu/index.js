import React from 'react';
import { Link } from 'react-router-dom';


const Menu = (props) => {
    return  (
        <div className={props.className}>
            <ul>
                <li><Link className="link" to="/cortes"> Cortes de Cabelo </Link></li>
                <li><Link className="link" to="/moda"> Moda </Link></li>
                <li><Link className="link" to="/tenis"> Tenis </Link></li>
                <li><Link className="link" to="/acessorio"> Acessorios </Link></li>
                <li><Link className="link" to="/black"> Black Friday </Link></li>
            </ul>
        </div>
    )
}

export default Menu;