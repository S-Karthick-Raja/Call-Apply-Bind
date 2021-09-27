//Call () :
//Here the keyword this refers to the ‘owner’ of the function or the object it belongs to.
//In call() method It takes the arguments separated by comma.

//Example :
function printfullname(a,b,c) {
    return this.firstname + " " + this.lastname;
}
var a = {
    firstname:"Karthick",
    lastname: "Raja",
}   
var b = {
    firstname:"Surya",
    lastname: "Narayanan",
}  
var c = {
    firstname:"siva",
    lastname: "Manikandan",
} 
//calls a method of an object,substituting another object to the current object.    
console.log(printfullname.call(b)); 
console.log(printfullname.call(a));

//Apply () :
//The apply() method is a method which can be used on different objects. 
//It is different from the function call() because it takes arguments as an array.

//Example :
function printfullname(a,b,c) { //here (a,b,c is the argument) //printfullname is the function.
    return this.firstname + " " + this.lastname;
}
var a = {
    firstname:"Karthick",
    lastname: "Raja",
}   
var b = {
    firstname:"Surya",
    lastname: "Narayanan",
}  
var c = {
    firstname:"siva",
    lastname: "Manikandan",
}  
// calls the funtion, substituting the specific object to this value of the function &
//specific array to the argument of the function.
console.log(printfullname.apply(a));

//Bind () :
//The bind() is a function creates a new bound function. when invoked, has its this sets to a specific value.
//which is an exotic function object
//Using bind() to borrow methods from a different object

//Example :
const studentdetails = {
    name: "Divya",
    age: 28,
    X: function() {
    return this.name;
    }
};  
const final= studentdetails.X;
 
const y = final.bind(studentdetails);
console.log(y());