let current_users: string[] = ['john', 'mary', 'alice', 'tom', 'susan'];
let new_users: string[] = ['emily', 'JOHN', 'alice', 'brian', 'sarah'];

for (let new_username of new_users) {
    // Convert both new_username and current_users to lowercase for case-insensitive comparison
    let lowercased_new_username: string = new_username.toLowerCase();
    let username_exists: boolean = false;

    for (let current_username of current_users) {
        if (current_username.toLowerCase() === lowercased_new_username) {
            username_exists = true;
            break;
        }
    }

    if (username_exists) {
        console.log(`Sorry, the username '${new_username}' is not available. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_username}' is available.`);
    }
}
