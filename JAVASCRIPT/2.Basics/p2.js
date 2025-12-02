var a = 123;
let b = 456;
const c = 789;

document.writeln(`<h1> a = ${a}</h1>`)
document.writeln(`<h1> b = ${b}</h1>`)
document.writeln(`<h1> c = ${c}</h1>`)

// redeclaration

var a = 321; // allowed
document.writeln(`<h1> a = ${a}</h1>`)
console.log(`a=`,a);

// cannot redeclare block scope variable
// let b = 654; // not allowed
// const c = 987; // not allowed
try {
    let b = 654; // not allowed
    console.log(`b=`,b);
} catch (error) {
    console.log(error);
}