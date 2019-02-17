import { combineReducers } from 'redux'
import {
  SELECT_SONG,
  SELECT_PLAYLIST
} from '../actions'

const selecedSong = (state = {songIndex:0, playlistName:''}, action) => {
  switch (action.type) {

    case SELECT_SONG:
      return {
        songIndex:action.songIndex,
        playlistName:action.playlistName,
        src:action.src, 
        title:action.title
    }
    default:
      return state
  }
}

const selectedPlayList = (state = {playlistName:'', selectedPlaylistIndex:0}, action) => {
  switch (action.type) {

    case SELECT_PLAYLIST:
      return {
        playlistName:action.playlistName,
        selectedPlaylistIndex:action.playlistIndex
    }
    default:
      return state
  }
}
const rootReducer = combineReducers({
  selecedSong,
  selectedPlayList
})

export default rootReducer
