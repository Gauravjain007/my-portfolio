import React, { useRef } from "react";
import IntroConstants from "./introduction-constants";
import "./introduction.css";
import AboutMe from "../aboutMe/aboutMe";

const Introduction = () => {
    const ref = useRef(null);

    const handleButtonClick = () => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <section className="Intro">
                <div className="Intro-container">
                    <div className="intro-text">
                        <span>Hi, my name is </span>
                        <span id="intro-name">{IntroConstants.NAME} </span>
                        <br />
                        <span>I'm a </span>
                        <span>{IntroConstants.PROFILE}.</span>
                    </div>
                    <div>
                        <button id="intro-button" onClick={handleButtonClick}>
                            Know More
                        </button>
                    </div>
                </div>
            </section>
            <AboutMe scrollRef={ref} />
        </>
    );
};

export default Introduction;
