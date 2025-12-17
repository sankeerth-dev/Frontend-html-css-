// replace()  and   replaceAll()

var str = "ball and bat"
console.log(`input=`,str)
console.log(`replace=`,str.replace('b','c'))
console.log(`replaceAll=`,str.replaceAll('b','c'))

var str1 = "javascript is web scripting language and allso can be used as a server Script too."
var exp = /script/;
var out = str1.search(exp);
console.log(`output= `,out)     //returns first matched position