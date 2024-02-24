let favoritePizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

// Print the names of each pizza
console.log("My favorite pizzas:");
for (let pizza of favoritePizzas) {
    console.log(pizza);
}

// Print a sentence for each pizza
console.log("\nMy thoughts on each pizza:");
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Additional sentence about loving pizza
console.log("\nI really love pizza!");
