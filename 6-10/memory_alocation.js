/* there are two memory allocation 
1. stack : used for primitive dattatype and copy is assigned
2. heap : used for non primitive datatype and address is given */

//example of stack memory allocation

let c1="Ayush Singh"

let c2= c1

c2="shivam Guptaa"
console.log(c1)
console.log(c2)

// heap memroy allocation

let h1={
    email : "ayushgmail.com" ,
    password: "12345"
}

let h2=h1
h2.email = "ayush345.com"

console.log(h1.email)
console.log(h2.email)