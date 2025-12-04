// parameter return type function

function sum(a,b){
    return a+b;
}

let res1 = sum(10,20); 
console.log(`sum = `,res1)

// parameter non-return functions
function product(a,b){
    document.writeln(`<h2>product = ${a*b}</h2>`)
}

product(10,20);


// non-parameter return function
function handler(){
    return "Welcome to the functions";
}
document.writeln(`<h3> ${handler()}</h3>`)

// non-parameter non-return function
function handler1(){
    document.writeln(`<h3> non param non return functions</h3>`)
}

handler1();