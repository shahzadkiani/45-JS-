// Define a class for a guest
class Guest {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    // Method to generate an invitation message
    generateInvitationMessage(): string {
      return `Dear ${this.name},\n\nIt is with great pleasure that I extend this invitation to join me for dinner. Your presence would bring immense joy and enrich our evening with your insights.\n\nWarm regards,\n[shahzad kiani]`;
    }
  }
  
  // Create instances for each guest
  const imran = new Guest("imran");
  const zubair = new Guest("zubair");
  const arsalan = new Guest("arsalan");
  
  // Generate and print invitations
  console.log(imran.generateInvitationMessage());
  console.log(zubair.generateInvitationMessage());
  console.log(arsalan.generateInvitationMessage());
  
 