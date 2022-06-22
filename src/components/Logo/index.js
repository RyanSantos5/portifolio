import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Logo = (props) => {
    return  (
        <div className={props.className}>
            <Link to="/">
                <img src={ logo } />
            </Link>
        </div>
    )
}

export default Logo;