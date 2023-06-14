import React from "react";
import { Facebook, Github, Messenger, Spotify } from "react-bootstrap-icons";
import chatgpt from "../assets/ChatGPT.jpg";
import google from "../assets/Google.png"

class Box extends React.Component {
    
    tag = null;

    
    render() {
        console.log(this.props.name);

        if (this.props.name === "Spotify") {
            this.tag = <Spotify size={100} color="#1DB954"/>;
        }
        if (this.props.name === "Facebook") {
            this.tag = <Facebook size={100} color="#4267B2"/>;
        }
        if (this.props.name === "Messenger") {
            this.tag = <Messenger size={100} color="#00B2FF"/>;
        }
        if (this.props.name === "GitHub") {
            this.tag = <Github size={100} color="#171515"/>;
        }
        if (this.props.name === "ChatGPT") {
            this.tag = <img src={chatgpt} width="100" height="100" alt="chatgpt icon"></img>;
        }
        if (this.props.name === "Newtab") {
            this.tag = <img src={google} width="100" height="100" alt="google icon"></img>;
        }

        
        return (
        <div className="IconBox">
            {this.tag}
        </div>)
    }
}

export default Box;