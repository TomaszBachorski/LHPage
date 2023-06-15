import React from "react";
import { Facebook, Github, Messenger, Spotify } from "react-bootstrap-icons";
import chatgpt from "../assets/ChatGPT.jpg";
import google from "../assets/Google.png"

class Box extends React.Component {
    
    tag = null;
    href = "";
    
    render() {
        if (this.props.name === "Spotify") {
            this.tag = <Spotify size={100} color="#1DB954"/>;
            this.href = "spotify:track";
        }
        if (this.props.name === "Facebook") {
            this.tag = <Facebook size={100} color="#4267B2"/>;
            this.href = "https://www.facebook.com/";
        }
        if (this.props.name === "Messenger") {
            this.tag = <Messenger size={100} color="#00B2FF"/>;
            this.href = "https://www.messenger.com/";
        }
        if (this.props.name === "GitHub") {
            this.tag = <Github size={100} color="#f5f5f5"/>;
            this.href = "https://github.com/TomaszBachorski";
        }
        if (this.props.name === "ChatGPT") {
            this.tag = <img src={chatgpt} width="100" height="100" alt="chatgpt icon"></img>;
            this.href = "https://chat.openai.com/";
        }
        if (this.props.name === "Newtab") {
            this.tag = <img src={google} width="100" height="100" alt="google icon"></img>;
            this.href = "https://www.google.com/"
        }

        
        return (
        <div className="IconBox">
            <a href = {this.href} target="blank" rel="noreferrer">{this.tag}</a>
        </div>)
    }
}

export default Box;