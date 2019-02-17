export const SELECT_SONG= 'SELECT_SONG';
export const SELECT_PLAYLIST= 'SELECT_PLAYLIST';

export const selectSong = (songIndex, playlistName,  src, title) => ({
  type: SELECT_SONG,
  songIndex,
  playlistName,
  src, 
  title
})

export const selectPlayList = (playlistName, playlistIndex) => ({
  type: SELECT_PLAYLIST,
  playlistName,
  playlistIndex
})


