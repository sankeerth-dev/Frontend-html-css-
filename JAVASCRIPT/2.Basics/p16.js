var out = document.getElementById("out");
var btn = document.getElementById("btn");

var x = 0;

btn.addEventListener("click", function(){
    out.innerHTML = `<h1> ${x} </h1>`;
    x+=5;
});