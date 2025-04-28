import React from "react";
import "./projects.css";
import gif from "../../assets/icons/scrollIndicator.gif";
import TechStackGrid from "../aboutMe/techStackGrid/techStackGrid";

const Projects = () => {
    return (
        <>
            <section className="Projects">
                <div className="Projects-container">
                    <div className="Projects-heading">
                        <span>PROJECTS</span>
                    </div>
                    {/* <div className="Projects-body">
                        <TechStackGrid></TechStackGrid>
                    </div> */}
                </div>
            </section>
            <div className="Downwards-Arrow">
                <img
                    src={gif}
                    alt="scrollDown"
                    style={{ width: "4rem", height: "4rem" }}
                ></img>
            </div>
        </>
    );
};

export default Projects;
