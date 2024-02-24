// Define the array of guests
let guests: string[] = ["Ali", "Babar", "zakir"];

// Function to print invitation messages to each guest
function printInvitationMessage(guest: string): void {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.`);
}

// Loop through the array and print invitation messages to each guest
guests.forEach(guest => {
    printInvitationMessage(guest);
});

// Remove a guest who can't make it
const unableToAttend = "babar";
guests = guests.filter(guest => guest !== unableToAttend);

// Add a new guest
const newGuest = "zaryab kiani";
guests.push(newGuest);

// Print updated invitation messages
console.log("\nUnfortunately, " + unableToAttend + " can't make it.");
console.log("We have invited " + newGuest + " instead.");

guests.forEach(guest => {
    printInvitationMessage(guest);
});
