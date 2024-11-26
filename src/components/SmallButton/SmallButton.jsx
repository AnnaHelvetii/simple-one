import React from 'react';
import styles from './SmallButton.module.scss';

const SmallButton = ({ src, alt }) => {
	return (
		<button className={styles.smallbutton}>
			<img className={styles.smallbutton__image} src={src} alt={alt} />
		</button>
	);
}

export default SmallButton;

