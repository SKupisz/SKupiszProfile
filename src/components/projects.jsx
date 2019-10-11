import React from 'react';

import "../css/projects/main.css";

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
        /* TODO: slider - implementacja i mechanika z osobną klasą do tworzenia kolejnych slajdów */
    }
    skillsOn(){
        this.skillsRef.current.classList.remove("hidden");
        this.projectsRef.current.classList.add("hidden");
    }
    projectsOn(){
        this.skillsRef.current.classList.add("hidden");
        this.projectsRef.current.classList.remove("hidden");
    }
    changeSlide(e,direction){
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
        return(<div className = "portfolio">
            <header className = "welcome-header">Moje Portfolio</header>
            <nav className = "buttons-nav">
                <button ref = {this.skillsBtn} onClick = {() => {this.skillsOn()}}>
                    Umiejętności
                </button>
                <button ref = {this.projectsBtn} onClick = {() => {this.projectsOn()}}>
                    Projekty
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
                    Programowanie Objektowe
                </div>  
                <div className = "skill">
                    Automatyzacja (python)
                </div>                
            </section>
            <section ref = {this.projectsRef} className = "subsection-container projects starter-background hidden">
                <header ref = {this.titleRef} className = "projects-header">Projekty</header> 
                <main ref = {this.descRef} className = "projects-positions">Pozwól, że ci pokażę nieco z moich projektów</main>          
                <nav className = "navigate-interrupt">
                    <button className = "navigateBtn"  onClick = {() => {this.changeSlide(this.event,-1)}}>
                        Previous
                    </button>
                    <button className = "navigateBtn"  onClick = {() => {this.changeSlide(this.event,1)}}>
                        Next
                    </button>
                </nav>
            </section>
        </div>);
    }
}