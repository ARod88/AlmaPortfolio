import React from 'react';
import './contact.css';
import linkedinIcon from '../../assets/linkedin.png';
import facebookIcon from '../../assets/facebook.png';
import githubIcon from '../../assets/github.png';
import twitterIcon from '../../assets/twitter.png';



const Contact = () => {
    return (
        <section className='contactPage'>
            <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please reach out the form below to discuss any work opprtunities.</span>
            <form className='contactForm'>
                <input type='text' className='name' placeholder='Your Name' />
                <input type='email' className='email' placeholder='Your Email'/>
                <textarea className='msg' name='message'rows='5' placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={linkedinIcon} alt='LinkedIn' className='link' />
                    <img src={facebookIcon} alt='Facebook' className='link' />
                    <img src={githubIcon} alt='Github' className='link' />
                    <img src={twitterIcon} alt='Twitter' className='link' />
                </div>
            </form>
            </div>
        </section>
    )
}

export default Contact