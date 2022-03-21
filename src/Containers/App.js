import React, { Component } from 'react';
import Keyboard from '../Components/Keyboard';
import './App.css';
import { beats } from '../Components/beats';

class App extends Component {
  render() {
    return (
      <div className='h100'>
        <h1 className='title'>DrumKit</h1>
        <div className='ma5'>
          <Keyboard beats={beats} />
        </div>
      </div>
    );
  }
}
export default App;
