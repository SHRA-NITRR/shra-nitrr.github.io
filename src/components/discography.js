import React from 'react'

import Playlist from './playlist';
import {playlist} from '../data';

const Discography=(props)=>{
    return(
        <div className='discography'>
          <h2 className='playlist-header'>{'Discography'}</h2>
          <ul className='track-list'>
              {
                  playlist.map((playListObj, index)=>{
                      return(
                        <Playlist
                            playlistName={playListObj.title}
                            duration={playListObj.duration}
                            playlistId={playListObj.playlistId}
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