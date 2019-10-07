import React from 'react';

import github from "../img/icons/github.png";
import twitter from "../img/icons/twitter.png";
import linkedin from "../img/icons/linkedin.svg";
import "../css/main/welcomeSite.css";

import PreOperations from "../welcome/preOperations.jsx";

export default class Welcome extends React.Component{
    render(){
        let controlPanel = new PreOperations();
        controlPanel.check();
        let welcomeContnent = controlPanel.giveWelcomeContent();
        let shDescContent = controlPanel.giveShortDescContent();
        let contactDescContent = controlPanel.giveContactDescContent();
        return(
            <div className = "welcome">
                <header className = "welcome-header">{welcomeContnent}</header>
                <article className = "short-describe">{shDescContent}</article>
                <article className = "tech-describe">
                    {contactDescContent}
                </article>
                <aside className = "my-profiles">
                    <a target = "_blank" href = "https://github.com/SKupisz">
                    <button className = "go-to github">
                        <img src = {github} className = "go-toIcon"/>
                        Github</button>
                    </a>
                    <a target = "_blank" href = "https://twitter.com/granarax">
                        <button className = "go-to tweeter">
                        <img src = {twitter} className = "go-toIcon twitterIcon"/>
                        Tweeter</button>
                    </a>
                    <a target = "_blank" href = "https://www.linkedin.com/in/szymon-kupisz-0a8a91193/">
                        <button className = "go-to linkedIn">
                        <img src = {linkedin} className = "go-toIcon twitterIcon"/>
                        LinkedIn</button>
                    </a>
                </aside>
            </div>
        );
    }
}