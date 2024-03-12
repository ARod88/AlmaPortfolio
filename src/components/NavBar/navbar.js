import React from 'react';
import './navbar.css';
import Logo from '../../assets/Logo.png';
import contactMe from '../../assets/envelope.png';
import { Link } from 'react-scroll';

const Navbar = ()=> {
    return (
        <nav className='navbar'>
            <img className='logo' src={Logo} alt='logo' />
            <div className='desktopMenu'>
                <Link className='desktopMenuListItem'>Home</Link>
                <Link className='desktopMenuListItem'>About</Link>
                <Link className='desktopMenuListItem'>Portfolio</Link>
            </div>
            <button className='desktopMenubtn'>
    <img className='desktopMenuImg' src={contactMe} alt='contactImg' />Contact Me
</button>

        </nav>
    )
}

export default Navbar