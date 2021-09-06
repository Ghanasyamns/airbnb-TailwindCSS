import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Result from "./pages/Result/Result";
function App() {
  return (
    <div className="app">
      <Router>
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Home} />
        <Route exact path="/city/:cityName" component={Result} />
        <Route exact path="/common/:location" component={Result}/>

        <Route path="/" component={Footer} />
      </Router>
    </div>
  );
}

export default App;
