function show_magicians(magicians: string[]): void {
    console.log("List of magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

// Array of magician's names
let magicianNames: string[] = ["Merlin", "David Copperfield", "Houdini", "Penn & Teller"];

// Call the function to make magicians great
make_great(magicianNames);

// Call the function to show the magicians
show_magicians(magicianNames);
