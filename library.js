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
                  },
     // prints a list of all playlists, in the form:
     // p01: Coding Music - 2 tracks
     // p02: Other Playlist - 1 tracks
       printPlaylists: function() {
         for (const [key, value] of Object.entries(this.playlists)) {
           const tracksCount = value.tracks.length;
           const id = key;
           const name = value.name;
           const result = `${id}: ${name} - ${tracksCount} tracks`
           console.log(result);
         }
       },
       // prints a list of all tracks, using the following format:
       // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
       // t02: Model View Controller by James Dempsey (WWDC 2003)
       // t03: Four Thirty-Three by John Cage (Woodstock 1952)
       printTracks: function() {
         for (const [key, value] of Object.entries(this.tracks)) {
           const name = value.name;
           const artist = value.artist;
           const album = value.album;
           const result = `${key}: ${name} by ${artist} (${album})`
           console.log(result);
         }
       },
     
       // prints a list of tracks for a given playlist, using the following format:
     // p01: Coding Music - 2 tracks
     // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
     // t02: Model View Controller by James Dempsey (WWDC 2003)
     printPlaylist: function(playlistId) {
     
       const trackById = this.tracks[playlistId]
       const playlistById = this.playlists[playlistId]
     
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
     },
     
     
     // adds an existing track to an existing playlist
     addTrackToPlaylist: function(trackId, playlistId) {
         const trackById = this.tracks[trackId].id
         const tracksByLlaylistId = this.playlists[playlistId].tracks
         tracksByLlaylistId.push(trackById)
         console.log(tracksByLlaylistId)
     },
     //addTrackToPlaylist('t01', 'p01')
     
     // generates a unique id
     // (already implemented: use this for addTrack and addPlaylist)
     generateUid: function() {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
     },
     
     
     // adds a track to the library
     addTrack: function(name, artist, album) {
       const idFOrNewTrack = this.generateUid();
       const newTrack = { id: idFOrNewTrack, name, artist, album }
       this.tracks[idFOrNewTrack] = newTrack
       console.log(this.tracks, this.playlists)
     },
     //addTrack('My Name', 'My Artist', 'My Album')
     
     // adds a playlist to the library
     addPlaylist: function(name) {
       const idFOrNewPlaylist = this.generateUid();
       const newPlaylists = { id: idFOrNewPlaylist, name, tracks: [] }
       this.playlists[idFOrNewPlaylist] = newPlaylists
       console.log(this.tracks, this.playlists)
     },
     //addPlaylist('My Playlist Without track list')
     
     // STRETCH:
     // given a query string string, prints a list of tracks
     // where the name, artist or album contains the query string (case insensitive)
     // tip: use "string".search("tri") 
     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
     
     printSearchResults: function(query) {
       const tracks = this.tracks;
     
     
     }
     
     };
     
     library.printPlaylists()
     library.printTracks()
     library.addTrackToPlaylist('t01', 'p01')
     library.addTrack('My Name', 'My Artist', 'My Album')
     library.addPlaylist('My Playlist Without track list')
     
     