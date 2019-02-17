import React from 'react'

import CurrentSong from './components/current-song-container';
import PlaylistContainer from './components/playlist-container';

const App = ()=> {
  return (
  <div className='row'>
    <div className='col-lg-12'>
      <div className='introduction'>
        <div className='col-lg-6'>
          <div className='band-name'>
            <div className='first-name'>
              COURT
            </div>
            <div className='last-name'>
              SEARD
            </div>
          </div>
        </div>

        <div className='col-lg-6'>
          <div className='description'>
            <h2 className='introduction-title'>Meet Our Band</h2>
            <p>“The original sound of Ninja Folk from Hackney, London. Stories of ship-wrecks and shark-bites, blurry-eyed Hawaiian islands, post-apocalyptic hoe-downs and horse-races. it’s all there, 
              like a Brothers Grimm collection written in a foreign language, with some of the pages stuck together.”</p>
          </div>
        </div>
      </div>
    </div>
    <div className='col-lg-12'>
      <div className='col-lg-6'>
          <div className='cd'/>
      </div>
      <div className='col-lg-6'>
        <CurrentSong/>
      </div>
    </div>
    <div className='col-lg-12'>
      <PlaylistContainer/>
    </div>
  </div>);
}

export default App
