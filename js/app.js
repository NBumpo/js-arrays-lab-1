

console.log('My app.js is being run!')

const foods = [];
console.log('Exercise 1 Result:\n', foods);
foods.unshift("pizza", "cheeseburger")
console.log('Exercise 2 Result:\n',  foods);
foods.unshift("taco")

console.log('Exercise 3 Result:\n', foods);
let favFood = foods[1]

console.log('Exercise 4 Result:\n', favFood);
let inTofu= foods.splice(2, 0, "tofu")
inTofu

console.log('Exercise 5 Result:\n', foods);
let splifoods = foods.splice(1, 1, "sushi", "cupcake");
splifoods

console.log('Exercise 6 Result:\n', foods);
const yummy = foods.slice(1,3);
yummy

console.log('Exercise 7 Result:\n', yummy);
let soyIdx = foods.indexOf("tofu")

console.log('Exercise 8 Result:\n', soyIdx);

allFoods = foods.toString()
console.log('Exercise 9 Result:\n', allFoods);

const hasSoup = foods.includes('soup')
console.log('Exercise 10 Result:\n', hasSoup);
//end of food arrays

/*what this did was take the items in the array and if the remainder from being divided by 2 was greater than one push it into the "odd" array */
const odd = []
const numbers = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
numbers.forEach(element => {
    if( element%2 >= 1 )
    odd.push(element);
});
    console.log('Exercise 11 Result:\n', odd);
const numbersfb = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
    const fizzbuzz = [] //if the number is evenly divisible by 3 & 5.
  	const fizz = [] //if the number is evenly divisible by 3.
  	const buzz = [] //if the number is evenly divisible by 5.
numbersfb.forEach(element => {
    if(( element%3 == 0)&&
      ( element%5 == 0))
    fizzbuzz.push(element);
  });
  numbersfb.forEach(element => {
   ( element%3 == 0)
    fizz.push(element);
    });
  numbersfb.forEach(element => {
    ( element%5 == 0)
    buzz.push(element);
      });
      
console.log('Exercise 12 Results:');
console.log('  fizzbuzz:', fizzbuzz);
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);


const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const numList = numArrays.slice(-1) 
console.log('Exercise 13 Result:\n', numList);




const num = (numArrays[2])[1] 

console.log('Exercise 14 Result:\n', num);




//Given the above numArrays array, use nested forEach methods to sum up all the numbers contained within numArrays and assign to a variable named total.

let total = 0;
numArrays.forEach(function(numArr) {
  numArr.forEach(function(num) {
    total += num;
  });
});
console.log('Exercise 15 Result:\n', total);
