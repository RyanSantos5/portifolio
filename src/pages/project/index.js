import React  from 'react';
import './style.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProjectText from '../../components/HomeText';
// import ods from './../../assets/ods.json';



const Project = () => {

    return (
        <div className="project">
            <Header />
            <ProjectText />
            <Footer />
        </div>
    )
}

export default Project;