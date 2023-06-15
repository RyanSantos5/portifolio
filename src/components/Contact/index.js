import React, { useEffect } from 'react';
import './style.scss';
import whatsapp from '../../assets/img/whatsapp.png';
import instagram from '../../assets/img/instagram.png';
import $ from 'jquery';


const Contact = () => {

    const active = (e) => {
        if($("#contact").offset().top - $(window).scrollTop() < 450 && !$(".contact").hasClass("animate")) {
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
                <h2 className='default-title'>Contact Me</h2>
            </div>
            <div className="container">
                <div className='contact__modal'>
                    <h4>Social</h4>
                    <div className='contact__social'>
                        <a href='/'>
                            <img src={whatsapp} alt=''/>
                            <span>+55 90 0000-0000</span>
                        </a>
                        <a href='/'>
                            <img src={instagram} alt=''/>
                            <span>@lorem.ipsum</span>
                        </a>
                    </div>
                    <a href='/' onClick={sendMessage()} className='contact__modal__action'>Call me</a>
                </div>
                <div className='contact__modal'>
                    <h4>Email</h4>
                    <p>Send me an email: <br></br><br></br> <b> lorem.ipsum@ipsum.com</b></p>
                    <a href='/' onClick={sendMessage()} className='contact__modal__action'>Send</a>
                </div>
            </div>
        </section>
    )
}

export default Contact;