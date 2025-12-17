/* splice(index,deletecount,values) */

var colors = ['green','red','blue','white'];
console.log(`colors=`,colors);

// add the values into the array without delete an existing values

colors.splice(1,0,"pink","yellow","orange")
console.log(`colors=`,colors)

// adding the values by removing existing values
colors.splice(1,4,"black","magenta","cyan")
console.log(`colors=`,colors)

// only remove the values without adding any values 
colors.splice(2,3)
console.log(`colors=`,colors)