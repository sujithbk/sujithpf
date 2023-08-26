import React from 'react'
import './about.css'
import AboutImg from "../../assets/supic.jpeg"


function About() {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About</h2><span className="section__subtitle">-------------</span>
        
        <div className="about__container container grid">
        <img src= {AboutImg} alt="" className='about__img'/>
        <div className="about__data">
            <p>
        Hello, myself Sujith S  I’m a full stack developer Specialized in MERN. I have a strong understand over both front-end and back-end technologies, allowing me to build complete and scalable applications. On the front-end side, 
        I specialize in HTML , CSS , BOOTSTRAP and JAVASCRIPT  i use   REACT  as a  framework. Moving to the back end, I’m proficient in server-side languages like NODE.JS and JAVA. I have clear under standing on MONGODB [database] and 
        I can design efficient database structures and write optimized queries. I’m familiar with APIs and know how to integrate them into applications to enable seamless communication between the front end and back end. 
        </p>
        
        <a href="" className="button button--flex"> CV
        </a>

        </div>
        </div>
    </section>
  )
}

export default About
