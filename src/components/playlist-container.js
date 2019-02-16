import React, { Component } from 'react'

import SongList from './song-list';
import Discography from './discography';

const PlaylistContainer=(props)=>{
    return(
          <div className='row playlist-container'>
              <div className='col-lg-6'>
                  <Discography/>
              </div>
              <div className='col-lg-6 row'>
                <SongList/>
              </div>
          </div>
      )

}

export default PlaylistContainer;