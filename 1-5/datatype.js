"use strict"; //treat all js code as newer version

//  alert(3+3)  // we are using nodejs not browser thatswhy we can't use alert here

/* primitive datatype : string , number,boolean,null ,undefined,symbol, BigInt */

console.log("Ayush")
console.log(3+3)

// datatypes
let n=123 // number datatype
/* range = 2^53  
if any no is beyond this range use bigint */

let s="ayush" // sting datatype

let ispresent = true //boolean datatype

let count = null //null datatype : its a standalone value

let c // undefined datatype

let pet =Symbol('231') // symbol datatype
let pet2 =Symbol('231')
console.log(pet==pet2)

const num = 1232441313131412414n // BigInt

console.log(typeof 3.14); //number
console.log(typeof count); //undefines
console.log(typeof num); // object : null is a type of object datatype
console.log(s);

/* Refrence /non-primitive datatype : Array , Objects, Function */

const int = [1,3,23,44] // array

const myobj ={
    name: "ayush",
    branch: "AIML" ,
}

const myfun = function(){
    console.log("Hello")
}
console.log( typeof myfun)