import React from 'react';
import phpIMySQL from "../../img/blog/support/images/phpIMySQL.jpg";
import practicalSQLCourse from "../../img/blog/support/images/praktycznyKursSQL.jpg";
import PodstawyKryptografii from "../../img/blog/support/images/PodstawyKryptografii.jpg";
import DescribingPhoto from "../../img/blog/support/describingPhoto.jsx";

const phpAndMysqlDesc = 'Pierwszą książką na liście jest "PHP i MySQL. Tworzenie stron WWW. Wydanie V"  autorstwa Luke'+"'"+'a Wellinga i Laury Thompson.  Książkę tę polecam szczególnie początkującym programistom stron internetowych, a to ze względu na jej klarowny język, zrozumiały nawet dla nietechnicznych. Autorzy książki zastosowali się również do zasady "im ciekawsze przykłady, tym lepiej się nauczysz" - już w pierwszym rozdziale, po krótkim wstępie zaczynamy uczyć się zarówno teorii, jak i praktyki, kodując różnego rodzaju strony, od sklepu z częściami samochodowymi, do sklepu internetowego, własnych zakładek, a nawet i poczty elektronicznej. Jedyną wadą przy kodowaniu stron według wzorców w książce mogą być niektóre spolszczenia, ale na szczęście nie trudno jest je wyłapać i ich uniknąć.  Luke Welling i Laura Thompson nie zapomnieli też o części dotyczącej baz danych - poświęcili osobny rozdział na wyjaśnienie podstaw MySQL, a następnie pokazali, jak tą wiedzę zastosować i jak obsługiwać ten typ baz danych za pomocą PHP. A skoro o bazach danych mowa...';
const practicalSQLCourseDesc = '	Przez długi okres szukałem dostatecznie dobrego kompendium wiedzy na temat języka SQL. W niektórych książkach nie pasował mi sposób, w jaki autorzy wyjaśniali pojęcia, w innych zaś braki i nieprecyzyjność. Finalnie, znalazłem "Praktyczny kurs SQL" autorstwa Danuty Mendrali i Marcina Szeligi. To był strzał w dziesiątkę - wszystko, co potrzebne do obsługi baz danych SQL jest tam zawarte. Wszystko jest wytłumaczone bardzo klarownym , a przy tym profesjonalnym językiem. Osobiście polecam ją zarówno chcącym nauczyć się SQL-a, jak i doświadczonym programistom, chcącym się dowiedzieć czegoś nowego lub uporządkować sobie teorię.';
const basicsOfCryptographyDesc = '	Teraz przejdźmy ze sfery programowania stron internetowych i baz danych, do czegoś, co większość osób zazwyczaj kojarzy z filmami takimi jak Mission Impossible, Jamesem Bondem, czy Mr. Robot - mowa tu o kryptografii i szyfrowaniu. Z książki "Podstawy Kryptografii. Wydanie III", napisanej przez Marcina Karbowskiego, wiele się nauczyłem nie tylko na temat rozmaitych systemów szyfrowania - od steganografii, aż do kryptosystemu RSA. Z czasem, po zagłębianiu się w lekturę tej książki, sam również zacząłem tworzyć własne szyfry, co pozwoliło mi nie tylko praktykować wiedzę zawartą w książce, ale i rozwinąć kreatywność. Dla kogo jest ta książka? Polecam przeczytanie jej szczególnie adeptom kryptografii, będzie ona również dobra dla tych osób, które nigdy wcześniej się tą dziedziną nie interesowały.';

