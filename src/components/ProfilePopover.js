import React from 'react';
import Avatar from './Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faXmark, faFile } from '@fortawesome/free-solid-svg-icons';
import "../styling/ProfilePopover.scss";

function ProfilePopover(props) {
    const contactData = [
        {
            icon: faEnvelope,
            desc: "jaedon.wong@mail.utoronto.ca",
            redirectTo: "mailto:jaedon.wong@mail.utoronto.ca"
        },
        {
            icon: faLinkedin,
            desc: "linkedin.com/in/jaedonwong",
            redirectTo: "https://www.linkedin.com/in/jaedonwong/"
        },
        {
            icon: faGithub,
            desc: "github.com/jaedonw",
            redirectTo: "https://github.com/jaedonw"
        },
        {
            icon: faFile,
            desc: "My Resume",
            redirectTo: "https://docs.google.com/document/d/1KNo6cEsklNRffzV45AUEQcAS-TJKRH3H8PVrrvIYXSc/edit?usp=share_link"
        }
    ];

    const methodsOfContact = contactData.map((method, i) =>
        <a key={i} className="method" href={method.redirectTo} target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="icon" icon={method.icon}/>
            <span>{method.desc}</span>
        </a>
    );

    return (
        <div className={props.show ? "ProfilePopover show" : "ProfilePopover" }>
            <div className="dim"></div>
            <div className="profile-window">
                <FontAwesomeIcon className="collapse" icon={faXmark} onClick={() => props.onCollapseProfile()} />
                <div className="user">
                    <div className="avatar-container">
                        <Avatar />
                    </div>
                    <div className="nameplate">
                        <span className="name">Jaedon Wong</span>
                        <span className="location">Toronto, ON, Canada</span>
                    </div>
                </div>
                <div className="contact">
                    <h2>Contact and Links</h2>
                    {methodsOfContact}
                </div>
                <div className="about">
                    <h2>About</h2>
                    <p>
                        I'm a 4th year student at the University of Toronto studying computer science with a specialization in Software Engineering. I'm a creative at heart and see software
                        engineering as a medium through which I can express my creativity. I like innovating to solve complex problems and build software that enriches the lives of others or that
                        I simply want to exist in the world. 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProfilePopover;