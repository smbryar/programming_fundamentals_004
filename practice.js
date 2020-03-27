//Create an array of numbers. Use forEach to create a total of all the numbers.

const numArray = [1,2,3,4,5];

function sumArray(arr) {
    let count = 0;
    arr.forEach(num => count = count + num);
    return count;
}

console.log(sumArray(numArray));

//Create an array of numbers. Use filter to keep only numbers greater than 100.