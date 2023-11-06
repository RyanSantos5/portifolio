import React, { useEffect, useState } from 'react';
import './style.scss';
import $ from 'jquery';


const PilaresDetail = () => {
    const [active, setActive] = useState(0);
    

    const animate = (e) => {
        if($("#pilares-detail").offset().top - $(window).scrollTop() < 900 && !$(".pilares-detail").hasClass("animate")) {
            $(".pilares-detail").addClass("animate");
        }
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>animate());
    },[]);

    return  (
        <section className="pilares-detail" id='pilares-detail'>
            <div className="container">
                <div className='pilares-detail__left'>
                <div className='pilares-detail__list'>
                        <a href='/' className='pilares-detail__item pilares-detail__item-1'>
                            Design
                        </a>
                        <a href='/' className='pilares-detail__item pilares-detail__item-2'>
                            Plataforma
                        </a>
                        <a href='/' className='pilares-detail__item pilares-detail__item-3'>
                            Trafego
                        </a>
                        <a href='/' className='pilares-detail__item pilares-detail__item-4'>
                            Conteudo
                        </a>
                    </div>
                </div>
                <div className='pilares-detail__right'>
                <h2 className='pilares-detail__right__title'>Design</h2>
                    <div className='pilares-detail__left__text'>
                        <p> Descubra o poder da combinação perfeita para impulsionar o seu negócio online.  
                        <b> Design, Plataforma , Tráfego e Conteúdo</b> são os quatro pilares-detail 
                            essenciais para alcançar o sucesso digital. 
                        </p>
                        <p>
                            Convidamos <b>você</b> a explorar nossos
                             serviços e descobrir como podemos transformar sua <b>presença online</b>. 
                             Criaremos um <b>design envolvente</b> em uma <b>plataforma robusta</b> e 
                             traremos <b>tráfego qualificado</b> para o seu site. Aumente sua 
                             <b>visibilidade</b>, <b>atraia clientes</b> e <b>alcance suas metas</b>. 
                        </p>
                        <p>
                            Estamos prontos para ajudar você a construir um negócio online de sucesso!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PilaresDetail;