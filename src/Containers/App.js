import React, { Component } from 'react';
import Keyboard from '../components/Keyboard';
import styles from './App.module.css';
import { beats } from '../components/beats';

class App extends Component {

	constructor(){
		super()
		this.state = {
			beats: beats
		}
	}

 	render() {
 		return (
 			<div className='h100'>
 				<h1 className={styles.title}>DrumKit</h1>
 				<div  className='ma6'>
 					<Keyboard beats={beats} />
 				</div>
 			</div>
 		);
 	}
}
export default App;