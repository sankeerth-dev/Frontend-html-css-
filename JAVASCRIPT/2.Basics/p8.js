// nested looping statements

// pattern

/* 
1
12
123
1234
12345
*/
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        document.writeln(j);
    }
    document.writeln("<br>");
}

document.writeln("<hr/>");


var i=1;
while(i<=5){
    let j=1;
    while(j<=i){
        document.writeln(j);
        j++;
    }
    i++;    
    document.writeln("<br>");
}
document.writeln("<hr/>");

/* 
1
22
333
4444
55555
*/
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        document.writeln(i);
    }
    document.writeln("<br>");
}

document.writeln("<hr/>");


var i=1;
while(i<=5){
    let j=1;
    while(j<=i){
        document.writeln(i);
        j++;
    }
    i++;    
    document.writeln("<br>");
}


document.writeln("<hr/>");

/* 
12345
1234
123
12
1
*/
for(let i=5;i>=1;i--){
    for(let j=1;j<=i;j++){
        document.writeln(j);
    }
    document.writeln("<br>");
}

document.writeln("<hr/>");


var i=5;
while(i>=1){
    let j=1;
    while(j<=i){
        document.writeln(j);
        j++;
    }
    i++;    
    document.writeln("<br>");
}

