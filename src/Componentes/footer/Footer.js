import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-info'>
                <h1>Juan Pablo Sanchez Rodriguez</h1>
            </div>
            <div className='footer-contact'>
                <h3>Contactame:  +57 314 445 7149</h3>
            </div>
            <div className='footer-sns'>
                <div className='desing-by'>
                    Desing By Juan Sanchez
                </div>
                <div className='sns-links'>
                    <a href='https://wa.me/573144457149' target='_blank' rel="noreferrer">
                        <i className='fab fa-whatsapp whatsapp'></i>
                    </a>
                    <a href='https://www.instagram.com/juanpa_sanchez8/' target='_blank' rel="noreferrer">
                        <i className='fab fa-instagram instagram'></i>
                    </a>
                    <a href='https://www.facebook.com/Hipst.7/' target='_blank' rel="noreferrer">
                        <i className='fab fa-facebook facebook'></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer