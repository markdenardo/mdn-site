import "./App.css";
import Vimeo from "@u-wave/react-vimeo";
import Header from "./components/Header";
import P5Wrapper from "react-p5-wrapper";
import sketch from "./components/Sketch";
import Footer from "./components/Footer";

const videos = ["https://vimeo.com/532356163"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Vimeo className="vimeo" video={videos[0]} />
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
