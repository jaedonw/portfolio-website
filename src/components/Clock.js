import React from 'react';
import "../styling/Clock.scss";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className="Clock">
                <span>{this.state.date.toLocaleTimeString([], {hour: 'numeric', minute:'2-digit', hour12: true})}</span>
            </div>
        );
    }
}

export default Clock;