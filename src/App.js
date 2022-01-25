import React, {useState} from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Weekly from './Weekly';
import Home from './Home';

function App() {
  const [week, weeekfo] = useState(["월", "화", "수", "목", "금", "토", "일"]);


  return (
    <div className="App">
      <Route exact path="/">
        <Home week={week}></Home>
      </Route>
      <Route path="/weekly/:id">
        <Weekly week={week}></Weekly>
      </Route>
    </div>
  );
}

export default App;
