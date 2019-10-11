export default class PreOperations{
    constructor(){
      this.nowHash = window.location.hash;
      this.mainHeader = {"#/polski":"Moje portfolio","#/english":"My career"};
      this.skillsBtn = {"#/polski":"Umiejętności","#/english":"Skills"};
      this.projectsBtn = {"#/polski":"Projekty","#/english": "Projects"};
      this.backgrounds = {"#/polski": [["Projekty","Pozwól, że ci pokażę nieco z moich projektów"],
      ["SGK-news.pl","Założyciel i dyrektor generalny"],
      ["Szyfr Delta","Pomysłodawca i założyciel projektu"],
      ["Hackclub.pl","Współzałożyciel i prowadzący"]],"#/english":[["Projects","Let me show you some of my projects"],
      ["SGK-news.pl","Founder and CEO"],
      ["Delta Cypher","Originator and founder"],
      ["Hackclub.pl","CO-founder and emcee"]]};
      this.oop = {"#/polski": "Programowanie obiektowe","#/english":"Object Oriented Programming"};
      this.au = {"#/polski": "Automatyzacja (python)","#/english":"Automatization (python)"}
      this.check = this.check.bind(this);
      this.giveHeaderContent = this.giveHeaderContent.bind(this);
      this.giveSkillsBtnContent = this.giveSkillsBtnContent.bind(this);
      this.giveProjectsBtnContent = this.giveProjectsBtnContent.bind(this);
      this.giveSlidesContent = this.giveSlidesContent.bind(this);
      this.giveOopContent = this.giveOopContent.bind(this);
      this.giveAuContent = this.giveAuContent.bind(this);
      if(this.nowHash == "")
      {
        window.location.hash = "#/english";
      }
    }
    check(){
      if(this.nowHash != window.location.hash){
        window.location.reload();
      }
      setTimeout(this.check,100);
    }
    giveHeaderContent(){
        return this.mainHeader[this.nowHash];
    }
    giveSkillsBtnContent(){
        return this.skillsBtn[this.nowHash];
    }
    giveProjectsBtnContent(){
        return this.projectsBtn[this.nowHash];
    }
    giveSlidesContent(){
        return this.backgrounds[this.nowHash];
    }
    giveAuContent(){
        return this.au[this.nowHash];
    }
    giveOopContent(){
        return this.oop[this.nowHash];
    }
    
  }