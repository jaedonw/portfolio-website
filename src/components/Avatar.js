import React from 'react';
import headshot from '../media/images/headshot.JPG'
import "../styling/Avatar.scss";

function Avatar(props) {
    return (
        <div className="Avatar" onClick={() => props.onShowProfile()}>
            <img className={props.interactable ? 'profile-photo interactable' : 'profile-photo'} src={headshot} alt="Headshot" />
            <span className="tooltip">View Profile</span>
        </div>
    );
}

export default Avatar;