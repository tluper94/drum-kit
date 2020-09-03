import React, { Component } from 'react';
import Keyboard from '../components/Keyboard';
import styles from './App.module.css';

class App extends Component {

	constructor(){
		super()
		this.state = {

		}
	}

 	render() {
 		return (
 			<div className='h100'>
 				<h1 className='tc '>DrumKit</h1>
 				<div  className='ma6'>
 					<Keyboard />
 				</div>
 			</div>
 		);
 	}
}
export default App;