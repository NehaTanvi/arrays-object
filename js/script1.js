"use strict";
// 'fruits' array created using array literal notation.
// const fruits = ["Apple", "Banana"];
// console.log(fruits.length);

// 'fruits' array created using the Array() constructor.
// const fruits = new Array("Apple", "Banana");
// console.log(fruits.length);

// 'fruits' array created using String.prototype.split().
// const fruits = "Apple, Banana".split(", ");
// console.log(fruits.length);

// const fruits = ["Apple", "Banana"];
// const fruitsString = fruits.join(", ");
// console.log(fruitsString);
// Apple, Banana

//const fruits = ["Apple", "Banana"];

// The index of an array's first element is always 0.
// console.log(fruits[0]); // Apple

// // The index of an array's second element is always 1.
// console.log(fruits[1]); // Banana

// // The index of an array's last element is always one
// // less than the length of the array.
// console.log(fruits[fruits.length - 1]); // Banana

// // Using a index number larger than the array's length
// // returns 'undefined'.
// console.log(fruits[99]); // undefined

//find the starting position of the string in the array

// console.log(fruits.indexOf("Banana"));

// console.log(fruits.includes("Banana")); // true
// console.log(fruits.includes("Cherry")); // false

// If indexOf() doesn't return -1, the array contains the given item.
// if (fruits.indexOf("Banana") !== -1) console.log("we have Bannana");
// else console.log("we donot have Bannana"); // true
// if (fruits.indexOf("Cherry") !== -1) console.log("we have cherries");
// else console.log("we do not have cherries"); // false

// const newLength = fruits.push("Orange");
// console.log(fruits);
// // ["Apple", "Banana", "Orange"]
// console.log(newLength);
// 3
//const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
// const removedItem = fruits.pop();
// console.log(fruits);
// // ["Apple", "Banana"]
// console.log(removedItem);
// // Orange

//const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
// newLength = fruits.push("Starwberry", "Mango", "Cherry");
// console.log(fruits);
// const start = -3;
// const removedItems = fruits.splice(start);
// console.log(fruits);
// // ["Apple", "Banana"]
// console.log(removedItems);
// // ["Strawberry", "Mango", "Cherry"]

//remove 1st item from array
// const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
// const removedItem = fruits.shift();
// console.log(fruits);
// // ["Banana"]
// console.log(removedItem);
// // Apple

// //remove multiple items from an array
// // const fruits = ["Apple", "Strawberry", "Cherry", "Banana", "Mango"];
// const start = 0;
// const deleteCount = 2;
// const removedItems = fruits.splice(start, deleteCount);
// console.log(fruits);
// // ["Banana", "Mango"]
// console.log(removedItems);
// // ["Apple", "Strawberry", "Cherry"]

// const fruits = ["Apple", "Strawberry", "Cherry", "Banana", "Mango"];
// const start = 0;
// const deleteCount = 3;
// const removedItems = fruits.splice(start, deleteCount);
// console.log(fruits);
// // ["Banana", "Mango"]
// console.log(removedItems);
// // ["Apple", "Strawberry", "Cherry"]

// const fruits = ["Apple", "Mango", "Cherry"];
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// const fruits = ["Apple", "Mango", "Cherry"];
// fruits.forEach(function (item, index, array) {
//   console.log(item, index);
// });

// const fruits = ["Apple", "Banana", "Strawberry"];
// const moreFruits = ["Mango", "Cherry"];
// const combinedFruits = fruits.concat(moreFruits);
// console.log(combinedFruits);
// // ["Apple", "Banana", "Strawberry", "Mango", "Cherry"]

// // The 'fruits' array remains unchanged.
// console.log(fruits);
// // ["Apple", "Banana", "Strawberry"]

// // The 'moreFruits' array also remains unchanged.
// console.log(moreFruits);
// // ["Mango", "Cherry"]

// const fruits = ["Strawberry", "Mango"];
// console.log(fruits);
// // Create a copy using spread syntax.
// const fruitsCopy1 = [...fruits];
// console.log(fruitsCopy1);
// // ["Strawberry", "Mango"]

// // Create a copy using the from() method.
// const fruitsCopy2 = Array.from(fruits);
// console.log(fruitsCopy2);
// // ["Strawberry", "Mango"]

// // Create a copy using the slice() method.
// const fruitsCopy3 = fruits.slice();
// console.log(fruitsCopy3);
// // ["Strawberry", "Mango"]

// const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));
// console.log(fruitsDeepCopy);

// const fruits = ["Strawberry", "Mango"];
// const fruitsAlias = fruits;
// // 'fruits' and 'fruitsAlias' are the same object, strictly equivalent.
// console.log(fruits === fruitsAlias); // true
// // Any changes to the 'fruits' array change 'fruitsAlias' too.
// fruits.unshift("Apple", "Banana");
// console.log(fruits);
// // ['Apple', 'Banana', 'Strawberry', 'Mango']
// console.log(fruitsAlias);
// // ['Apple', 'Banana', 'Strawberry', 'Mango']

// const fruits = [];
// fruits.push("banana", "apple", "peach");
// console.log(fruits.length); // 3

// fruits[5] = "mango";
// console.log(fruits[5]); // 'mango'
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 6

// fruits.length = 10;
// console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 10
// console.log(fruits[8]); // undefined
const fruits = ["Strawberry", "Mango"];
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

const animals = ["pigs", "goats", "sheep"];

const count = animals.push("cows");
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push("chickens", "cats", "dogs");
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10


