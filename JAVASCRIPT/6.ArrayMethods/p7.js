// array.sort()
let ageGroup = [18,21,1,1,51,18,21,5,18,7,10];
console.log(`before = `,ageGroup)
let out1 = ageGroup.sort(function(){
    return a - b;
})
console.log(`ascending order=`,out1)

let out2 = ageGroup.sort(function(){
    return b - a;
})
console.log(`descending order=`,out2)