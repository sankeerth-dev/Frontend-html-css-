// array.entries()
var names = ["mark","john","harry"]
console.log(`names=`,names)
let out = names.entries();
console.log(`entries=`,out) //array iterator array[array]
for(let item of out){
    console.log(item)
}