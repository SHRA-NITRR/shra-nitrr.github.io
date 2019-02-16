import React, { Component } from 'react'

import Playlist from './playlist';
import {songsList} from '../data';

const Discography=(props)=>{
    const {playlistName, songs}=songsList;
    return(
        <div className='discography'>
          <h2 className='playlist-header'>{'Discography'}</h2>
          <ul className='track-list'>
              {
                  songs.map((song, index)=>{
                      return(
                        <Playlist
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

export default Discography;