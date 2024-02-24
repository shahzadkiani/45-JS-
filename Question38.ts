
function describeCity(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}.`);
}

// Calling the function for three different cities
describeCity("Karachi", "Pakistan");
describeCity("New York", "USA");
describeCity("Paris");
