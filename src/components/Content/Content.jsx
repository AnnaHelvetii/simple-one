import React from 'react';
import styles from './Content.module.scss';
import BigButton from '../BigButton/BigButton';
import ContentBody from './ContentBody/ContentBody';

const Content = () => {
	return (
		<>
			<div className={styles.content__header}>
				<div className={styles.header__left}>
					<p className={styles.content__title}>Подзадача</p>
					<BigButton text="Создать" />
				</div>
				<div className={styles.header__right}>
					<BigButton text="Сохранить" variant="blue" />
					<BigButton text="Сохранить и выйти" />
				</div>
			</div>
			<ContentBody />
		</>
	);
}

export default Content;