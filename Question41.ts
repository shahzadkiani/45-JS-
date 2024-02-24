function showMagicians(magicians: string[]): void {
    console.log("List of magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
let magicianNames: string[] = ["Merlin", "David Copperfield", "Houdini", "Penn & Teller"];

// Call the function to show the magicians
showMagicians(magicianNames);
