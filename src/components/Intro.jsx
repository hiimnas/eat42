import React, { useState } from 'react';
import './intro.css';
import {meal} from '../const';

function Intro() {
  const vidRef = React.useRef();
  const [playVideo, setPlayVideo] = useState(false);
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    let ovl = document.querySelector('.video-overlay');

    if (playVideo) {
      ovl.style.background = 'rgba(0, 0, 0, 0.66)';
      vidRef.current.pause();
    }
    else {
      ovl.style.background = 'none';
      vidRef.current.play();
    }
  }

  return (
    <div className='video'>
      <video src={meal} ref={vidRef} type='video/mp4' loop controls={false} muted />
      <div className='video-overlay flex-center'>
        <div className='overlay-circle btn btn-outline-light flex-center' onClick={handleVideo}>
          {playVideo ? (
            <i className='bi bi-pause-fill'></i>
          ) : (
            <i className='bi bi-play-fill'></i>
          )}
        </div>
      </div>
    </div>
  )
}

export default Intro