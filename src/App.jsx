// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import Video from './Video/Video.jsx';
import { VIDEOS } from './videos.jsx';
import './App.css'

function App() {
  const result = "The best App"
    return (
    <>
        <div className='video-container'> 
          {/* {<Video title="Video 1" channelName="CM JS" img={reactLogo} />} */}
          {
            VIDEOS.map((video) => (
              <Video
                key= {video.id}
                title={video.title}
                channelName={video.channelName}
                img={video.img} />
            ))
          }
          </div>
          
      
    </>
  )
}

export default App
