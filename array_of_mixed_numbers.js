const mixedNumArray = [1, 27, 0.56, 1.987, 0, 26.0]

// Create an array of numbers, including some decimal numbers. Use filter to keep only the whole numbers.
function filterWholeNums(arr) {
    return arr.filter(num => num % 1 === 0);
}
console.log(filterWholeNums(mixedNumArray));

// Create an array of numbers, including some decimal numbers. Use forEach to sum up all the whole numbers.
function sumWholeNums(arr) {
    let count = 0;
    let wholeNums = arr.filter(num => num % 1 === 0);
    wholeNums.forEach(num => count = count + num);
    return count;
}
console.log(sumWholeNums(mixedNumArray));

// Create an array of numbers, including some decimal numbers. Use forEach to create a count of how many decimal numbers are in the array.
function countDecimals(arr) {
    let count = 0;
    arr.forEach(function (num) {
        if (num % 1 !== 0) {
            count++;
        }
    });
    return count;
}
console.log(countDecimals(mixedNumArray));

// Create an array of numbers. Use map to create an array of the square of each of these numbers.
function squareNumbers(arr) {
    return arr.map(num => num ** 2);
}
console.log(squareNumbers(mixedNumArray));