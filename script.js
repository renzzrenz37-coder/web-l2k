// Loading Screen
window.addEventListener("load", () => {
    const loading = document.getElementById("loading");

    setTimeout(() => {
        loading.style.opacity = "0";
        loading.style.visibility = "hidden";
    }, 1200);
});

// Back To Top
const topBtn = document.getElementById("top");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// Dark Mode
const darkBtn = document.getElementById("darkMode");

let dark = true;

darkBtn.onclick = ()=>{

    if(dark){

        document.body.style.background="#ffffff";
        document.body.style.color="#111";

        darkBtn.className="fa-solid fa-sun";

    }else{

        document.body.style.background="#050816";
        document.body.style.color="#fff";

        darkBtn.className="fa-solid fa-moon";

    }

    dark=!dark;

}

// Search
const searchBtn=document.getElementById("searchBtn");

searchBtn.onclick=()=>{

let keyword=prompt("Cari Donghua :");

if(keyword==null) return;

keyword=keyword.toLowerCase();

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

let title=card.querySelector("h3").innerText.toLowerCase();

if(title.includes(keyword)){

card.style.display="block";

}else{

card.style.display="none";

}

});

}

// Card Animation
const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.05)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});

// Watch Button
const watch=document.querySelector(".watch");

watch.onclick=()=>{

alert("Coming Soon 🎬");

}

// Info Button
const info=document.querySelector(".info");

info.onclick=()=>{

alert("DonghuaVerse v1.0\nModern Donghua Website");

}

// Navbar Blur
window.addEventListener("scroll",()=>{

let header=document.querySelector("header");

if(window.scrollY>100){

header.style.background="rgba(0,0,0,.85)";

}else{

header.style.background="rgba(0,0,0,.45)";

}

});

// Welcome
console.log("Welcome To DonghuaVerse");
