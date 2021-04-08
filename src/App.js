import logo from "./logo.svg";
import "./App.css";
import Vimeo from "@u-wave/react-vimeo";
import Header from "./components/Header";
import P5Wrapper from "react-p5-wrapper";
import sketch from "./components/Sketch";

const videos = ["https://vimeo.com/532356163"]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Vimeo className="vimeo" video={videos[0]} />
      </header>
    </div>
  );
}

export default App;
