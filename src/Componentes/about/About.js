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
            <p>Programador Junior con conocimiento intermedio en Excel,
              software y hardware, adicionalmente cuento con bases
              en lenguaje de programación como Python,
              Java, JavaScript, CSS, SQL, PostgreSQL, NodeJS, manejo de frameworks
              (Vue, React, Angular,Flask, Django) metodologías agiles (SCRUM), JSON Web Tokens,
              GIT, API Rest, todos estos conocimientos los he adquirido por medio del
              programa del gobierno Misión TIC 2022 con la Universidad Nacional
              de Colombia y un técnico en Programas Informáticos Y bases de Datos.</p>
        </div>
    </div>
  )
}


export default About