import React from 'react';
import Key from './Key';
import './Key.css';
import clap from '../sounds/clap.wav';
import hihat from '../sounds/hihat.wav';
import kick from '../sounds/kick.wav';
import openhat from '../sounds/openhat.wav';
import boom from '../sounds/boom.wav';
import ride from '../sounds/ride.wav';
import snare from '../sounds/snare.wav';
import tom from '../sounds/tom.wav';
import tink from '../sounds/tink.wav';

const Keyboard = ({beats}) => {
	const handleKeyDown = (e) => {
		//Selects audio and keys
		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		 const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
		 // Checks if keyCode is equal to key ID and changes class to "playing" when key is pressed.
		 beats.map ((user, i) =>{
		 	if(e.keyCode === beats[i].id){
				key.classList.add('playing');
		 	}
		 	return key;
		 })
		 //Cheacks if audio is playing
		 if(!audio) return;
		 audio.currentTime = 0;
		 //Plays audio
		 audio.play();
	}
// Removes "playing" class after key is released
	  function removeTransition(e) {
	    if (e.propertyName !== 'transform') return;
	    e.target.classList.remove('playing');
	  }
	  //React hook to change the DOM after render
	React.useEffect(() => {
		// Listens for keypress
		window.addEventListener('keydown', handleKeyDown);
		// Creates and array from the ".key" class
		const keys = Array.from(document.querySelectorAll('.key'));
		//Loops through  array and and listens for 'transitionend' event and calls the removeTransition function
		keys.forEach(key => key.addEventListener('transitionend', removeTransition));
		return () => {
			// Cleans up and removes eventlisteners
			window.removeEventListener('keydown', handleKeyDown);
			keys.forEach(key => key.removeEventListener('transitionend', removeTransition));
		};
	});

		return (
			<div className='flex flex-wrap flex-auto items-center justify-center '>
			{
				// Adds audio files
			}
				<audio data-key="65"  src={clap}></audio>
				<audio data-key="83" src={hihat}></audio>
				<audio data-key="68" src={kick}></audio>
				<audio data-key="70" src={openhat}></audio>
				<audio data-key="71" src={boom}></audio>
				<audio data-key="72" src={ride}></audio>
				<audio data-key="74" src={snare}></audio>
				<audio data-key="75" src={tom}></audio>
				<audio data-key="76" src={tink}></audio>
				{
					//Loops through beats object and add a key for each one
					 beats.map((user, i) => {
						return (
							<Key 
								key={beats[i].id} 
								letter={beats[i].key} 
								name={beats[i].name} 
								id={beats[i].id}
							/>
						); 
					})
				}
			</div>
		)
}
export default Keyboard;