//  object array

var emp = [
    {
        id:1,
        name: "chinto",
        desg: "frontend dev",
        salary: 12345
    },
    {
        id:2,
        name: "boda",
        desg: "ui and ux dev",
        salary: 21325
    },
    {
        id:3,
        name: "bihari",
        desg: "java dev",
        salary: 32345
    }
]

console.log(`emp = `, emp)
emp.forEach(function(value, index){
    document.writeln(`<h1> ${value.name} </h1>`)
    document.writeln(`<h4> ${value.desg} </h4>`)
    document.writeln(`<h4> ${value.salary} </h4>`)
});