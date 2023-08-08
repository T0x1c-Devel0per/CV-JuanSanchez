import React from "react";
import "./Slider.css";

const slidesInfo = [
    {
        src: 'https://cdn.dribbble.com/users/1566216/screenshots/4181141/slack-logo.jpg',
        link: "https://slack-clone-d74d5.web.app",   
        desc: "Slack Clone"
    },
    {
        src: 'https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg',
        link: "https://www.example.com/project2",
        desc: "Proyecto 2"
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg',
        link: "https://www.example.com/project3",
        desc: "Proyecto 3"
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
