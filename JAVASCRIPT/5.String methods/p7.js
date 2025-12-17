// match() and matchAll()

var msg = "Javascript is frontend programming script"
var exp = /programming/; //regular expression
var res = msg.match(exp); // first match index
console.log(`output =`,res);

// matchall
var msg1 = "javascript is web SCXRIPTING language and also can be used as a server too.";
var exp1 = /script/gi;
let out = msg1.matchAll(exp1)
console.log(`output=`,out)

for(let item of out){
    console.log(`item=`,item)
}