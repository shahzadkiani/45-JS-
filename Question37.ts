function makeShirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`You have ordered a ${size} T-shirt with the following message: "${message}".`);
}

// Making a large shirt with the default message
makeShirt();

// Making a medium shirt with the default message
makeShirt("Medium");

// Making a shirt of any size with a different message
makeShirt("Small", "Keep coding!");
