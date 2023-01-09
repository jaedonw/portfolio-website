import React from 'react';
import "../styling/StartupScreen.scss"
import logo from "../media/images/logo_white.png"

function StartupScreen(props) {
  return (
    <div className="StartupScreen">
        <div className="instruction">Press the button below to enter site.</div>
        <div className="container">
            <img className="logo" src={logo} onClick={props.onClick} alt="logo"/>
        </div>
    </div>
  );
}

export default StartupScreen;
