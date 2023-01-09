import React, { useState } from 'react';
import ArtifactSection from './ArtifactSection';
import HeaderBar from './HeaderBar';
import "../styling/Dashboard.scss";
import ProfilePopover from './ProfilePopover';
import { CSSTransition } from 'react-transition-group';

function Dashboard() {
    const [showProfilePopover, setShowProfilePopover] = useState(false);
    const [backgroundImageLink, setBackgroundImageLink] = useState(null)

    return (
        <div className="Dashboard">
            <CSSTransition
                in={backgroundImageLink != null}
                timeout={200}
                classNames="background"
                unmountOnExit={true}>
                <div className="background">
                    <img className="background-image" src={backgroundImageLink} alt="dashboard background" />
                    <div className="dark-layer"></div>
                </div>
            </CSSTransition>
            <HeaderBar onShowProfile={() => setShowProfilePopover(true)} />
            <ArtifactSection onSelect={(link) => setBackgroundImageLink(link)} />
            <ProfilePopover show={showProfilePopover} onCollapseProfile={() => setShowProfilePopover(false)} />
        </div>
    );
}

export default Dashboard;