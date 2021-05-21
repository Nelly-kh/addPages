import './App.css';
import Context from "./Context";
import Header from './Header';
import Navigation from "./Navigation";
import {BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <>
         <Router>
      <Context>
         <Header />
        <Navigation/>
        </Context>
        </Router>
      </>
  );
}

export default App;
