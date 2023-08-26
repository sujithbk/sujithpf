import React from 'react'
import Frontend from './Frontend'
import './skill.css'
import Backend from './Backend'

function Skill() {
  return (
    <section className="skills section" id="skill">
         <h2 className="section__title">Skills</h2>
         <span className="section__subtitle">-------------</span>
         <div className="skills__container container grid">
          <Frontend/>
          <Backend/>
         </div>

    </section>
  )
}

export default Skill