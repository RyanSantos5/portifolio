import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const HomeText = () => {
        
    return  (
        <div className="home-text" id='home-text'>
            <div className='container'>
                <h2 className='default-title'>Sobre os ODS</h2>
                <p>A ONU e seus parceiros no Brasil estão trabalhando para atingir os Objetivos de Desenvolvimento Sustentável. São 17 objetivos ambiciosos e interconectados que abordam os principais desafios de desenvolvimento enfrentados por pessoas no Brasil e no mundo.</p>
                <p>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.</p>
                <a href='https://brasil.un.org/pt-br/sdgs'>Baseado no site <span>https://brasil.un.org/pt-br/sdgs</span> para mais informações clique aqui! </a>
            </div>
        </div>
    )
}

export default HomeText;