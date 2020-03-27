const peopleArray = [
    {
        name: "Jenny",
        age: 21,
        profession: "lawyer"
    },
    {
        name: "Jason",
        age: 15,
        profession: "student"
    },
    {
        name: "James",
        age: 40,
        profession: "lawyer"
    },
    {
        name: "Jeremy",
        age: 17,
        profession: "apprentice"
    },
    {
        name: "Josie",
        age: 18,
        profession: "shop assistant"
    }
];

// Create an array of objects representing people. They should each have a name, age and profession property. Use map to create an array of just the names.
function getNames(arr) {
    return arr.map(person => person.name);
}
console.log(getNames(peopleArray));

// Create an array of objects representing people. They should each have a name, age and profession property. Use filter to create an array of people 18 years old or more.
function showAdults(arr) {
    return arr.filter(person => person.age >= 18);
}
console.log(showAdults(peopleArray));

// Create an array of objects representing people. They should each have a name, age and profession property. Ensure that some of these people have the profession “lawyer”. Use forEach to count how many people are lawyers.
function countLawyers(arr) {
    let count = 0;
    arr.forEach(function (person) {
        if (person.profession === "lawyer") {
            count++;
        }
    });
    return count;
}
console.log(countLawyers(peopleArray));