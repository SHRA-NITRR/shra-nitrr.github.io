import React, { Component } from 'react'

import Song from './song';
import {songsList} from '../data';

const SongList=(props)=>{
    const {playlistName, songs}=songsList;
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
                            key={index}
                        />
                      )
                  })
              }
          </ul>
        </div>
      )

}

export default SongList;