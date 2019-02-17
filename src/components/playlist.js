import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectPlayList} from '../actions';

const PlayList=(props)=>{
    const isPlayIng=props.playlistId==props.selectedPlaylistIndex;
    return(
        <li>
            <div className="songs-track-head">
                <div className="playlist-column songs-column-playlist">
                    {props.playlistName}
                </div>
                <div className="playlist-column songs-column-dot" >
                <span className={isPlayIng?"dot active":"dot"}/>
                </div>
                <div className="playlist-column songs-column-year">  
                {props.duration}
                </div>
                <div className="playlist-column songs-column-play-control" >  
                    <button  
                    className='listen'
                        onClick={()=>props.selectPlaylist(props.playlistName, props.playlistId)}
                    >LISTEN</button>
                </div>
                <div className="playlist-column songs-column-play-control" >  
                    <button  
                    className='buy'
                        onClick={()=>props.selectPlaylist(props.playlistName, props.playlistId)}
                    >BUY</button>
                </div>
            </div>

      </li>
      )

}
const mapStateToProps = state => {
    const { selectedPlayList } = state;
  
    return {
      selectedPlayList:selectedPlayList.selectedPlayList,
      selectedPlaylistIndex: selectedPlayList.selectedPlaylistIndex
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      selectPlaylist:(playlistName, playlistIndex)=>dispatch(selectPlayList(playlistName, playlistIndex))
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(PlayList);