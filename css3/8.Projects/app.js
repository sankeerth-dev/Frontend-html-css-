let works = ["Java Fullstack Developer" , "Frontend Developer" , "Java Developer"]
let wBlk = document.getElementById("work")

setInterval( function()  {
    let id = Math.floor(Math.random() * 2)
    wBlk.innerText = works[id]
}, 3000);