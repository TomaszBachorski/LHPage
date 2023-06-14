import React from "react";
import Box from "./components/Box.js";

class App extends React.Component {
    socials = ['Spotify', 'Facebook', 'Messenger', 'GitHub', 'ChatGPT', 'Newtab'];


    render() {
        return (
            <div className="App">
                {this.socials.map((social) => (
                    <Box name={social} key={social} />
                ))}
            </div>
        );
    }
}

export default App;
