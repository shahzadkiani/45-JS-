function makeGreat(magicians: string[]): string[] {
    // Make a copy of the original list
    const greatMagicians: string[] = [];
    // Modify the copy by adding "the Great" to each magician's name
    for (const magician of magicians) {
        const greatMagician: string = magician + " the Great";
        greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}

function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Original list of magicians
const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Make a copy of the original list
const originalMagicians: string[] = [...magicians];

// Call makeGreat() with a copy of the original list
const greatMagicians: string[] = makeGreat([...originalMagicians]);

// Show original magicians
console.log("Original Magicians:");
showMagicians(originalMagicians);

// Show magicians with "the Great"
console.log("\nMagicians with 'the Great':");
showMagicians(greatMagicians);
