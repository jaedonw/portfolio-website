import React, { useState } from 'react';
import StartupScreen from './components/StartupScreen';
import Dashboard from './components/Dashboard';
import { CSSTransition } from 'react-transition-group';
import "./styling/App.scss"

function App() {
  const [showStartupScreen, setShowStartupScreen] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="App">
      <CSSTransition
        in={showStartupScreen}
        timeout={1000}
        classNames="startup"
        unmountOnExit={true}
        onExited={() => setShowDashboard(true)}>
        <StartupScreen onClick={() => setShowStartupScreen(false)} />
      </CSSTransition>
      {showDashboard && <Dashboard />}
    </div>
  );
}

export default App;
