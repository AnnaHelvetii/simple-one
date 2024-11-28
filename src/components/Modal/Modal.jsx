import React, { useEffect } from 'react';
import styles from './Modal.module.scss';
import BigButton from '../BigButton/BigButton';
import ContentBody from './../Content/ContentBody/ContentBody';
import close from './../../img/close-x.svg';

const Modal = ({ isOpen, onClose }) => {
	useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

	return (
		<>
			<div className={styles.modalOverlay} onClick={onClose} />
			<div className={styles.modal}>
				<div className={styles.modal__header}>
					<div className={styles.header__left}>
						<p className={styles.modal__title}>Подзадача</p>
					</div>
					<button className={styles.closeButton} onClick={onClose}>
						<img src={close} alt="close" />
					</button>
					<div className={styles.header__right}>
						<BigButton text="Сохранить" variant="blue" />
						<BigButton text="Отменить" onClick={onClose} />
					</div>
					</div>
				<div className={styles.content__wrapper}>
					<ContentBody 
						mainTitle="Новая запись" 
					/>
				</div>
				<div className={styles.modal__buttons}>
					<BigButton text="Сохранить" variant="blue" />
					<BigButton text="Отменить" onClick={onClose} />
				</div>
			</div>
		</>
	);
}

export default Modal;