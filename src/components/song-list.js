import React from 'react'
import { connect } from 'react-redux'

import Song from './song';
import {songsList} from '../data';

const SongList=(props)=>{
    const {selectedPlaylistIndex}=props;
    const {songs, playlistName}=songsList[selectedPlaylistIndex];
    return(
        <div className='track-container'>
          <h2 className='playlist-header'>{playlistName}</h2>
          <ul className='track-list'>
              {
                  songs.map((song, index)=>{
                      return(
                        <Song
                            title={song.title}
                            src={song.download_url}
                            duration={song.duration}
                            playlistName={playlistName}
                            songIndex={index}
                            playlistIndex={selectedPlaylistIndex}
                            key={index}
                        />
                      )
                  })
              }
          </ul>
        </div>
      )

}
const mapStateToProps = state => {
  const { selectedPlayList } = state;

  return {
    selectedPlayList:selectedPlayList.selectedPlayList,
    selectedPlaylistIndex: selectedPlayList.selectedPlaylistIndex
  }
}
export default connect(mapStateToProps) (SongList);