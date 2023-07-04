
const myArray = [1, 2, 3, 4, 5];

const index = myArray.findIndex( (p) => p === 3);

const x = myArray.splice(index,1);

console.log(`myArray values: ${myArray}`);
console.log(`variable x value: ${x}`);

