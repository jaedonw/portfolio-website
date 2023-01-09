import React from 'react';
import "../styling/ArtifactInfo.scss";
import left_click_icon from '../media/images/left-click-icon.png'

function ArtifactInfo(props) {

    return (
        <div className="ArtifactInfo">
            <div className="titles">
                <h2>{props.artifact.title} |</h2>
                <h3>{props.artifact.subtitle}</h3>
            </div>
            <div className="details">
                {props.artifact.role &&
                    <div className="role">
                        <h4>Role</h4>
                        <span>{props.artifact.role}</span>
                    </div>
                }
                {props.artifact.duration &&
                    <div className="duration">
                        <h4>Duration</h4>
                        <span>{props.artifact.duration}</span>
                    </div>
                }
                {props.artifact.location &&
                    <div className="location">
                        <h4>Location</h4>
                        <span>{props.artifact.location}</span>
                    </div>
                }
                <div className="description">
                    <h4>Description</h4>
                    <p>{props.artifact.description}</p>
                </div>
                <div className="skills">
                    <h4>Skills</h4>
                    <ul>{props.artifact.skills.map((skill, i) => <li key={i}>{skill}</li>)}</ul>
                </div>
            </div>
            {props.artifact.redirectTo &&
                <div className="footer">
                    <img src={left_click_icon} alt="mouse icon" />
                    <span>View details</span>
                </div>
            }
        </div>
    );
}

export default ArtifactInfo;