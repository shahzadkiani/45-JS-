// Tests for equality and inequality with strings
let string1: string = 'apple';
let string2: string = 'orange';
console.log("Test 11: Is string1 == 'apple'? I predict True.");
console.log(string1 == 'apple');
console.log("Test 12: Is string1 != string2? I predict True.");
console.log(string1 != string2);

// Tests using the lower case function
let upperCaseString: string = 'HELLO';
let lowerCaseString: string = 'hello';
console.log("Test 13: Is lowerCaseString.toLowerCase() == 'hello'? I predict True.");
console.log(lowerCaseString.toLowerCase() == 'hello');

// Numerical tests
let num1: number = 10;
let num2: number = 20;
console.log("Test 14: Is num1 == num2? I predict False.");
console.log(num1 == num2);
console.log("Test 15: Is num1 != num2? I predict True.");
console.log(num1 != num2);
console.log("Test 16: Is num1 < num2? I predict True.");
console.log(num1 < num2);
console.log("Test 17: Is num1 > num2? I predict False.");
console.log(num1 > num2);
console.log("Test 18: Is num1 <= num2? I predict True.");
console.log(num1 <= num2);
console.log("Test 19: Is num1 >= num2? I predict False.");
console.log(num1 >= num2);

// Tests using "and" and "or" operators
let value1: number = 5;
let value2: number = 10;
let value3: number = 15;
console.log("Test 20: Is value1 < value2 and value2 < value3? I predict True.");
console.log(value1 < value2 && value2 < value3);
console.log("Test 21: Is value1 < value2 or value2 > value3? I predict True.");
console.log(value1 < value2 || value2 > value3);

// Test whether an item is in an array
let fruits: string[] = ['apple', 'banana', 'orange'];
console.log("Test 22: Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));

// Test whether an item is not in an array
console.log("Test 23: Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));
