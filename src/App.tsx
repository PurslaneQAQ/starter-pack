import React from 'react';
import { hot } from 'react-hot-loader';
import 'antd/dist/antd.css';
import './App.scss';
import cat from './images/cat.svg';

function App() {
  return (
    <div className="App">
      <img className="w-20 mb-5" alt="cat" src={cat} />
      <p>Starter Pack</p>
    </div>
  );
}

export default hot(module)(App);
