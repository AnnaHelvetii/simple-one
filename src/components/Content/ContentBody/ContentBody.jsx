import React from 'react';
import styles from './ContentBody.module.scss';
import FormItem from './../FormItem/FormItem';
import InputWithBadges from './../InputWithBadges/InputWithBadges';
import search from './../../../img/search.svg';
import calendar from './../../../img/calendar.svg';

const Content = ({ mainTitle }) => {
	const responsibleBadges = ['Константин Константинопольский'];
    const groupBadges = ['Support Group'];
    const approversBadges = 
		['Андрей Пивоваров', 'Максим Галактионов', 'Алла Лин', 'Константин Константинопольский Константинович', 
		'Игорь Иванченко', 'Юлия Эйчаровна', 'Артём Подпрыгайко-Саппортов', 'Илья Вазнец', 'Михаил Вортенов',
		'Наталья Нашевна', 'Евгения Итамовна', 'Алиса Киральчук'];
	const whoOpen = ['Андрей Пивоваров'];
	const whoCreate = ['Андрей Пивоваров'];

	return (
		<>
			<div className={styles.content__main} >
				<p className={styles.main__title}>
					{mainTitle}
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
					<FormItem 
						label="Приоритет" 
						value="Средний" 
						id="half-width" 
						variant='half'
					/>
					<InputWithBadges
						badgesType="default"
						label="Ответственный"
						badges={responsibleBadges}
					/>
					<InputWithBadges
                        badgesType="default"
                        label="Группа"
                        badges={groupBadges}
                    />
					<FormItem
						variant='full'
						id="full-width" 
						label="Комментарии" 
					/>
					<InputWithBadges
                        badgesType="full-width"
                        label="Согласующие"
                        badges={approversBadges}
                    />
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
					<InputWithBadges 
						badgesType="default" 
						label="Кем открыто" 
						badges={whoOpen}
					/>
					<InputWithBadges 
						badgesType="default" 
						label="Кем создано"
						badges={whoCreate}
					/>
				</div>
			</div>
		</>
	);
}

export default Content;