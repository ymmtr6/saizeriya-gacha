import React from 'react';
import logo from './logo.svg';
import './App.css';
import Block from './components/Block';
import smartphone from './img/smartphone.png';

function App() {

  return (
    <div className="App">
      <div className='frame'>
        <img className='frame-img' src={smartphone}></img>
      </div>
      <header className="App-header main">
        <Block />
      </header>
    </div>
  );
}

export default App;
