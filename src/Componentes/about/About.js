import React from 'react';
import './About.css';
import Photo from '../../media/Photo3.jpg'



const About = () => {
  return (
    <div className='about-container'>
      <div className='about-img'>
        <img className='photo' src={Photo} alt ="ProfileImagen"/>
      </div>
        <div className='about-desc'>
            <h3>Sobre mi</h3>
            <p>
              Programador Junior con sólidos conocimientos en software y hardware, respaldados por una formación integral.
              Poseo competencia en diversos lenguajes de programación como Python, Java, JavaScript, y manejo de tecnologías web como CSS y SQL.
              Además, cuento con experiencia en el uso de bases de datos PostgreSQL y en la construcción de aplicaciones utilizando NodeJS y frameworks como React, Flask y Django.
              Mi enfoque se apoya en metodologías ágiles, especialmente en SCRUM, y tengo habilidad en la implementación de JSON Web Tokens, GIT y la creación de API Rest.
            </p>
        </div>
    </div>
  )
}


export default About