import logo from "./logo.svg";
import "./App.css";
import Carousel from "./components/Carousel";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Carousel />
      </header>
    </div>
  );
}

export default App;
