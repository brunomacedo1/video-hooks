import React, { useEffect, useState } from 'react'; 
import SearchBar from './SearchBar/SearchBar';
import VideoList from './VideoList/VideoList';
import VideoDetail from './VideoDetail/VideoDetail';
import useVideos from '../hooks/useVideo';



const App = () =>{
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('buildings');

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  return (
    <div className="ui container">
      <SearchBar onInputSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
          <VideoDetail video={selectedVideo}/>
          </div>
          <div className="five wide column">
            <VideoList 
              onVideoSelect={setSelectedVideo} 
              videos={videos} 
            />
          </div>
        </div>
      </div>
    </div>
  );

}

export default App;