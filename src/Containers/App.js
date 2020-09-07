import React, { Component } from 'react';
import Keyboard from '../Components/Keyboard';
import styles from './App.module.css';
import { beats } from '../Components/beats';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			beats: beats,
			style: 'style.key'
		};
		this.onKeyUp = this.onKeyUp.bind(this);
	}

	onKeyUp(event){
		beats.map((user, i) =>{
			if(event.charCode === beats[i].id){
				this.setState({
					style: 'test' 
				});
			}
			return this.state;
		})
	}

 componentDidMount(){
    document.addEventListener("keydown", this.onKeyUp, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.onKeyUp, false);
  }

 	render() {
 		const test = [ {"name": "styles.key"}];
 		console.log(test)
 		return (
 			<div className='h100'>
 				<h1 className={styles.title}>DrumKit</h1>
 				<div  className='ma6' >
 					<Keyboard beats={beats} />
 				</div>
 			</div>
 		);
 	}
}
export default App;