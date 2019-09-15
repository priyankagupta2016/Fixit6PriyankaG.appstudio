var pets = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"];

// remove "Vinny" from the array
pets.splice(5,1);
console.log(pets);

// remove "Marty" from the array
pets.splice(3,1);
console.log(pets);

// add "Nancy" to the front of the array
pets.unshift("Nancy");
console.log(pets);

// add your name to the end of the array
pets.push("Priyanka");
console.log(pets);

// gives the indexOf where "Riley" is located
console.log(pets.indexOf("Riley"));

// gives the indexOf where "Cindy" is located
console.log(pets.indexOf("Cindy"));

// Create a new variable called "withMarmaduke" and set it equal to the original array concatenated with the string "Marmaduke". Output this new array variable to the console.
var withMarmaduke = pets.concat("Marmaduke");
console.log(withMarmaduke);