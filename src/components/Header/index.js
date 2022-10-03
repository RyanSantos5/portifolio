import React, { useEffect, useState } from 'react';
import Logo from '../Logo';
import Menu from '../Menu';
import './style.scss';

const Header = () => {
    var {ods, setOds} = useState([]);

        const loadOds = () => {
            fetch('./../../ods.json',{
                headers: {
                    Accept: "aplication/json"
                }
            }).then(res => res.json())
                .then(res => setOds(res.data));

            console.log("Agora",ods)
        }

        useEffect(() => {
            if(ods === []) {
                loadOds();
            }

        },[]);
        
    return  (
        <div className="header" id='header'>
            <div className='container'>
                <Logo />
                <Menu />
            </div>
        </div>
    )
}

export default Header;