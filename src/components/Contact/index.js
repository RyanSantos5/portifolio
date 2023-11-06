import React, { useEffect } from 'react';
import './style.scss';
import whatsapp from '../../assets/img/whatsapp.png';
import instagram from '../../assets/img/instagram.png';
import $ from 'jquery';


const Contact = () => {

    const active = (e) => {
        if($("#contact").offset().top - $(window).scrollTop() < 650 && !$(".contact").hasClass("animate")) {
            $(".contact").addClass("animate");
        }
    }

    const sendMessage = (e) => {
        console.log(e);
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="contact" id='contact'>
            <div className='container'>
                <h2 className='default-title'>Contato</h2>
            </div>
            <div className="container">
                <div className='contact__modal'>
                    <h4>Social</h4>
                    <div className='contact__social'>
                        <a href='https://wa.me/5521995084896?text=Hello%21'>
                            <img src={whatsapp} alt=''/>
                            <span>21 995084896</span>
                        </a>
                        <a href='https://www.instagram.com/ryan.santosrj/'>
                            <img src={instagram} alt=''/>
                            <span>@ryan.santosrj</span>
                        </a>
                    </div>
                    <a href='/' onClick={sendMessage()} className='contact__modal__action primary-button'>Orçamento</a>
                </div>
                <div className='contact__modal'>
                    <h4>Email</h4>
                    <p>Ou me envie um email: <br></br><br></br> <b> contato@euryansantos.com</b></p>
                    <a href='/' onClick={sendMessage()} className='contact__modal__action primary-button'>Enviar</a>
                </div>
            </div>
        </section>
    )
}

export default Contact;