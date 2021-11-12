import React from "react";
import './App.css';
import Fibonacci from "./pages/Fibonacci";
import MenuPage from "./pages/Menu";
import Factorial from "./pages/Factorial";
import Circulo from "./pages/Circulo";
import Rectangulo from "./pages/Rectangulo";
import Triangulo from "./pages/Triangulo";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
        <Router>
          <Routes>
            <Route exact path="/" element={<MenuPage/>} />

            <Route exact path="/fibonacci" element={<Fibonacci/>} />
            <Route exact path="/factorial" element={<Factorial/>}/>
            <Route exact path="/triangulo" element={<Triangulo/>}/>
            <Route exact path="/circulo" element={<Circulo/>}/>
            <Route exact path="/rectangulo" element={<Rectangulo/>}/>

          </Routes>
        </Router>
    );
  }
}

export default App;
