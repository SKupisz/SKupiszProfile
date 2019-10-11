import React from 'react';

import "../css/projects/main.css";

import PreOperations from "../projects/preOperations.jsx";

export default class Portfolio extends React.Component{
    constructor(props){
        super(props);
        this.skillsRef = React.createRef();
        this.projectsRef = React.createRef();
        this.skillsBtn = React.createRef();
        this.projectsBtn = React.createRef();
        this.titleRef = React.createRef();
        this.descRef = React.createRef();
        this.classIteration = 0;
        this.backgroundClassesList = ["starter-background","sgknews-background","delta-background","hackclub-background"];
        this.titlesList = [["Projekty","Pozwól, że ci pokażę nieco z moich projektów"],
        ["SGK-news.pl","Założyciel i dyrektor generalny"],
        ["Szyfr Delta","Pomysłodawca i założyciel projektu"],
        ["Hackclub.pl","Współzałożyciel i prowadzący"]];
    }
    skillsOn(){
        this.skillsRef.current.classList.remove("hidden");
        this.projectsRef.current.classList.add("hidden");
    }
    projectsOn(){
        this.skillsRef.current.classList.add("hidden");
        this.projectsRef.current.classList.remove("hidden");
    }
    changeSlide(direction){
        switch(direction){
            case 1:
                if(this.classIteration+1 < this.backgroundClassesList.length){
                    this.projectsRef.current.classList.remove(this.backgroundClassesList[this.classIteration]);
                    this.classIteration++;
                    this.projectsRef.current.classList.add(this.backgroundClassesList[this.classIteration]);
                    this.titleRef.current.innerHTML = this.titlesList[this.classIteration][0];
                    this.descRef.current.innerHTML = this.titlesList[this.classIteration][1];
                }
                break;
            case -1:
                    if(this.classIteration-1 > -1){
                        this.projectsRef.current.classList.remove(this.backgroundClassesList[this.classIteration]);
                        this.classIteration--;
                        this.projectsRef.current.classList.add(this.backgroundClassesList[this.classIteration]);
                        this.titleRef.current.innerHTML = this.titlesList[this.classIteration][0];
                        this.descRef.current.innerHTML = this.titlesList[this.classIteration][1];
                    }
                break;
            default:
                break;
        }
    }
    render(){
        let controlPanel = new PreOperations();
        controlPanel.check();
        let mainHeader = controlPanel.giveHeaderContent();
        let skillsBtnContent = controlPanel.giveSkillsBtnContent();
        let projectsBtnContent = controlPanel.giveProjectsBtnContent();
        this.titlesList = controlPanel.giveSlidesContent();
        let oopContent = controlPanel.giveOopContent(),auContent = controlPanel.giveAuContent();
        let starterProjectsTitle = this.titlesList[0][0],starterProjectsContent = this.titlesList[0][1];
        return(<div className = "portfolio">
            <header className = "welcome-header">{mainHeader}</header>
            <nav className = "buttons-nav">
                <button ref = {this.skillsBtn} onClick = {() => {this.skillsOn()}}>
                    {projectsBtnContent}
                </button>
                <button ref = {this.projectsBtn} onClick = {() => {this.projectsOn()}}>
                    {skillsBtnContent}
                </button>
            </nav>
            <section ref = {this.skillsRef} className = "subsection-container skills">
                <div className = "skill">
                    PHP 7.0
                </div>
                <div className = "skill">
                    JS
                </div>  
                <div className = "skill">
                    ReactJS
                </div>   
                <div className = "skill">
                    CSS
                </div>   
                <div className = "skill">
                    MySQL
                </div>  
                <div className = "skill">
                    C++
                </div> 
                <div className = "skill">
                    Python
                </div>   
                <div className = "skill">
                    {oopContent}
                </div>  
                <div className = "skill">
                    {auContent}
                </div>                
            </section>
            <section ref = {this.projectsRef} className = "subsection-container projects starter-background hidden">
                <header ref = {this.titleRef} className = "projects-header">{starterProjectsTitle}</header> 
                <main ref = {this.descRef} className = "projects-positions">{starterProjectsContent}</main>          
                <nav className = "navigate-interrupt">
                    <button className = "navigateBtn"  onClick = {() => {this.changeSlide(-1)}}>
                        Previous
                    </button>
                    <button className = "navigateBtn"  onClick = {() => {this.changeSlide(1)}}>
                        Next
                    </button>
                </nav>
            </section>
        </div>);
    }
}