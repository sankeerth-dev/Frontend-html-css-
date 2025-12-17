// Array.of(parameter)

var names = Array.of("john","mark","tom","harry","sam");
console.log(`names=`,names)

// Array.isArray(variable)
var nums = [1,2,4,4,5,6,5,5];
console.log(`array=`,Array.isArray(nums))

var num = 1;
console.log(`var = `,Array.isArray(num))

// array.flat()

var nums1 = [1,2,[3,4,5,[6,7,8,[9,10]]]]
console.log(`nums1=`,nums1)
console.log(`nums1=`,nums1.flat(1))
console.log(`nums1=`,nums1.flat(2))
console.log(`nums1=`,nums1.flat(3))
console.log(`\n`)
console.log(`all at once=`,nums1.flat(Infinity))
