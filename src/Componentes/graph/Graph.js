import React from "react";
import SkillBar from "react-skillbars";
import './Graph.css';

const SKILLS6 = [
    {
        type: "CSS/HTML",
        level: 100,
        color: { bar: "#F24E29", title: { text: "#fff", background: "#c22400" } }
    },
    {
        type: "Javascript",
        level: 80,
        color: { bar: "#124e8c", title: { text: "#fff", background: "#0d3760" } }
    },
    {
        type: "Python",
        level: 60,
        color: { bar: "#f55858", title: { text: "#fff", background: "#D92929" } }
    },
    {
        type: "React",
        level: 75,
        color: { bar: "#0F758C", title: { text: "#fff", background: "#0c4451" } }
    },
    {
        type: "Java",
        level: 50,
        color: { bar: "#D9C5B4", title: { text: "#fff", background: "#d2b69e" } }
    },
    {
        type: "FireBase",
        level: 80,
        color: { bar: "#A569BD", title: { text: "#111", background: "#d0ac42" } }
    },
    {
        type: "SQL",
        level: 90,
        color: { bar: "#27ae60", title: { text: "#fff", background: "#1e8047" } }
    },
    {
        type: "MongoDB",
        level: 80,
        color: { bar: "#F2C849", title: { text: "#111", background: "#d0ac42" } }
    },
    {
        type: "Api REST",
        level: 70,
        color: { bar: "#34495E", title: { text: "#111", background: "#d0ac42" } }
    },
    {
        type: "Metodología SCRUM",
        level: 80,
        color: { bar: "#D0D3D4", title: { text: "#111", background: "#d0ac42" } }
    },



];

const Graph = () => (
    <div>
        <div id="elementAllBarAllTextAllBg">
            <div>
                <pre>
                    <br />
                </pre>
            </div>
            <SkillBar skills={SKILLS6} />
        </div>
        <br />
    </div>
);

export default Graph;
