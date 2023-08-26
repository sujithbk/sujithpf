import React from 'react'
import SuiImg from '../../assets/supic.jpeg'
import './Pro1.css'

function Pro1() {
  return (
    <section id="project-section">
    

    <div class="filter">
        <button class="btn filter-btn active"><a id='frame1' href="https://sujithbk.github.io/framehunt/">Framehunt</a></button>
        
    </div>


    <div className="project-container">
        <div className="project-card">
            <div className="project-wrapper">
                <div className="project-thumbnail">
                    <img src={SuiImg} className="close-btn" alt=""/>
                    <img src={SuiImg}className="project-img" alt=""/>
                    <span className="tags">#javascript, #css, #fullstack</span>
                </div>

               
            </div>
        </div>
    </div>
</section>
  )
}

export default Pro1