export default class PreOperations{
  constructor(){
    this.nowHash = window.location.hash;
    this.welcome = {"#/polski":"Kim jestem?","#/english":"Who am I?"};
    this.shortDesc = {"#/polski":"Jestem 16-letnim pasjonatem informatyki, w szczególności kryptografii i programowania webowego. Zacząłem programować, gdy miałem zaledwie 6 lat. Dzisiaj, mam własną grupę programistyczną - Antares, wraz z którą stworzyliśmy między innymi SGK-news - wolną gazetę internetową.",
    "#/english": "I am 16 years old IT passionate, mostly about cryptography and web programming. I started learning how to code when I was 6 years old. Today, I have my own IT group that I founded - Antares. We created many great and interesting projects - for example the SGK-news, free online newspaper."};
    this.contactDesc = {"#/polski":"O innych moich projektach możesz się dowiedzieć w sekcji portfolio. Jeśli chcesz się skontaktować, napisz na mój email, lub do mnie zadzwoń.",
    "#/english":"You can learn about my other projects in the portfolio section. If you want to contact me, write to me on my email or call me."};

    
    this.check = this.check.bind(this);
    this.giveWelcomeContent = this.giveWelcomeContent.bind(this);
    this.giveShortDescContent = this.giveShortDescContent.bind(this);
    this.giveContactDescContent = this.giveContactDescContent.bind(this);
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
  giveWelcomeContent(){
    return this.welcome[this.nowHash];
  }
  giveShortDescContent(){
    return this.shortDesc[this.nowHash];
  }
  giveContactDescContent(){
    return this.contactDesc[this.nowHash];
  }
  
}