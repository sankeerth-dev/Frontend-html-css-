/* 
    lexigo graphical comparision
    a > b = 1
    a < b = -1
    a === b = 0
*/

//  local compare

        var a = "Hello";
        var b = "World";
        var c = "Hello";

        console.log(`Hello < World =`, a.localeCompare(b))
        console.log(`Hello > World =`, b.localeCompare(a))
        console.log(`Hello === World =`, a.localeCompare(c))
