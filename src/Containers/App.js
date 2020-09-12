import React, { Component } from 'react';
import Keyboard from '../components/Keyboard';
import  './App.css';
import { beats } from '../components/beats';

class App extends Component {
 	render() {
 		return (
 			<div className='h100'>
 				<h1 className='title'>DrumKit</h1>
 				<div  className='ma6' >
 					<Keyboard beats={beats} />
 				</div>
 			</div>
 		);
 	}
}
export default App;