// Define the array of guests
const guests: string[] = ["Ali", "Babar", "zakir"];

// Function to print invitation messages to each guest
function printInvitationMessage(guest: string): void {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.`);
}

// Loop through the array and print invitation messages to each guest
guests.forEach(guest => {
    printInvitationMessage(guest);
});
