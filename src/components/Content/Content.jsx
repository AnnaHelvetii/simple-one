import React from 'react';
import styles from './Content.module.scss';
import BigButton from '../BigButton/BigButton';
import FormItem from './FormItem/FormItem';
import InputWithBadges from './InputWithBadges/InputWithBadges';
import search from './../../img/search.svg';
import calendar from './../../img/calendar.svg';

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
			<div className={styles.content__main}>
				<p className={styles.main__title}>
				STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller
				</p>
				<div className={styles.form__container}>
					<FormItem 
						label="Тема" 
						value="На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller"
						isRequired
					/>
					<FormItem label="Статус" value="Новая" id="half-width" />
					<FormItem label="Описание" id="half-width" />
					<FormItem label="Продукт" value="Platform" id="half-width-button"
						variant="half-with-button"
						buttonIcon={
							<img src={search} alt="search" />
						}
					/>
					<FormItem 
						label="Рабочие заметки" 
						value="Проверить ACL id=172830402014193655"
						isRequired
						id="half-width"
					/>
					<FormItem label="Приоритет" value="Средний" id="half-width" />
					<InputWithBadges badgesType="default" label="Ответственный" />
					<InputWithBadges badgesType="default" label="Группа" />
					<FormItem 
						id="full-width" 
						label="Комментарии" 
					/>
					<InputWithBadges badgesType="full-width" label="Согласующие" />
					<FormItem 
						label="Когда открыто" 
						value="" 
						id="half-width-button"
						variant="half-with-button"
						buttonIcon={
							<img src={calendar} alt="calendar" />
						}
					/>
					<FormItem 
						label="Когда создано" 
						value="22.10.2024" 
						id="half-width-button" 
						variant="half-with-button"
						buttonIcon={
							<img src={calendar} alt="calendar" />
						}
					/>
					<InputWithBadges badgesType="default" label="Кем открыто" />
					<InputWithBadges badgesType="default" label="Кем создано" />
				</div>
			</div>

		</section>
	);
}

export default Content;