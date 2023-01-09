import React from 'react';
import Avatar from './Avatar';
import Clock from './Clock';
import logo from "../media/images/logo_white.png"
import "../styling/HeaderBar.scss";

function HeaderBar(props) {
    return (
        <div className="HeaderBar">
            <div className="container">
                <img className="logo" src={logo} onClick={props.onClick} alt="logo"/>
                <Clock />
            </div>
            <div className="user">
                <div className="avatar-container">
                    <Avatar interactable={true} onShowProfile={() => props.onShowProfile()}/>
                </div>
                <span className="username">Jaedon Wong</span>
            </div>
        </div>
    );
}

export default HeaderBar;