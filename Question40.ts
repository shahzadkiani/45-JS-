function makeAlbum(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Making three dictionaries representing different albums
let album1 = makeAlbum("Artist1", "Album1");
let album2 = makeAlbum("Artist2", "Album2", 10);
let album3 = makeAlbum("Artist3", "Album3", 12);

// Printing each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
