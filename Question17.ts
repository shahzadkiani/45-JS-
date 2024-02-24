// Define an interface for the guest
interface Guest {
    name: string;
    contribution: string;
  }
  
  // Initial guest list
  let guestList: Guest[] = [
    { name: "imran", contribution: "unwavering commitment to justice, peace, and equality" },
    { name: "zubair", contribution: "keen insight into human nature and your ability to craft stories that resonate across centuries" },
    { name: "arsalan", contribution: "groundbreaking contributions to science and your pioneering spirit" }
  ];
  
  // Function to generate invitation message
  function generateInvitationMessage(guest: Guest): string {
    return `
    Dear ${guest.name},
  
    I am writing to extend a heartfelt invitation to you to join me for dinner. Your ${guest.contribution} has inspired generations around the world. It would be an honor to have the opportunity to share a meal with you and to learn from your wisdom and experiences.
  
    Warm regards,
    [shahzad kiani]
    `;
  }
  
  // Print message that only two people can be invited
  console.log("Unfortunately, I can only invite two people for dinner.\n");
  
  // Remove guests from the list until only two names remain
  while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest!.name}, I can't invite you to dinner.`);
  }
  
  // Print invitations for the two remaining guests
  console.log("\nInvitations for the two remaining guests:\n");
  guestList.forEach(guest => {
    console.log(generateInvitationMessage(guest));
  });
  
  // Remove the last two names from the list
  guestList.pop();
  guestList.pop();
  
  // Print the empty list
  console.log("\nRemaining guest list:", guestList);
  