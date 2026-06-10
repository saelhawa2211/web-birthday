// ELEMENT
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const music = document.getElementById("myAudio");
const daysElement = document.getElementById("days");
const typingText = document.getElementById("typingText");


// PINDAH HALAMAN ❤️

function openLove(){

page1.style.display="none";
page2.style.display="block";

}


function nextPage(){

page2.style.display="none";
page3.style.display="block";

}


// MUSIK 🎵

function playMusic(){

music.play();

}



// TOMBOL TIDAK LARI 😂

const noBtn=document.getElementById("noBtn");


noBtn.addEventListener("mouseover",()=>{

noBtn.style.position="absolute";

noBtn.style.left=Math.random()*70+"%";

noBtn.style.top=Math.random()*70+"%";

});



// BUKA KADO 🎁

function openGift(){

document.querySelector(".giftBox").style.display="none";

document.getElementById("surprise").style.display="block";

}



// COUNTDOWN 💕

const startDate=new Date("2026-06-16");


function updateCounter(){

let now=new Date();

let diff=now-startDate;


let days=Math.floor(
diff/(1000*60*60*24)
);


daysElement.innerHTML=days+" Hari";


}

updateCounter();

setInterval(updateCounter,60000);




// TEXT TYPING ✨

let text=
"Hari ini, besok, dan nanti... semoga aku masih jadi orang yang kamu pilih 🤍";


let i=0;


function typing(){

if(i<text.length){

typingText.innerHTML+=text[i];

i++;

setTimeout(typing,50);

}

}


setTimeout(typing,800);




// LOADING

window.onload=()=>{

setTimeout(()=>{

document.getElementById("loading").style.display="none";

startEffect();

},1200);

};




// EFEK HATI ❤️

function createHeart(){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.className="heart";


heart.style.left=Math.random()*100+"vw";


document.body.appendChild(heart);


setTimeout(()=>{

heart.remove();

},4000);

}


setInterval(createHeart,1200);




// CONFETTI SEKALI 🎉

function startEffect(){


for(let i=0;i<35;i++){


let c=document.createElement("div");

c.innerHTML="✨";


c.style.position="fixed";
c.style.top="-20px";
c.style.left=Math.random()*100+"vw";
c.style.zIndex="9999";


document.body.appendChild(c);


c.animate(

[
{
transform:"translateY(0)"
},

{
transform:"translateY(100vh)"
}

],

{
duration:2500
}

);


setTimeout(()=>c.remove(),2500);


}

}



// KLIK BUNGA 🌹

document.addEventListener("click",(e)=>{


let flower=document.createElement("div");

flower.innerHTML="🌹";

flower.style.position="fixed";

flower.style.left=e.clientX+"px";

flower.style.top=e.clientY+"px";

flower.style.fontSize="35px";

flower.style.zIndex="9999";


document.body.appendChild(flower);


setTimeout(()=>{

flower.remove();

},1000);


});




// FADE TEXT

document.querySelectorAll(
"h1,h2,h3,p,button"
).forEach((el,index)=>{


el.style.opacity=0;


setTimeout(()=>{

el.style.transition="1s";

el.style.opacity=1;


},index*100);


});
// CUSTOM CURSOR LOVE 💗

document.addEventListener("mousemove",(e)=>{

let love=document.createElement("div");

love.className="cursorLove";

love.innerHTML="💗";

love.style.left=e.clientX+"px";

love.style.top=e.clientY+"px";


document.body.appendChild(love);


setTimeout(()=>love.remove(),600);


});
function openLetter(){


document.getElementById("letterText")
.style.display="block";


firework();


}
function startWebsite(){


document.getElementById("intro")
.style.opacity="0";


setTimeout(()=>{


document.getElementById("intro")
.style.display="none";


firework();


},800);


}