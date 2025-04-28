import React from "react";
import SNOW from "./../../../assets/icons/SNOW.svg";
import "./techStackGrid.css"; // import the CSS file

const TechStackGrid = () => {
    const skills = [
        {
            name: "JAVA",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
            name: "REACT",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
            name: "TYPESCRIPT",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
            name: "SNOWFLAKE",
            icon: SNOW,
        },
        {
            name: "MYSQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
            name: "GIT",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
            name: "AWS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
        {
            name: "JAVASCRIPT",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
            name: "HTML",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
            name: "CSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
            name: "SPRINGBOOT",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        },
        {
            name: "LINUX",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        },
    ];

    const showSkill = (skill, className) => {
        return (
            <div className={(className ? className + " " : "") + "skills_item"}>
                <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skills_item-icon"
                />
                <div className="skills_item-name">{skill.name}</div>
            </div>
        );
    };

    return (
        <div className="tech-container">
            <div className="skills_row">
                {showSkill(skills[0])}
                {showSkill(skills[1])}
            </div>
            <div className="skills_row">
                {showSkill(skills[2])}
                {showSkill(skills[3])}
                {showSkill(skills[4])}
            </div>
            <div className="skills_row">
                {showSkill(skills[5])}
                {showSkill(skills[6])}
            </div>
            <div className="skills_row">
                {showSkill(skills[7])}
                {showSkill(skills[8])}
                {showSkill(skills[9])}
            </div>
            <div className="skills_row">
                {showSkill(skills[10])}
                {showSkill(skills[11])}
            </div>
        </div>
    );
};

export default TechStackGrid;
