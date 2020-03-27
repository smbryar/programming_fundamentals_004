const names = ["matthew","emily","sam","alex","heather"]

//Create an array of people’s names. Create all the names with lowercase letters only. Use map to transform each name so that it begins with a capital letter.
function capitaliseNames(arr) {
    return arr.map(name => name[0].toUpperCase() + name.substring(1));    
}
console.log(capitaliseNames(names));

//Create an array of people’s names. Use filter to keep only the names which are longer than 5 characters.
function findLongNames(arr) {
    return arr.filter(name => name.length > 5);
}
console.log(findLongNames(names));