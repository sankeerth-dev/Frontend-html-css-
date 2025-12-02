/* variables 
int,float,double=number
string,char = string
boolean
array[]
object{}
null
undefined
*/
/* datatype name  = value; declaration of variable */
var x = 123; //global scope
let y = 133; //block scope (re-assign the value)
const z = 46; //block scope (cannot re-assign )

console.log(`var x = `, x)
console.log(`let y = `, y)
console.log(`const z = `, z)

document.writeln("<h1> x= " + x + "</h1>");
document.writeln('<h2> y=' + y + '</h2>');
/* ``=backtick here concatenation is not used */
document.writeln(`<h2>z=${z}</h2>`); 

// reassigning the value
x=456;
console.log(`after re-assigning var x = `, x)
document.writeln(`<h2> after re-assigning x=${x}</h2>`);
y=789;
console.log(`after re-assigning let y = `, y)
document.writeln(`<h2> after re-assigning y=${y}</h2>`);
//handling runtime exceptions (errors)
try{
    z=100; 
console.log(`after re-assigning const z = `, z)
}catch(err){
    console.log(err)
}

