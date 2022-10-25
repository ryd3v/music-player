const { Amplitude } = require('amplitudejs');

// todo: player configuration
Amplitude.init({
  songs: [
    {
      name: 'David Hilowitz - Equilibrium I (Cello version)',
      artist: 'David Hilowitz',
      album: 'Equilibrium I (Cello version)',
      url: './music/David_Hilowitz_-_Equilibrium_I_Cello_version.mp3',
      cover_art_url: './music/equilibrium.jpeg',
    },
  ],
});
