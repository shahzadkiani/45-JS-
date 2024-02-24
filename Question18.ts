// Define an array of places to visit
let placesToVisit: string[] = [
    "Kyoto, Japan",
    "Machu Picchu, Peru",
    "Santorini, Greece",
    "Maui, Hawaii",
    "Serengeti National Park, Tanzania"
  ];
  
  // Print array in its original order
  console.log("Original order:");
  console.log(placesToVisit);
  
  // Print array in alphabetical order without modifying the actual list
  console.log("\nAlphabetical order (without modifying original list):");
  console.log([...placesToVisit].sort());
  
  // Verify original order is maintained
  console.log("\nOriginal order maintained:");
  console.log(placesToVisit);
  
  // Print array in reverse alphabetical order without changing the original list
  console.log("\nReverse alphabetical order (without modifying original list):");
  console.log([...placesToVisit].sort().reverse());
  
  // Verify original order is maintained
  console.log("\nOriginal order maintained:");
  console.log(placesToVisit);
  
  // Reverse the order of the list
  placesToVisit.reverse();
  console.log("\nReversed order:");
  console.log(placesToVisit);
  
  // Reverse the order of the list again to get back to the original order
  placesToVisit.reverse();
  console.log("\nBack to original order:");
  console.log(placesToVisit);
  
  // Sort the array in alphabetical order
  placesToVisit.sort();
  console.log("\nSorted in alphabetical order:");
  console.log(placesToVisit);
  
  // Sort the array in reverse alphabetical order
  placesToVisit.sort((a, b) => b.localeCompare(a));
  console.log("\nSorted in reverse alphabetical order:");
  console.log(placesToVisit);
  