function calculateScore(){

let coding=
parseInt(document.getElementById("coding").value)||0;

let learning=
parseInt(document.getElementById("learning").value)||0;

let project=
parseInt(document.getElementById("project").value)||0;

let exercise=
parseInt(document.getElementById("exercise").value)||0;

let sleep=
parseInt(document.getElementById("sleep").value)||0;

let distraction=
parseInt(document.getElementById("distraction").value)||0;



let score=0;

score+=coding*5;

score+=learning*4;

score+=project*6;

score+=exercise*3;

score-=distraction*5;

if(sleep>=7 && sleep<=8){

score+=10;

}



score=Math.min(score,100);

score=Math.max(score,0);



animateScore(score);

updateRing(score);

updateBar(score);

feedback(score);

}



function animateScore(final){

let current=0;

let interval=setInterval(()=>{

current++;

score.innerText=current;

if(current>=final){

clearInterval(interval);

}

},10);

}



function updateRing(score){

let deg=score*3.6;

document.querySelector(".ring").style.background=

`conic-gradient(
#38bdf8 ${deg}deg,
#020617 ${deg}deg
)`;

}



function updateBar(score){

document.getElementById("progress").style.width=

score+"%";

}



function feedback(score){

let text=document.getElementById("feedback");

if(score>80){

text.innerText=
"PERFORMANCE LEVEL : ELITE";

}

else if(score>60){

text.innerText=
"PERFORMANCE LEVEL : STRONG";

}

else if(score>40){

text.innerText=
"PERFORMANCE LEVEL : AVERAGE";

}

else{

text.innerText=
"PERFORMANCE LEVEL : LOW";

}

}