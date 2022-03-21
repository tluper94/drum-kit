import { Component } from 'react';
import './Key.css';

class Key extends Component {
  render() {
    const { id, letter, src, name, onClick, audioRef, keyRef } = this.props;
    audioRef.current = [];
    return (
      <div className='grow'>
        <audio
          ref={(sound) => audioRef.current.push(sound)}
          id={id}
          src={src}
        />
        <div
          ref={(key) => keyRef.current.push(key)}
          id={id}
          className='key'
          onClick={onClick}
        >
          <h1>{letter}</h1>
          <p className='sound'>{name}</p>
        </div>
      </div>
    );
  }
}
export default Key;
