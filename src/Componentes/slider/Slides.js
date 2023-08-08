import React from "react";
import "./Slider.css";

const slidesInfo = [
    {
        src: 'https://cdn.pixabay.com/photo/2016/07/03/18/04/tech-1495181_1280.jpg',
        link: "https://slack-clone-d74d5.web.app",   
        desc: "Slack Clone"
    },
    {
        src: 'https://cdn.pixabay.com/photo/2017/07/01/19/48/background-2462434_1280.jpg',
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
