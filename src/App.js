import React from "react";
import Box from "./components/Box.js";
import Clock from "./components/Clock.js";

class App extends React.Component {
    socials = ['Spotify', 'Facebook', 'Messenger', 'GitHub', 'ChatGPT', 'Newtab'];
    weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    state = {date: new Date()}

    constructor(props) {
        super(props);
        this.state = {
            launchDate: new Date(),
            date: new Date()
        };
    }

    getDate() {
        this.setState({
            date: new Date()
        });
    }

    getOrdinalNum(n) {
        return (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
    }

    getDayOfTheYear(){
        const now = this.state.date
        let start = new Date(now.getFullYear(), 0, 0);
        let diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
        let day = Math.floor(diff / (1000 * 60 * 60 * 24));
        return  day.toString();
    }

    render() {
        return (
            <div className="App">
                <div className="Information">
                    <h1>Hi iThomash</h1>
                    <h2>Today is {this.weekday[this.state.date.getDay().toString()]} {this.state.date.toLocaleDateString()}</h2>
                    <h2>Today is <mark className="green">{this.getDayOfTheYear() + this.getOrdinalNum(this.getDayOfTheYear())}</mark> day of the year, <mark className="green">{(this.state.date.getFullYear()%4) ? (365-this.getDayOfTheYear()).toString() : (366-this.getDayOfTheYear()).toString()}</mark> more to go!</h2>
                    <h2 id="clock"><Clock /></h2>
                </div>
                <div id="upcomingEvents">
                    No upcoming tasks
                </div>
                <div className="Boxes">
                    {this.socials.map((social) => (
                        <Box name={social} key={social} />
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
