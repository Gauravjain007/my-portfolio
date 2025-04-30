import React, { useState } from "react";
import resume from "../../assets/resume/resume.json";
import "./contactDetails.css";

const ContactDetails = () => {
    const contactTypes = [
        {
            name: "Github",
            icon: "https://img.icons8.com/?size=100&id=62856&format=png&color=FFFFFF",
            value: resume.contactDetails.github,
            isUrl: true,
        },
        {
            name: "Email",
            icon: "https://img.icons8.com/?size=100&id=Y2GfpkgYNp42&format=png&color=FFFFFF",
            value: resume.contactDetails.emailId,
        },
        {
            name: "Linkedin",
            icon: "https://img.icons8.com/?size=100&id=98960&format=png&color=FFFFFF",
            value: resume.contactDetails.linkedinUrl,
            isUrl: true,
        },
        {
            name: "Phone",
            icon: "https://img.icons8.com/?size=100&id=78382&format=png&color=FFFFFF",
            value: resume.contactDetails.phoneNo,
        },
    ];

    const [copied, setCopied] = useState({
        Email: false,
        Phone: false,
    });

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied({ ...copied, [type]: true });

            // Reset the copied state after 2 seconds
            setTimeout(() => {
                setCopied({ ...copied, [type]: false });
            }, 2000);
        });
    };
    const renderContact = ({ name, icon, value, isUrl }) => (
        <div className="contact-item">
            {isUrl ? (
                <a href={value} target="_blank" rel="noopener noreferrer">
                    <img src={icon} alt={name} className="contact-item-icon" />
                </a>
            ) : (
                <a
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => {
                        event.preventDefault();
                        copyToClipboard(value, name);
                    }}
                >
                    <img
                        src={icon}
                        alt={name}
                        className={`contact-item-icon ${
                            copied[name] ? "icon-clicked" : ""
                        }`}
                    />
                </a>
            )}
        </div>
    );
    return (
        <div className="contacts-container">
            {contactTypes.map(renderContact)}
        </div>
    );
};

export default ContactDetails;
