document.addEventListener('DOMContentLoaded', () => {
// Theme Switcher Toggle
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
themeToggle.addEventListener('click', () => {
const sun = themeToggle.querySelector('.fa-sun');
const moon = themeToggle.querySelector('.fa-moon');
sun.classList.toggle('active');
moon.classList.toggle('active');
document.body.classList.toggle('dark-theme');
});
}
// Watch Demo Trigger
const playDemoBtn = document.getElementById('playDemoBtn');
if (playDemoBtn) {
playDemoBtn.addEventListener('click', () => {
alert('Play Demo Video');
});
}

// floating play video
const floatPlayDemoBtn = document.getElementById('floatPlayDemoBtn');
if (floatPlayDemoBtn){
    floatPlayDemoBtn.addEventListener('click', () => {
        alert('Play Demo Video')
    });
}

// Scroll to Top
const scrollToTopBtn = document.getElementById('scrollToTop');
if (scrollToTopBtn) {
scrollToTopBtn.addEventListener('click', () => {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});
}
// Scroll to Bottom
const scrollToBottomBtn = document.getElementById('scrollToBottom');
if (scrollToBottomBtn) {
scrollToBottomBtn.addEventListener('click', () => {
window.scrollTo({
top: document.body.scrollHeight,
behavior: 'smooth'
});
});
}
// Scroll Down Incremental
const scrollDownBtn = document.getElementById('scrollDownBtn');
if (scrollDownBtn) {
scrollDownBtn.addEventListener('click', () => {
window.scrollBy({
top: window.innerHeight / 2,
behavior: 'smooth'
});
});
}

/* ======================================
   RESPONSIVE NAVIGATION MENU
====================================== */

const menuBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");

if(menuBtn && navMenu){

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("active");

menuBtn.classList.toggle("active");

});

}

const menuItems=document.querySelectorAll("#navMenu a");

menuItems.forEach(item=>{

item.addEventListener("click",()=>{

navMenu.classList.remove("active");

menuBtn.classList.remove("active");

});

});

document.addEventListener("click",(event)=>{

const insideMenu=navMenu.contains(event.target);

const insideButton=menuBtn.contains(event.target);

if(!insideMenu && !insideButton){

navMenu.classList.remove("active");

menuBtn.classList.remove("active");

}

});

document.addEventListener("keydown",(event)=>{

if(event.key==="Escape"){

navMenu.classList.remove("active");

menuBtn.classList.remove("active");

}

});

menuItems.forEach(item=>{

item.addEventListener("click",(event)=>{

const id=item.getAttribute("href");

if(id.startsWith("#")){

event.preventDefault();

const section=document.querySelector(id);

if(section){

section.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

}

});

});

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.offsetHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

menuItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>30){

header.classList.add("header-shadow");

}else{

header.classList.remove("header-shadow");

}

});

const overlay=document.getElementById("menuOverlay");
const closeBtn=document.getElementById("closeMenu");
menuBtn.addEventListener("click",()=>{
    navMenu.classList.add("active");
    overlay.classList.add("active");
});

closeBtn.addEventListener("click",()=>{
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
});

overlay.addEventListener("click",()=>{
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
});

menuItems.forEach(item=>{
    item.addEventListener("click",()=>{
        navMenu.classList.remove("active");
        overlay.classList.remove("active");
    });
});
const desktopNav = document.getElementById("desktopNav");
const mobileDrawer = document.getElementById("")
// ending point
});
