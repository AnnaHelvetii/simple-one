import React from 'react';
import styles from './Modal.module.scss';
import BigButton from '../BigButton/BigButton';
import ContentBody from './../Content/ContentBody/ContentBody';
import close from './../../img/close-x.svg';

const Modal = () => {
	return (
		<>
			<div className={styles.modalOverlay} />
			<div className={styles.modal}>
				<div className={styles.modal__header}>
					<div className={styles.header__left}>
						<p className={styles.modal__title}>Подзадача</p>
					</div>
					<button className={styles.closeButton}>
						<img src={close} alt="close" />
					</button>
					<div className={styles.header__right}>
						<BigButton text="Сохранить" variant="blue" />
						<BigButton text="Сохранить и выйти" />
					</div>
					</div>
				<ContentBody mainTitle="Новая запись" style={{ padding: 16 }} />
				<div className={styles.modal__buttons}>
					<BigButton text="Сохранить" variant="blue" />
					<BigButton text="Сохранить и выйти" />
				</div>
			</div>
		</>
	);
}

export default Modal;