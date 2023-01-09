import React from 'react';
import Artifact from './Artifact';
import td_bg from '../media/images/td-bg.png';
import td_cover from '../media/images/td-cover.png'
import cw_cover from '../media/images/cw-cover.png'
import cw_bg from '../media/images/caseware-bg.jpeg';
import jw_cover from '../media/images/jw-cover.png';
import sc_cover from '../media/images/sc-cover.png';
import jsp_cover from '../media/images/jsp-cover.png';
import sac_cover from '../media/images/sac-cover.png';
import ArtifactInfo from './ArtifactInfo';
import { CSSTransition } from 'react-transition-group';
import "../styling/ArtifactSection.scss"

class ArtifactSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            artifactData: [
                {
                    title: "TD Bank Group",
                    subtitle: "Work Experience",
                    role: "Software Engineer Intern",
                    duration: "4 Months",
                    location: "Toronto, CA",
                    description: "As a software engineer at TD, I worked closely with the application security team to remediate security vulnerabilities in our web applications. I was able to mitigate risk of attacks such as cross-site scripting and OS command injection by patching holes across our codebase where input was not properly validated/sanitized. Furthermore, I worked with a DevOps engineer to help onboard more security testing processes wihtin our Jenkins pipeline.",
                    skills: ['Java Spring Boot', 'JavaScript'],
                    coverImageLink: td_cover,
                    backgroundImageLink: td_bg,
                    selected: false
                },
                {
                    title: "Caseware",
                    subtitle: "Work Experience",
                    role: "Software Developer Co-op",
                    duration: "8 Months",
                    location: "Toronto, CA",
                    description: "During my time at CaseWare, I worked primarily as a front-end developer on their cloud accounting solution. I helped improve the UI by fixing over 30 bugs and implementing a number of features. My proudest accomplishment was completing an entire epic by myself, which was for a feature that helped users with risk management by automatically detecting and categorizing changes on the page. This experience taught me a lot about about how to work in a real Agile environment.",
                    skills: ['Angular', 'Java', 'TypeScript'],
                    coverImageLink: cw_cover,
                    backgroundImageLink: cw_bg,
                    selected: false
                },
                {
                    title: "Personal Portfolio Website",
                    subtitle: "Side Project",
                    description: "My portfolio website that you are currently on! I am actively refactoring it as I learn more about developing with React. And yes, the design of this website is heavily inspired by video game console dashboards, PlayStation's in particular (please don't sue me, Sony).",
                    skills: ['React'],
                    coverImageLink: jw_cover,
                    selected: false,
                    redirectTo: "https://github.com/jaedonw"
                },
                {
                    title: "SPORTCRED",
                    subtitle: "Side Project",
                    description: "A web application centered around sports where you can share your hot takes, play trivia, check out the latest scores and more! Each user has a score that measures their knowledge and credibility, so that you know when someone is trustworthy or just another Skip Bayless. I worked on both the front-end and backend for features such as password recovery, playoff bracket prediction, and profile customization.",
                    skills: ['Java', 'React'],
                    coverImageLink: sc_cover,
                    selected: false,
                    redirectTo: "https://github.com/jaedonw/SportCred"
                },
                {
                    title: "Spotify API Clone",
                    subtitle: "Side Project",
                    description: "A REST API for a Spotify-like music application.",
                    skills: ['Java Spring Boot', 'MongoDB', 'Neo4j'],
                    coverImageLink: sac_cover,
                    selected: false,
                    redirectTo: "https://github.com/jaedonw/Spotify-Microservices"
                },
                {
                    title: "Java Shell Program",
                    subtitle: "Side Project",
                    description: "A Java program meant to mimic a Bash shell within the console. Some of the features I was responsible for implementing include: the command interpreter, the mock file system, and commands such as cp, mkdir, and rm.",
                    skills: ['Java'],
                    coverImageLink: jsp_cover,
                    selected: false,
                    redirectTo: "https://github.com/jaedonw/Java-Shell-Program"
                }
            ],
            artifactSelected: null
        };
    }

    handleSelect(i) {
        const newArtifactData = this.state.artifactData.slice();
        newArtifactData[i].selected = true;
        this.props.onSelect(newArtifactData[i].backgroundImageLink);
        this.setState({ artifactData: newArtifactData, artifactSelected: i });
    }

    handleDeselect(i) {
        const newArtifactData = this.state.artifactData.slice();
        newArtifactData[i].selected = false;
        this.props.onSelect(null);
        this.setState({ artifactData: newArtifactData, artifactSelected: null });
    }

    render() {
        //const shift = 100 * Math.min(this.state.artifactSelected, this.state.artifactData.length - 4);

        const artifacts = this.state.artifactData.map((artifact, index) =>
            <Artifact key={index}
                index={index}
                title={artifact.title}
                subtitle={artifact.subtitle}
                description={artifact.description}
                coverImageLink={artifact.coverImageLink}
                selected={artifact.selected}
                onSelect={(i) => this.handleSelect(i)}
                onDeselect={(i) => this.handleDeselect(i)}
                redirectTo={artifact.redirectTo ? artifact.redirectTo : null}
            //shift={shift}
            />
        );

        const backgroundImage = {
            backgroundImage: 'url("' + (this.state.artifactSelected != null ? this.state.artifactData[this.state.artifactSelected].backgroundImageLink : '') + '")'
        };

        return (
            <div className="ArtifactSection">
                <div className="carousel">
                    {artifacts}
                </div>
                {this.state.artifactSelected != null && <ArtifactInfo artifact={this.state.artifactData[this.state.artifactSelected]}/>}
            </div>
        );
    }
}

export default ArtifactSection;