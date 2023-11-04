import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './components/Child';






function App(props){
  const date = new Date();
  return (
    <div className='container'>
        <Child/>
    </div>
    
  )
}
export default App;
