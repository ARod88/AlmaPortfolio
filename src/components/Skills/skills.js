import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-ux.png';
import webDesign from '../../assets/web-design.png'
import reactLogo from '../../assets/atom.png';

const Skills = () => {
    return (
        <section id="skills">About Section
        <span className="skillTitle">What I do </span>
        <span className="skillDesc">Lorem Ipsum</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg"></img>
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>Write text here</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={webDesign} alt="WebDesign" className="skillBarImg"></img>
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>Write text here</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={reactLogo} alt="reactLogo" className="skillBarImg"></img>
                <div className="skillBarText">
                    <h2>React</h2>
                    <p>Write text here</p>
                </div>
            </div>
            {/* <div className="skillBar">
                <img src={reactLogo} alt="reactLogo" className="skillBarImg"></img>
                <div className="skillBarText">
                    <h2>React</h2>
                    <p>Write text here</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={reactLogo} alt="reactLogo" className="skillBarImg"></img>
                <div className="skillBarText">
                    <h2>React</h2>
                    <p>Write text here</p>
                </div>
            </div> */}
        </div>
        
        </section>
        
       
    );
}

export default Skills;