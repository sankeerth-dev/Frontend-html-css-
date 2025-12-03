// single - array constructor

var colors = new Array;

colors[0] = "red";
colors[1] = "green";
colors[2] = "blue";

console.log(`colors = `,colors);
console.log(`colors[2] = `,colors[2]);

colors.forEach(function(val, index){
    document.writeln(`<p> ${index+1}. ${val}</p>`)
})

document.writeln(`<hr>`);
// single - array constructor (parameter)
var courses = new Array("html", "css", "js", "react");

console.log(`courses = `,courses);
courses.forEach(function(val, index){
    document.writeln(`<p> ${index+1}. ${val}</p>`)
});