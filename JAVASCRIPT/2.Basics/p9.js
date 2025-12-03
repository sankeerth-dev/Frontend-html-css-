// object

var user = {
    //  key:value
    name: "John",
    email:"john@sample.com",
    age: 22,
    hobbies: ["reading", "gaming", "coding"],
    address: {
        city: "bengaluru",
    }
}

console.log('user =',user);

// object.key - object["key"]
document.writeln(`<h1> name = ${user.name}</h1>`);
document.writeln("<h1>"+ user.email +"</h1>");
document.writeln("<h1>"+ user["age"]+" years </h1>")
document.writeln("<h1> Lives in "+ user.address.city +"</h1>")
