import { YouTubeVideoProps } from "../../@types/video";
import { VideoContainer, VideoIframe } from "./styles";

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoUrl }) => {
    return (
      <VideoContainer>
        <VideoIframe
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen={true}
        />
      </VideoContainer>
    );
  };
  
  export default YouTubeVideo;