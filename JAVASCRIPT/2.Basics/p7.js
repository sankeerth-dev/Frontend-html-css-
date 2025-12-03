var num = 2;

if(num % 2 === 0){
    if(num > 200){
        document.writeln(`<h2> ${num} is even and greater than 200 </h2>`)
    }else if(num < 200){
        document.writeln(`<h2> ${num} is even and less than 200 </h2>`)
    }else if(num === 200){
        document.writeln(`<h2> ${num} is even and equal to 200 </h2>`)
    }else{
        document.writeln(`<h2> ${num} is even </h2>`)
    }
}else{
    document.writeln(`<h2> ${num} is odd </h2>`)
}