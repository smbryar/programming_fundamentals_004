const numArray = [1,2000,37,404,512,100];

//Create an array of numbers. Use forEach to create a total of all the numbers.
// Refactored to use reduce
function sumArray(arr) {
    return arr.reduce((total,num) => total + num);
}
console.log(sumArray(numArray));

//Create an array of numbers. Use filter to keep only numbers greater than 100.
function keepGreaterThan100(arr) {
    return arr.filter(num => num > 100);;
}
console.log(keepGreaterThan100(numArray));

//Create an array of numbers. Use filter to keep only even numbers.
function keepEvens(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(keepEvens(numArray));