let personName: string = "John Doe";

// Lowercase
console.log(personName.toLowerCase());

// Uppercase
console.log(personName.toUpperCase());

// Titlecase
console.log(personName.replace(/\b\w/g, char => char.toUpperCase()));
