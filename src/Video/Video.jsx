import { useState } from 'react';
import './Video.css';

function Video(props) {
        const { title, channelName, img } = props;
       
        const [likesCount, setLikesCount] = useState(0)

        const increaseLikesByOne = () => {
              setLikesCount(prevCount => prevCount + 1) 
                console.log(title, likesCount);
          
        };
    return (<div className='video'>
            <img className='video-img' src={img} alt={ `${title} thumbnail`}/>
            <p className='video-title'>{title}</p>
            <p className='video-channel'>{channelName}</p>
            <div className='video-footer'>
              <p>Likes: {likesCount}</p>
              <button className='video-btn' onClick={increaseLikesByOne}>Likes</button>
        </div>
        </div>
        );
}
export default Video;