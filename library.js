const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT: 
/////////////////////////////

// prints a list of all playlists, in the for
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
 const printPlaylists = function(arr) {
       for ( key in library.playlists) {
              const count = key;
              const name = library.playlists[key].name;
              let track = library.playlists[key].tracks.length;
              console.log( `${count}: ${name} - ${track} tracks`);
       }  
 }

              console.log (printPlaylists(library));
}              
printPlaylists()


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
       const printTracks = function(arr) {
              for ( key in library.tracks) {
                     const count1 = key;
                     const name1 = library.tracks[key].name;
                     const artist1 = library.tracks[key].artist;
                     const album1 = library.tracks[key].album;

                     console.log(`${count1}: ${name1} by ${artist1} (${album1})`);



              }
       }   
                     console.log(printTracks(library));  
}
printTracks()

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
       
       const trackById = library.tracks[playlistId]
       const playlistById = library.playlists[playlistId]
       
       if (trackById){
              const id = trackById.id;
              const name = trackById.name;
              const artist = trackById.artist;
              const album = trackById.album;
              const result = `${id}: ${name} by ${artist} (${album})`
              console.log(result);
       }
       else if (playlistById){
              const tracksCount = playlistById.tracks.length;
              const id = playlistById.id;
              const name = playlistById.name;
              const result = `${id}: ${name} - ${tracksCount} tracks`
              console.log(result);
       }
       else{
              console.log('Not found')
       }
       }
       
printPlaylist('p01')


printPlaylist()
// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
       
              const trackById = library.tracks[trackId].id
              const tracksByLlaylistId = library.playlists[playlistId].tracks
              tracksByLlaylistId.push(trackById)
              console.log(tracksByLlaylistId)
              }
              //addTrackToPlaylist('t01', 'p01')

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
       const idFOrNewTrack = generateUid();
       const newTrack = { id: idFOrNewTrack, name, artist, album }
       library.tracks[idFOrNewTrack] = newTrack
       console.log(library)
       }
addTrack('My Name', 'My Artist', 'My Album')
       
       



// adds a playlist to the library
const addPlaylist = function(name) {
       const addPlaylist = function(name) {
              const idFOrNewPlaylist = generateUid();
              const newPlaylists = { id: idFOrNewPlaylist, name, tracks: [] }
              library.playlists[idFOrNewPlaylist] = newPlaylists
              console.log(library)
              }
       addPlaylist('My Playlist Without track list')
              
              
}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}