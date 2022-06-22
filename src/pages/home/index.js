import React , { Component } from 'react';
import About from '../../components/About';
import Categoria from '../../components/Categoria';
import './style.scss';
import Recentes from '../../components/Recentes';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import Skill from '../../components/Skill';
import Brands from '../../components/Brands';
import bg from '../../assets/images/background-text.jpg';
import Job from '../../components/Job';



export default class Index extends Component {
    render() {
        const destaques = 
        [{
            id: 'post1',
            title: 'Black Friday 2020: como deixar sua casa mais moderna e inteligente',
            description: 'Selecionamos diversas promoções na Black Friday Amazon, para você deixar sua casa mais moderna e inteligente.',
            tag: 'Tecnologia',
            banner: './../../assets/images/teste/black.jpg',
            date: '10/10/2020'
        },
        {
            id: 'post2',
            title: 'Black Friday 2020: como deixar sua casa mais moderna e inteligente',
            description: 'Selecionamos diversas promoções na Black Friday Amazon, para você deixar sua casa mais moderna e inteligente.',
            tag: 'Tecnologia',
            banner: './../../assets/images/teste/curso.png',
            date: '10/10/2020'
        },{
            id: 'post3',
            title: 'Black Friday 2020: como deixar sua casa mais moderna e inteligente',
            description: 'Selecionamos diversas promoções na Black Friday Amazon, para você deixar sua casa mais moderna e inteligente.',
            tag: 'Tecnologia',
            banner: './../../assets/images/teste/colecao.jpg',
            date: '10/10/2020'
        },{
            id: 'post4',
            title: 'Black Friday 2020: como deixar sua casa mais moderna e inteligente',
            description: 'Selecionamos diversas promoções na Black Friday Amazon, para você deixar sua casa mais moderna e inteligente.',
            tag: 'Tecnologia',
            banner: './../../assets/images/teste/colecao.jpg',
            date: '10/10/2020'
        },{
            id: 'post5',
            title: 'Black Friday 2020: como deixar sua casa mais moderna e inteligente',
            description: 'Selecionamos diversas promoções na Black Friday Amazon, para você deixar sua casa mais moderna e inteligente.',
            tag: 'Tecnologia',
            banner: './../../assets/images/teste/colecao.jpg',
            date: '10/10/2020'
        },{
            id: 'post6',
            title: 'Black Friday 2020: como deixar sua casa mais moderna e inteligente',
            description: 'Selecionamos diversas promoções na Black Friday Amazon, para você deixar sua casa mais moderna e inteligente.',
            tag: 'Tecnologia',
            banner: './../../assets/images/teste/colecao.jpg',
            date: '10/10/2020'
        },{
            id: 'post7',
            title: 'Black Friday 2020: como deixar sua casa mais moderna e inteligente',
            description: 'Selecionamos diversas promoções na Black Friday Amazon, para você deixar sua casa mais moderna e inteligente.',
            tag: 'Tecnologia',
            banner: './../../assets/images/teste/colecao.jpg',
            date: '10/10/2020'
        },{
            id: 'post8',
            title: 'Black Friday 2020: como deixar sua casa mais moderna e inteligente',
            description: 'Selecionamos diversas promoções na Black Friday Amazon, para você deixar sua casa mais moderna e inteligente.',
            tag: 'Tecnologia',
            banner: './../../assets/images/teste/colecao.jpg',
            date: '10/10/2020'
        }]

        return (
            <div className="index" style={{ backgroundImage: `url(${bg})` }}>
                <Header data={destaques} />
                <Banner data={destaques} />
                <Brands data={destaques} />
                <About data={destaques} />
                <Skill data={destaques} />
                <Job data={destaques} />
                <Categoria data={destaques} />
            </div>

        )
    }
}