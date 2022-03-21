//Imports
import { Component, createRef } from 'react';
import Key from './Key';
import './Key.css';

//Component Keyboard
class Keyboard extends Component {
  constructor() {
    super();
    this.keys = createRef();
    this.sounds = createRef();
  }
  //Handles key press and plays audio

  handleKeyDown = (e) => {
    //Selects audio and keys
    let key;
    let audio;

    for (const el of this.keys.current) {
      if (Number(el.id) === e.keyCode) {
        key = el;
      }
    }

    for (const sound of this.sounds.current) {
      if (Number(sound.id) === e.keyCode) {
        audio = sound;
      }
    }
    // const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    this.props.beats.map((beat, i) => {
      if (e.keyCode === beat.id) {
        key.classList.add('playing');
      }
      return key;
    });
    //Cheacks if audio is playing
    if (!audio) return;
    audio.currentTime = 0;
    //Plays audio
    audio.play();
  };

  //Handles click and plays audio
  handleClick = (e) => {
    const x = e.currentTarget;
    x.classList.add('playing');
    let audio;
    console.log(this.sounds);
    for (const sound of this.sounds.current) {
      console.log('handleClick', sound);
      if (sound.id === x.id) {
        audio = sound;
      }
    }
    if (!audio) return;
    audio.currentTime = 0;
    //Plays audio
    audio.play();
  };

  // Removes "playing" class after key is released
  removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  //React hook to change the DOM after render
  componentDidMount() {
    // Listens for keypress
    window.addEventListener('keydown', this.handleKeyDown);
    // Creates and array from the ".key" class
    const keys = Array.from(document.querySelectorAll('.key'));
    //Loops through  array and and listens for 'transitionend' event and calls the removeTransition function
    keys.forEach((key) =>
      key.addEventListener('transitionend', this.removeTransition)
    );
  }

  render() {
    this.keys.current = [];
    return (
      <div className='flex flex-wrap flex-auto items-center justify-center '>
        {
          //Loops through beats object and add a key for each one
          this.props.beats.map((beat, i) => {
            return (
              <Key
                key={beat.id}
                letter={beat.key}
                name={beat.name}
                id={beat.id}
                onClick={this.handleClick}
                src={beat.src}
                keyRef={this.keys}
                audioRef={this.sounds}
              />
            );
          })
        }
      </div>
    );
  }
}
export default Keyboard;
