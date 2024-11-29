import React from 'react';
import styles from './NavigationItem.module.scss';
import arrow from './../../../img/arrow.svg';

const NavigationItem = ({ text }) => {
	return (
		<div className={styles.navigation__item}>
			<img className={styles.item__icon} src={arrow} alt="arrow" />
			<p className={styles.item__title}>{text}</p>
		</div>
	);
}

export default NavigationItem;

