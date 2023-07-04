
const myArray = [1, 2, 3, 4, 5];

const index = myArray.findIndex( (p) => p === 3);

const x = myArray.splice(index,1);

console.log(`myArray values: ${myArray}`);
console.log(`variable x value: ${x}`);

const ab={id: 2, text: 'This is a txt1'}
const ac={id: 1, text: 'This is a txt2', rating: 9}
const id=4

const bamby= id === 4 ? {...ab, ...ac}: 'ulla';

console.log(bamby)


