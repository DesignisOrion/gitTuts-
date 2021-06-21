// Working with Data Structures and Algorithms


// creating an array
const names = ['Mark', 'Orion', 'Micah', 7];
console.log(names[1]); // accessing the name via index.
console.log(names.length);

// Iterable arrays
for (const el of names) {
    console.log(el);
}

names.push("Orion");
console.log(names.length); // 5 would be the number of charcters.


//Finding of Elements

// let's find Orion

// const OrionIndex = names.findIndex(el => el === "Orion");

// Deleting Elements
const OrionIndex = names.findIndex(el => el === "Orion");
names.splice(2, 1); 
console.log(names);
