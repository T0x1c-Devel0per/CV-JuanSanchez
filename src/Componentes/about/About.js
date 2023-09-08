import React from 'react';
import './About.css';
import Photo from '../../media/Photo.jpg'



const About = () => {
  return (
    <div className='about-container'>
      <div className='about-img'>
        <img className='photo' src={Photo} alt="ProfileImagen" />
      </div>
      <div className='about-desc'>
        <h3>About me</h3>
        <p>
          Junior Programmer with strong knowledge in both software and hardware,
          supported by comprehensive training. I possess competence in various programming
          languages such as Python, Java, JavaScript, and proficiency in web technologies 
          like CSS and SQL. Furthermore, I have experience working with PostgreSQL databases
          and building applications using NodeJS and frameworks like React, Flask, and Django.
          My approach is rooted in agile methodologies, particularly SCRUM, and I have skills in 
          implementing JSON Web Tokens, GIT, and creating RESTful APIs.
        </p>
      </div>
    </div>
  )
}


export default About