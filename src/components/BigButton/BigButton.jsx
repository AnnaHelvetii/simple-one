import React from 'react';
import styles from './BigButton.module.scss';

const BigButton = ({ text }) => {
	return (
		<button className={styles.bigbutton}>
			{text}
		</button>
	);
}

export default BigButton;

