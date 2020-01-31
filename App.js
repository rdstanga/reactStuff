import React from 'react';
import './App.css';
import { NotFound} from './store/NotFound'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import SignIn from './SignIn';

function App() {
  return (
    <div className="container"> 
    <div>
      <SignIn/>
      </div>
    </div> 
  );
}

export default App;