import React from 'react'
import Proptype from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';

const MusicPlayer=(props)=>{
    return(
        <ReactAudioPlayer
            src={props.src}
            autoPlay={true}
            controls={true}
            loop={true}
        />
    )
}

MusicPlayer.Proptype={
    src: Proptype.string.isRequired

}

export default MusicPlayer;