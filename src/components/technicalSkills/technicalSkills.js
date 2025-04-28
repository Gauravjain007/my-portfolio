import React from "react";
import "./technicalSkills.css";
import TechStackGrid from "./techStackGrid/techStackGrid";

const TechnicalSkills = ({ scrollRef }) => {
    return (
        <section className="TechnicalSkills">
            <div className="TechnicalSkills-container" ref={scrollRef}>
                <div className="TechnicalSkills-heading">
                    <span>TECHNICAL SKILLS</span>
                </div>
                <div className="TechnicalSkills-body">
                    <TechStackGrid></TechStackGrid>
                </div>
            </div>
        </section>
    );
};

export default TechnicalSkills;
