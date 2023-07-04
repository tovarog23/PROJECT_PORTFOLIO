// INDEX SECTION - GREETINGS

let welcome_phrase = document.getElementById("greetings");

const helloList = ["Hello","Bonjour","Hola","Zdravstvuyte","Nǐn hǎo","Salve","Konnichiwa","Guten Tag","Olá","Anyoung haseyo","Asalaam alaikum","Goddag","Shikamoo","Goedendag","Yassas","Dzień dobry","Selamat siang","God dag","Merhaba","Shalom","God dag"];

let currentTextIndex = 0;

const changeGreetings = () =>{
    currentTextIndex = (currentTextIndex + 1) % helloList.length;
    var nextGreeting = helloList[currentTextIndex];
    welcome_phrase.innerHTML = nextGreeting;



}

setInterval(changeGreetings, 5000);










