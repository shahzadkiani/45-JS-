// Define the array of names
const names: string[] = ["Ali", "Babar", "zakir", "hamza"];

// Function to print personalized messages
function printPersonalizedMessage(name: string): void {
    console.log(`Hello, ${name}! I hope you're having a great day.`);
}

// Loop through the array and print personalized messages
names.forEach(name => {
    printPersonalizedMessage(name);
});
