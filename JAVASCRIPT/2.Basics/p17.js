var out = document.getElementById("out");
var btn = document.getElementById("btn");
var x = 0;
btn.onclick = function(){
    out.innerHTML = `<h2> x = ${x}</h2>`;
    x+=15
}