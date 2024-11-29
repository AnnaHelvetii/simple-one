import React, { useState, useRef, useEffect } from 'react';
import styles from './Content.module.scss';
import BigButton from '../BigButton/BigButton';
import ContentBody from './ContentBody/ContentBody';

const Content = ({ onOpenModal }) => {
	const [hasShadow, setHasShadow] = useState(false);
    const scrollableRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollableRef.current.scrollTop > 0) {
                setHasShadow(true);
            } else {
                setHasShadow(false);
            }
        };

        const scrollableElement = scrollableRef.current;
        scrollableElement.addEventListener('scroll', handleScroll);

        return () => {
            scrollableElement.removeEventListener('scroll', handleScroll);
        };
    }, []);

	return (
		<div className={styles.content}>
			<div className={`${styles.content__header} ${
                    hasShadow ? styles.content__headerShadow : ''
                }`}>
				<div className={styles.header__left}>
					<p className={styles.content__title}>Подзадача</p>
					<BigButton text="Создать" onClick={onOpenModal} />
				</div>
				<div className={styles.header__right}>
					<BigButton text="Сохранить" variant="blue" />
					<BigButton text="Сохранить и выйти" />
				</div>
			</div>
			<div className={styles.content__body} ref={scrollableRef}>
				<ContentBody mainTitle="STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller"/>
			</div>
		</div>
	);
}

export default Content;