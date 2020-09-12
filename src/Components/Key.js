import React from 'react';
import './Key.css';

const Key =({letter, name, id, onClick}) =>{
	return(
			<div className='grow'>
				<div data-key={id} className="key">	
					<h1 className=''>{letter}</h1>
					<p className="sound">{name}</p>
				</div>
			</div>
		)
}
export default Key;