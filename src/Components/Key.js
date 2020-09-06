import React from 'react';
import styles from './Key.module.css';

const Key = ({name, letter, id}) =>{
	return(
		// ba bw3 pv5 ph5 grow ma2 b--black bg-black-40 white br3 f4
			<div className={styles.key}>	
				<h1 className=''>{letter}</h1>
				<p className={styles.sound}>{name}</p>
			</div>
		)
}
export default Key;