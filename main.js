const ages = [12, 25, 8, 15, 30];
const filteredAges = ages.filter((element) => element >= 18);

console.log(filteredAges);

const price = [10, 20, 30, 40];
const sum = price.reduce((previous, next) => previous + next);

console.log(sum);

const numbers = [10, 20, 30, 40];
numbers.forEach((element) => console.log(element));

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
];

people.find((element) => console.log(element.age > 18));

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2);

console.log(newArray);

const values = [1, 2, 3, 4, 5];
const slicedValues = values.slice(1, 4);

console.log(slicedValues);
