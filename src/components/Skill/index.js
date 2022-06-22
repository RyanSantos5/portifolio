import React from 'react';
import './style.scss';

import skill1 from './../../assets/images/skills/html.png';
import skill2 from './../../assets/images/skills/css.png';
import skill3 from './../../assets/images/skills/js.png';
import skill4 from './../../assets/images/skills/react.png';
import skill5 from './../../assets/images/skills/node.png';
import skill6 from './../../assets/images/skills/vtex.png';
import skill7 from './../../assets/images/skills/git.png';
import skill8 from './../../assets/images/skills/sql.png';

const Skill = () => {
    return  (
        <div className="skill" id='skill'>
            <div className="content">
                <div className='skill-title'>
                    <h2 className='default-title'>Habilidades</h2>
                </div>
                <div className='skill-content'>
                    {/* <div className='skill-text'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    </div> */}
                    <div className='skill-bar'>
                        <div className='skill-bar__list'>
                                {/* Item */}
                                <div className='skill-bar__item'>
                                    <div className='skill-bar__item__bar'>
                                        <img src={skill1} alt="Skills"/>
                                        <p className='skill-bar__item__title'>html</p>
                                        <p className='skill-bar__item__text html'>0</p>
                                    </div>
                                </div>

                                {/* Item */}
                                <div className='skill-bar__item'>
                                    <div className='skill-bar__item__bar'>
                                        <img src={skill2} alt="Skills"/>
                                        <p className='skill-bar__item__title'>css</p>
                                        <p className='skill-bar__item__text css'>0</p>
                                    </div>
                                </div>

                                {/* Item */}
                                <div className='skill-bar__item'>
                                    <div className='skill-bar__item__bar'>
                                        <img src={skill3} alt="Skills"/>
                                        <p className='skill-bar__item__title'>js</p>
                                        <p className='skill-bar__item__text js'>0</p>
                                    </div>
                                </div>

                                {/* Item */}
                                <div className='skill-bar__item'>
                                    <div className='skill-bar__item__bar'>
                                        <img src={skill4} alt="Skills"/>
                                        <p className='skill-bar__item__title'>react</p>
                                        <p className='skill-bar__item__text react'>0</p>
                                    </div>
                                </div>

                                {/* Item */}
                                <div className='skill-bar__item'>
                                    <div className='skill-bar__item__bar'>
                                        <img src={skill5} alt="Skills"/>
                                        <p className='skill-bar__item__title'>Node</p>
                                        <p className='skill-bar__item__text node'>0</p>
                                    </div>
                                </div>

                                {/* Item */}
                                <div className='skill-bar__item'>
                                    <div className='skill-bar__item__bar'>
                                        <img src={skill6} alt="Skills"/>
                                        <p className='skill-bar__item__title'>vtex io</p>
                                        <p className='skill-bar__item__text vtex'>0</p>
                                    </div>
                                </div>

                                {/* Item */}
                                <div className='skill-bar__item'>
                                    <div className='skill-bar__item__bar'>
                                        <img src={skill7} alt="Skills"/>
                                        <p className='skill-bar__item__title'>git</p>
                                        <p className='skill-bar__item__text git'>0</p>
                                    </div>
                                </div>

                                {/* Item */}
                                <div className='skill-bar__item'>
                                    <div className='skill-bar__item__bar'>
                                        <img src={skill8} alt="Skills"/>
                                        <p className='skill-bar__item__title'>MySQL</p>
                                        <p className='skill-bar__item__text sql'>0</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                    {/* <div className='skill-images'>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Skill;