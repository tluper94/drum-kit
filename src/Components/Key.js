import React from 'react';
import styles from './Key.module.css';

const Key = ({name, letter, id}, style) =>{
	return(
		// ba bw3 pv5 ph5 grow ma2 b--black bg-black-40 white br3 f4
			<div className='grow'>
				<div className={style}>	
					<h1 className=''>{letter}</h1>
					<p className={styles.sound}>{name}</p>
				</div>
			</div>
		)
}
export default Key;