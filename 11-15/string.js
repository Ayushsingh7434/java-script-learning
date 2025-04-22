const h1="Ayush Singh"
let age=22

console.log(`hi, my name is ${h1} and my age is ${age}`)

// another method to declare stirng

const s =  new String('Ayush     ') // the string is object
console.log(typeof s)
// strings methods
console.log(s.toUpperCase())
console.log(s.__proto__)
console.log(s.charAt(2))
console.log(s.indexOf('h'))
console.log(s.substring(0,3))
console.log(s.slice(-3,0))
console.log(s.trim())

const w="Ayush@@Singh@@Bhumihar"
console.log(w.replace("@@",'_'))
console.log(w.includes('_'))
console.log(w.includes('@@'))
console.log(w.split('@@'))