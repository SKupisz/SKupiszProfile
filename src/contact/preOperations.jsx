export default class PreOperations{
    constructor(){
      this.nowHash = window.location.hash;
      this.phone = {"#/polski": "Telefon kontaktowy: 884 104 499",
        "#/english": "Phone: +48 884 104 499"};
      this.email = {"#/polski": "Email: szym-ku@wp.pl",
        "#/english": "E-mail address: szym-ku@wp.pl"}
      
      this.check = this.check.bind(this);
      if(this.nowHash == "")
      {
        window.location.hash = "#/";
      }
    }
    check(){
      if(this.nowHash != window.location.hash){
        window.location.reload();
      }
      setTimeout(this.check,100);
    }
    giveData(){
        return [this.phone[this.nowHash],this.email[this.nowHash]];
    }
    
  }