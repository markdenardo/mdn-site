import Vimeo from "@u-wave/react-vimeo";

function VideoCard() {
  return (
    <div className="App">
      <header className="App-header">
        <Vimeo video="https://vimeo.com/532356163" autoplay />
      </header>
    </div>
  );
}

export default VideoCard;