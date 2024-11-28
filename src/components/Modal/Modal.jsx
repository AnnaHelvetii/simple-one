import React, {useState} from 'react';
import styles from './Modal.module.scss';
import BigButton from '../BigButton/BigButton';
import FormItem from '../Content/FormItem/FormItem';
import InputWithBadges from '../Content/InputWithBadges/InputWithBadges';
import search from './../../img/search.svg';
import calendar from './../../img/calendar.svg';
import Content from '../Content/Content';

const Modal = () => {
	// const [responsibleBadges, setResponsibleBadges] = useState(['Константин Константинопольский']);
    // const [groupBadges, setGroupBadges] = useState(['Support Group']);
    // const [approversBadges, setApproversBadges] = useState(
	// 	['Андрей Пивоваров', 'Максим Галактионов', 'Алла Лин', 'Константин Константинопольский Константинович', 
	// 	'Игорь Иванченко', 'Юлия Эйчаровна', 'Артём Подпрыгайко-Саппортов', 'Илья Вазнец', 'Михаил Вортенов',
	// 	'Наталья Нашевна', 'Евгения Итамовна', 'Алиса Киральчук']);
	// const [whoOpen, setWhoOpen] = useState(['Андрей Пивоваров']);
	// const [whoCreate, setWhoCreate] = useState(['Андрей Пивоваров']);

    // const handleRemoveBadge = (setBadges) => (index) => {
    //     setBadges((prevBadges) => prevBadges.filter((_, i) => i !== index));
    // };

	return (
		<>
		<div className={styles.modalOverlay} />
		<div className={styles.modal}>
			<Content />
			{/* <div className={styles.content__header}>
				<div className={styles.header__left}>
					<p className={styles.content__title}>Подзадача</p>
					<BigButton text="Создать" />
				</div>
				<div className={styles.header__right}>
					<BigButton text="Сохранить" variant="blue" />
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
						onRemoveBadge={handleRemoveBadge(setResponsibleBadges)}
					/>
					<InputWithBadges
                        badgesType="default"
                        label="Группа"
                        badges={groupBadges}
                        onRemoveBadge={handleRemoveBadge(setGroupBadges)}
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
                        onRemoveBadge={handleRemoveBadge(setApproversBadges)}
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
                        onRemoveBadge={handleRemoveBadge(setWhoOpen)}
					/>
					<InputWithBadges 
						badgesType="default" 
						label="Кем создано"
						badges={whoCreate}
                        onRemoveBadge={handleRemoveBadge(setWhoCreate)} 
					/>
				</div>
			</div> */}
		</div>
		</>
	);
}

export default Modal;