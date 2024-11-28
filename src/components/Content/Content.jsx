import React from 'react';
import styles from './Content.module.scss';
import BigButton from '../BigButton/BigButton';
import ContentBody from './ContentBody/ContentBody';

const Content = ({ onOpenModal }) => {
	return (
		<>
			<div className={styles.content__header}>
				<div className={styles.header__left}>
					<p className={styles.content__title}>Подзадача</p>
					<BigButton text="Создать" onClick={onOpenModal} />
				</div>
				<div className={styles.header__right}>
					<BigButton text="Сохранить" variant="blue" />
					<BigButton text="Сохранить и выйти" />
				</div>
			</div>
			<ContentBody mainTitle="STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller"/>
		</>
	);
}

export default Content;