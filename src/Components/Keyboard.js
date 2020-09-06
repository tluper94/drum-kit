import React from 'react';
import Key from './Key';

const Keyboard = ({ beats}) =>{
	return (
			<div className='flex flex-wrap flex-auto items-center justify-center '>
				{
					 beats.map((user, i) => {
						return (
							<Key 
								key={beats[i].id} 
								letter={beats[i].key} 
								name={beats[i].name} 
							/>
						); 
					})
				}
			</div>
		);
}
export default Keyboard;