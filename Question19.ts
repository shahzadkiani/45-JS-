// Define an interface for the guest
interface Guest {
    name: string;
    contribution: string;
  }
  
  // Guest List
  let guestList: Guest[] = [
    { name: "ali", contribution: "unwavering commitment to justice, peace, and equality" },
    { name: "babar", contribution: "keen insight into human nature and your ability to craft stories that resonate across centuries" },
    { name: "zakir", contribution: "groundbreaking contributions to science and your pioneering spirit" }
  ];
  
  // Function to generate invitation message
  function generateInvitationMessage(guest: Guest): string {
    return `
    Dear ${guest.name},
  
    I am writing to extend a heartfelt invitation to you to join me for dinner. Your ${guest.contribution} has inspired generations around the world. It would be an honor to have the opportunity to share a meal with you and to learn from your wisdom and experiences.
  
    Warm regards,
    [Your Name]
    `;
  }
  
  // Print number of people being invited to dinner
  console.log(`You are inviting ${guestList.length} people to dinner.\n`);
  
  // Print invitations for each guest
  console.log("Invitations:\n");
  guestList.forEach(guest => {
    console.log(generateInvitationMessage(guest));
  });
  