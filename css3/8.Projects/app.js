let works = ["Java Fullstack Developer" , "Frontend Developer" , "Java Developer"]
let wBlk = document.getElementById("work")

setInterval( function()  {
    let id = Math.floor(Math.random() * 2)
    wBlk.innerText = works[id]
}, 3000);

// to update year with current year
let yr = document.getElementById("yr");
yr.innerText = new Date().getFullYear();


// responsive menu toggle
let menuBtn= document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");

menuBtn.addEventListener("click",function(event){
    menu.classList.toggle("active");
});