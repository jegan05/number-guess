var y=Math.floor(Math.random()*100)+1;
var guess;
var attemptCount=document.getElementById("attemptCount");
var live=10;
var text;
const message=document.getElementById("message");
function check() {
    guess=(document.getElementById("textBox").value);
    live--;
if(guess==y){
    alert("WELL DONE YOUR AMAZING YOU GUESSED RIGHT");
    location.href ="./win.html";
}
else if(guess>y){
    alert("YOU ARE DOING GREAT TRY A SMALLER NUMBER");  
}
else{
    alert("KEEP UP THE GOOD WORK TRY A GREATER NUMBER");
}
if(live==0){
alert("GAME OVER BETTER LUCK NEXT TIME");
location .href="./lose.html";
}
console.log(guess);
attemptCount.innerHTML=live;
}