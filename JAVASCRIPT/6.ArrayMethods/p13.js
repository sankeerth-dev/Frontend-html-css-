// array.map(function(val,index){})

// return an formatted array

var names = ["john","mark","tom","harry","sam"];
console.log(`names=`,names)
let out1 = names.map(function(val,index){
    return "mr/miss "+val;

})
console.log(`output`,out1)

// array.fill()
var list = [1,2,3,4,5,6,7]
console.log(`list = `, list)
console.log(`fill = `,list.fill(7))