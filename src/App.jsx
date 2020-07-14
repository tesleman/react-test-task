import React from 'react';
import Header from './Header/Header';

import './App.css';
import Assigment from './Assigment/Assigment'
import Acquainted from "./Acquainted/Acquainted";
import Users from "./Users/Users";
import Registration from "./Registration/Registration";


function App() {
  return (

    <div className={'maxWidth'}>
      <Header/>
        <Assigment/>
        <Acquainted/>
        <Users/>
        <Registration/>
      </div>

  );
}

export default App;
