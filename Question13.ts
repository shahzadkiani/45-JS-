// Define the array of bicycles
const bicycles: string[] = ["mountain bike", "road bike", "hybrid bike", "electric bike"];

// Function to print statements about each bicycle
function printBicycleStatements(bicycle: string): void {
    console.log(`I would like to own a ${bicycle}.`);
}

// Loop through the array and print statements about each bicycle
bicycles.forEach(bicycle => {
    printBicycleStatements(bicycle);
});
