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
import Add from './Add';


function Home() {
  return (
    <div >
      <h2>Welcome to my app</h2>
    </div>
  );
}

function App() {
  
  return (
    <Router>
      <div>

      <div className={'nav-bar bg-white rounded'}>
      
        <ul className={'container'}>
            <li className={'logo inline-block p-4 text-white text-xl cursor-pointer tracking-widest pl-10 pr-10'}>
            <i class="logo-icon fas fa-shapes"></i>
            <Link to="/home">TodoList</Link>
              </li>
              <li className={'nav-item1 nav-items inline-block text-gray-400 p-5 text-white text-l cursor-pointer tracking-widest pl-10 pr-10'}>
                <Link to="/about">About</Link>
              </li>  
              <li className={'nav-item2 nav-items inline-block text-gray-400 p-5 text-white text-l cursor-pointer tracking-widest pl-10 pr-10'}>
                <Link to="/todos">Todos</Link>
              </li>
              <li className={'nav-item3 nav-items inline-block text-gray-400 p-5 text-white text-l cursor-pointer tracking-widest pl-10 pr-10'}>
                <Link to="/contact">Contact</Link>
              </li>
              
        </ul>
      </div>
        
        <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/todos">
              <Add />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
