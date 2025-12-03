// array

/* 
     group of avlues not mandatory to be similar datatype

     types
     1. single dimension
        a. literal array
        b. using array constructor (assignment)
        c. Array constructor (parameters)
    
    2. Object array
        object => group of key value pairs = { key: value }
        group of objects
    
    3. Json array
 */

    // single (literal type)
    var users = ["chinto", "boda" , "john" , "jerry"];

    console.log('users =', users);
    console.log(`users[1]=`, users[0]);

/* 
    array.forEach(function(value,index){
        // code
        });
*/
    users.forEach(function(val,index){
        document.writeln(`<p> ${index+1}. ${val}</p>`)
    });

document.writeln("<hr/>");

for(let i=0; i<= users.length-1;i++){
    document.writeln(`<h4> ${i+1}.${users[i]}</h4>`)
}


