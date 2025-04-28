import React from "react";
import "./aboutMe.css";
import resumeData from "../../assets/resume/resume.json";
import resume from "../../assets/resume/Gaurav_Doongarwal_Resume_2025.pdf";
import profilePic from "../../assets/images/Photograph.jpg";
import Projects from "../projects/projects";

const AboutMe = ({ scrollRef }) => {
    // const getPrioritySkills = () => {
    //     return resumeData.skills.prioritySkills.map((skill) => {
    //         return <span className="About-Me-skillItem">{skill}</span>;
    //     });
    // };
    return (
        <>
            <section className="About-Me">
                <div className="About-Me-container" ref={scrollRef}>
                    <div className="About-Me-heading">
                        <span>ABOUT ME</span>
                    </div>
                    <hr className="About-Me-divider" />
                    <div className="About-Me-body">
                        <div id="About-Me-image-div">
                            <img
                                id="About-Me-image"
                                src={profilePic}
                                alt="Profile-Picture"
                            ></img>
                        </div>
                        <div className="About-Me-info">
                            <div id="About-Me-infoText">
                                <span>{resumeData.aboutMe}</span>
                                <br />
                                <br />
                                <span className="Current-Status-Label">
                                    Current Position:{" "}
                                </span>
                                <span>{resumeData.workEx[0].position}</span>
                                <br />
                                <span className="Current-Status-Label">
                                    Current Location:{" "}
                                </span>
                                <span>
                                    {resumeData.address.currentAddress.city}
                                    {", "}
                                    {resumeData.address.currentAddress.country}
                                </span>
                                {/* <div id="About-Me-skillsHead">
                                    <span>KEY SKILLS</span>
                                </div>
                                <div id="About-Me-skills">
                                    {getPrioritySkills()}
                                </div> */}
                            </div>
                            <div id="About-Me-ButtonDiv">
                                <a
                                    id="About-Me-Button"
                                    href={resume}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Projects />
        </>
    );
};

export default AboutMe;
