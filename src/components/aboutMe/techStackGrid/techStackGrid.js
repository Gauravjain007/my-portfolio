import React from "react";
import SNOW from "./../../../assets/icons/SNOW.svg";
import "./techStackGrid.css"; // import the CSS file

const TechStackGrid = () => {
    const technologies = [
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
    ];

    return (
        <div className="tech-container">
            <div className="tech-grid">
                {technologies.map((tech, index) => (
                    <div key={index} className="technology-div">
                        <div className="tech-img-div">
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="tech-img"
                            />
                        </div>
                        <div className="tech-name">{tech.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStackGrid;
