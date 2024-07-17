import React, { useState } from 'react';
import './navbar.css';
import Logo from '../../assets/Logo.png';
import contactMe from '../../assets/envelope.png';
import { Link } from 'react-scroll';
// import menu from '../../assets/'

const Navbar = ()=> {
    const [showMenu, setShowMenu] =useState(false);
    return (
        <nav className='navbar'>
            <img className='logo' src={Logo} alt='logo' />
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
            </div>
            <button className='desktopMenubtn' onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
    <img className='desktopMenuImg' src={contactMe} alt='contactImg' />Contact Me
    
    <img className='mobMenu' src={menu} alt='Menu' onClick={()=>setShowMenu(!showMenu)} />
            <div className='navMenu' style={{display: showMenu? 'flex': 'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
</button>

        </nav>
    )
}

export default Navbar