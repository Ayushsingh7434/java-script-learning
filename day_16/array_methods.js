let cars = ["maruti","bmw","ferrai"]
cars.push("toyota") // add element at end of array
cars.push("kia")

console.log(cars)

let b=cars.pop() //delete element from end of array and return it
console.log(b)
console.log(cars)

cars.unshift("lamborghini") // add element at start of array
console.log(cars)

let c=cars.shift() // delete element from start of array and return it
console.log(cars)
console.log(c)

// indexOf : return the index of exixting element anf if not exist return -1
console.log("cars.indexOf bmw :",cars.indexOf("bmw"))
console.log("cars.indexOf(verna) :", cars.indexOf("verna"))

// includes : search for elemnt in array , if found return true else return false
console.log("cars.inclues bmw :",cars.includes("bmw"))
console.log("cars.includes(verna) :", cars.includes("verna"))

// concat : merge two array
let bikes = ["yamaha", "ducati","hero"]
console.log(cars.concat(bikes))

// reverse : Reverse the array 
console.log(bikes.reverse())