import logo from "./logo.svg";
import "./App.css";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Carousel />
        <Form/>
      </header>
    </div>
  );
}

export default App;
