//find() - single value and filter() - arrray of matched values

//object array

var users = [
    {
        id :1,
        first : "Raju",
        last : "Kumar",
        email: "raju@gmail.com"
    },
    {
        id :2,
        first : "Jhon",
        last : "Sharma",
        email: "Jhona@gmail.com"
    },
    {   
        id :3,
        first : "Raju",
        last : "Yadav",
        email: "raju@gmail.com"
    },
    {
        id :4,
        first : "Chand",
        last : "dakaith",
        email: "dakaith@gmail.com"
    },
];
    /* 
            array.find(function(items){
                return condition
                })
     */

                let out1 = users.find(function(item){
                    //return item.id == 3;
                    return item?.first == "Jhon";
                });

                console.log(`find =`, out1);

    /*
            array.filter(function(items){
                return condition
                })
    */

                let out2 = users.filter(function(item){
                    return item?.last == "Sharma";
                });

                console.log(`filter =`, out2);