// array.every() and array.some()

let arr1 = [18,21,1,1,51,18,21,5,18,7,10];
let arr2 = [18,19,20,42,32];
function check(age){
    return age>=18;
}

let out1 = arr1.every(check);
console.log(`every = `,out1)

let out2 = arr2.every(check);
console.log(`every = `,out2)

console.log(`\n`)

let out3 = arr1.some(check);
console.log(`some = `,out3)

let out4 = arr2.some(check);
console.log(`some = `,out4)

let arr3 = [1,2,3,4,5];

let out5 = arr3.some(check);
console.log(`some = `,out5)