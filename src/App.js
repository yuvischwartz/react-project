import logo from './logo.svg';
import './App.css';
import './index.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//import React, {useState} from "react";
//import {render} from "react-dom";
import About from "./About.js";
import Todos from "./Todos.js";
import Contact from "./Contact.js";

function Home() {
  return <h2>Welcome to my app</h2>;
}

function App() {
  return (
   <Router>
      <div>
          <ul className={'text-center bg-gray-500 '}>
              <li className={'inline-block p-5 text-white text-xl cursor-pointer tracking-widest pl-10 pr-10'}>
                <Link to="/about">About</Link>
              </li>  
              <li className={'inline-block p-5 text-white text-xl cursor-pointer tracking-widest pl-10 pr-10'}>
                <Link to="/todos">Todos</Link>
              </li>
              <li className={'inline-block p-5 text-white text-xl cursor-pointer tracking-widest pl-10 pr-10'}>
                <Link to="/contact">Contact</Link>
              </li>
          </ul>
        
        <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/todos">
              <Todos />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
