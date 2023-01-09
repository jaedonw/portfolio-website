import React from 'react';
import "../styling/Artifact.scss"

function Artifact(props) {

    const dynamicStyle = {
        backgroundImage: 'url("' + props.coverImageLink + '")',
        //transform: 'translateX(-' + props.shift + 'px)'
    };

    const artifact = (
        <div className="innerArtifact"
             style={dynamicStyle}
             onMouseEnter={() => props.onSelect(props.index)}
             onMouseLeave={() => props.onDeselect(props.index)}>
        </div>
    );

    return (
        <div className="Artifact">
            {props.redirectTo ? <a href={props.redirectTo} target="_blank" rel="noreferrer">{artifact}</a> : artifact}
        </div>
    );
}

export default Artifact;