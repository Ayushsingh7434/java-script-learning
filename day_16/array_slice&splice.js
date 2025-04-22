let friuts =["apple","banana","grapes","mango","pineapple"];

// slice : copies a portion of array
// console.log(friuts.slice(2));
// console.log(friuts.slice(2,4));
// console.log(friuts.slice());
// console.log(friuts.slice(-2));
// console.log(friuts.slice(-3,5));

// splice : remove/replace /add element in the array
console.log(friuts);
console.log(friuts.splice(3)) ;// delete every element after index 3
console.log(friuts);
friuts.splice(1,0,"custurd apple","guava"); // add custurd apple and guava after apple
console.log(friuts);
friuts.splice(0,1,"watermelon","oranges"); // delete apple
console.log(friuts);