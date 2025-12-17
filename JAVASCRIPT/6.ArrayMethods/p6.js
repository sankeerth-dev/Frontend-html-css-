/* 
    array.reduce(function(accumulator, current){})
    
    */
   
    var num = [10,20,30,40,50,60,70,80,90,100];
    console.log(`num =`,num);

    var out =num.reduce(function(ac,cu){
        console.log(`ac =${ac} and cu =${cu}`);
        return ac+cu;
    });

    console.log(`sum =`,out);
    console.log(`\n`)

    // removing duplicate values from an array
     var ageGroup = [18,20,18,21,23,25,24,23,18,9,11,9];
     console.log(`ageGroup=`,ageGroup)
    var out1 = ageGroup.reduce(function(ac,cu){
        console.log(`ac=${ac} and cu=${cu}`)
        // console.log(`ac=`,ac)
        // console.log(`cu=`,cu)
        if(ac.indexOf(cu)===-1){
            ac.push(cu)
        }
        return ac;
    },[])

    