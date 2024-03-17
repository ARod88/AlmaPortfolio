import React from 'react';
import './intro.css';
import Profile from '../../assets/stockimage.png';
import btnImg from '../../assets/briefcase.png';
import { Link } from 'react-scroll';

const Intro = () => {
return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>Im</span><span className='introName'>Alma</span> <br /><span>Software Developer </span>
            <p className='introPara'>As an enthusiastic and creative software developer, <br />I'm passionate about crafting innovative solutions, < br /> pushing technological boundaries, < br />and thriving on the challenges of coding,< br /> all while maintaining a commitment to excellence < br />and continuous learning</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg'/> Hire Me </button></Link>
        </div>
            <img src ={Profile} alt='profile' className='image' />
    </section>
)

}

export default Intro;