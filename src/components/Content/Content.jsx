import React from 'react';
import styles from './Content.module.scss';
import BigButton from '../BigButton/BigButton';

const Content = () => {
	return (
		<section className={styles.content}>
			<div className={styles.content__header}>
				<div className={styles.header__left}>
					<p className={styles.content__title}>Подзадача</p>
					<BigButton text="Создать" />
				</div>
				<div className={styles.header__right}>
					<BigButton text="Сохранить" />
					<BigButton text="Сохранить и выйти" />
				</div>
			</div>
			<div className={styles.content__main}></div>

		</section>
	);
}

export default Content;