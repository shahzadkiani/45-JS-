// Define an interface for a landmark
interface Landmark {
    name: string;
    location: string;
    description: string;
  }
  
  // Array of landmark objects
  let landmarks: Landmark[] = [
    {
      name: "Eiffel Tower",
      location: "Paris, France",
      description: "Iconic iron lattice tower located on the Champ de Mars in Paris. It is named after the engineer Gustave Eiffel, whose company designed and built the tower."
    },
    {
      name: "Statue of Liberty",
      location: "New York City, USA",
      description: "A colossal neoclassical sculpture on Liberty Island in New York Harbor within New York City. The statue was designed by Frédéric Auguste Bartholdi and dedicated on October 28, 1886."
    },
    {
      name: "Taj Mahal",
      location: "Agra, India",
      description: "An ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal."
    }
    // Add more landmark objects here as needed
  ];
  
  // Print details of each landmark
  console.log("List of Famous Landmarks:");
  landmarks.forEach(landmark => {
    console.log(`Name: ${landmark.name}`);
    console.log(`Location: ${landmark.location}`);
    console.log(`Description: ${landmark.description}\n`);
  });
  