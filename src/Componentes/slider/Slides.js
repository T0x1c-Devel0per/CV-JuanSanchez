import React from "react";
import "./Slider.css";

const slidesInfo = [
    {
        src: 'https://cdn.pixabay.com/photo/2016/07/03/18/04/tech-1495181_1280.jpg',
        link: "https://slack-clone-d74d5.web.app/",   
        desc: "Slack Clone"
    },
    {
        src: 'https://cdn.pixabay.com/photo/2017/07/01/19/48/background-2462434_1280.jpg',
        link: "https://client-app007.netlify.app",
        desc: "User Management System (CRUD)."
    },
]

const slides = slidesInfo.map((slide, index) => (
    <a
        key={index}
        className="slide-container"
        href={slide.link}
        target="_blank"
        rel="noopener noreferrer"
    >
        <img src={slide.src} alt={slide.desc} />
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </a>
))

export default slides;
