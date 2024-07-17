import React from "react";
import './works.css';
import Portfolio1 from '../../assets/portfolio1.png';
import Portfolio2 from '../../assets/portfolio2.jpg';

const Works = () => {
    return(
        <section id='works'>
        <h2 className="worksTitle">My Portfolio</h2> 
        <span className="worksDesc">These are the projects that showcase my attention to detail and creativity</span>
        <div className="worksImg">
            <img src={Portfolio1} alt="workimg" className="worksImg"></img>
            <img src={Portfolio2} alt="workimg" className="worksImg"></img>
            <img src={Portfolio1} alt="workimg" className="worksImg"></img>
            <img src={Portfolio2} alt="workimg" className="worksImg"></img>
            <img src={Portfolio1} alt="workimg" className="worksImg"></img>
            <img src={Portfolio2} alt="workimg" className="worksImg"></img>
        </div>
        <button className="workBtn">See More</button>
        </section>
    )
    
    
}

export default Works