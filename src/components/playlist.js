import React, { Component } from 'react'
import { connect } from 'react-redux'
import {selectSong } from '../actions';

const PlayList=(props)=>{
    const isPlayIng=props.songIndex==props.playingSongIndex;
    return(
        <li>
            <div className="audiolibrary-track-head">
                <div className="playlist-column audiolibrary-column-playlist">
                    {props.title}
                </div>
                <div className="playlist-column audiolibrary-column-dot" >
                <span className="dot"/>
                </div>
                <div className="playlist-column audiolibrary-column-year">  
                {7875}
                </div>
                <div className="playlist-column audiolibrary-column-play-control" >  
                    <button  
                    className='listen'
                        onClick={()=>props.playSong(props.songIndex, props.playlistName, props.src, props.title)}
                    >LISTEN</button>
                </div>
                <div className="playlist-column audiolibrary-column-play-control" >  
                    <button  
                    className='buy'
                        onClick={()=>props.playSong(props.songIndex, props.playlistName, props.src, props.title)}
                    >BUY</button>
                </div>
            </div>

      </li>
      )

}
const mapStateToProps = state => {
    const { selecedSong } = state;
  
    return {
      playingSongIndex:selecedSong.songIndex
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      playSong:(songIndex, playlistName, src, title)=>dispatch(selectSong(songIndex, playlistName, src, title))
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(PlayList);