const beginning = ["In today's world we can learn programming from many sources: youtube tutorials, online courses, stack overflow etc. However, programming books are also a popular source of IT knowledge. Today, I will show you some of the books that I use while programming.",
"W dzisiejszym świecie wiedzę o programowaniu możemy bez problemu znaleźć w internecie: tutoriale na yt, kursy do kupienia, stack overflow itp. Jednakową popularnością , co interentowe źródła, cieszą się książki. Dzisiaj pokażę, z jakich książek korzystam w programowaniu zarówno na codzień, jak i w awaryjnych sytuacjach."];
const articles = ['The first title on my list is "PHP and MySQL. Making websites. Edition V" written by Luke Welling and Laura Thompson.'
+'I recommend this book especially to beginners because of clear language, understandable even for non-technical people. The authors of this book successfully applied the rule that the more interesting examples you are given, the faster you learn. Already in the first chapter,'+
'we start learning theory and practice together by coding a lot of projects, from a car parts store and online shop through bookmarks even to our own mailbox. Luke Welling and Laura Thompson didn'+"'"+'t forget about databases, too - they wrote a separate chapter on the basics of MySQL, and then showed '+
'how to use MySQL with PHP. And when it comes down to databases...',
phpAndMysqlDesc,
'For a very long time, I had been searching for a good compendium about SQL. Some books were not accurate enough, others disappointed me with the language used by the authors. Finally, I found "Practical SQL Course" by Danuta Mendrala and Marcin Szeliga.'+
' It was an exellent choice - there is all you need to learn about SQL. The language is really understandable and clear and also very professional. I advise to read this book both to beginners and to experienced programmers who want to learn something new or check something about SQL.',
practicalSQLCourseDesc,
'Now let'+"'"+'s move from websites and databases designing to something that most people associate with movies like Mission Impossible, James Bond series or Mr.Robot - cryptography and cyphering. I have learnt a lot about that from "Basics of Cryptography. Edition III", written by Marcin Karbowski. From steganography to RSA encryption, you will find there everything you should know about cryphtography. '+
'After reading it attentively, I started creating my own cyphers, which really improved my creativity. Who do I recommend this book for? Mostly for cryptography adepts, but also for people who haven'+"'"+'t had a chance to learn about cyphering yet.',
basicsOfCryptographyDesc,
'And that'+"'"+'s how my personal programming booklist looks like. In my opinion, it is worth reading because these books are both professional and practical. If you want to see more of my programming and mathematical books, just write to me. See ya!',
'I tak oto prezentuje się lista książek związanych z programowaniem, które uważam, że warto jest przeczytać. Wiedza w nich zawarta jest bardzo praktyczna, a przy tym łatwo przyswajalna. Jeśli chcecie, żebym pokazał wam'+
'inne, czytane przeze mnie książki z zakresu informatyki i matematyki, to do mnie piszcie. Siemanko!'];
let captions = [["PHP and MySQL","Practical SQL Course","Basics of Cryptography"],["PHP i MySQL","Praktyczny Kurs SQL","Podstawy Kryptografii"]];
let begginingFinal = beginning[0];
let title = "My favourite programming books";
let firstParagraph = articles[0],secondParagraph = articles[2],
thirdParagraph = articles[4],ending  = articles[6];
let actualCaption = captions[0];
let nowHash = window.location.hash;
function check(){
  if(nowHash != window.location.hash){
    if(window.location.hash != "" && window.location.hash != "#/")
    {
      nowHash = window.location.hash;
    }
    window.location.hash = nowHash;
  }
  if(nowHash == "")
  {
    window.location.hash = "#/";
  }
  if(window.location.hash == "#/english")
  {
    title = "My favourite programming books";
    begginingFinal = beginning[0];
    firstParagraph = articles[0];
    secondParagraph = articles[2];
    thirdParagraph = articles[4];
    ending  = articles[6];
    actualCaption = captions[0];
  }
  else if(window.location.hash == "#/polski")
  {
    title = "Moje książki do programowania";
    begginingFinal = beginning[1];
    firstParagraph = articles[1];
    secondParagraph = articles[3];
    thirdParagraph = articles[5];
    ending  = articles[7];
    actualCaption = captions[1];
  }
  else {
    title = "My favourite programming books";
    begginingFinal = beginning[0];
    firstParagraph = articles[0];
    secondParagraph = articles[2];
    thirdParagraph = articles[4];
    ending  = articles[6];
    actualCaption = captions[0];
  }
  setTimeout(check,100);
}

export default class MyBooks extends React.Component{
  render(){
    check();
    return(
      <section class = "blogArticle" id = "myBooks">
      <header class = "article-mainHeader">{title}</header>
      <main class = "article-mainContent">
      <p class = "paragraph beginning">
      {begginingFinal}
      </p>
      </main>
      <DescribingPhoto id = "phpandmysql"
      imgSrc = {phpIMySQL} caption = {actualCaption[0]}
      mainContent= {firstParagraph}/>
      <DescribingPhoto id = "practicalSQLCourse"
      imgSrc = {practicalSQLCourse} caption = {actualCaption[1]}
      mainContent= {secondParagraph}/>
      <DescribingPhoto id = "basicsOfCryptography"
      imgSrc = {PodstawyKryptografii} caption = {actualCaption[2]}
      mainContent= {thirdParagraph}/>
      <hr/>
      <p class = "paragraph ending">
        {ending}
      </p>
      </section>
    );
  }
}
//napisz ten artykuł najpierw po polsku, a potem po angielsku
