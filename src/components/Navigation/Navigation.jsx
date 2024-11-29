import React from 'react';
import styles from './Navigation.module.scss';
import SmallButton from '../SmallButton/SmallButton';
import NavigationItem from './NavigationItem/NavigationItem';
import sidebarBlue from './../../img/sidebar.svg';
import star from './../../img/star.svg';
import pin from './../../img/no-pin.svg';
import filter from './../../img/filter.svg';

const Navigation = () => {
	return (
		<section className={styles.navigation}>
			<div className={styles.navigation__tab}>
				<button className={styles.tab__item}>
					<img className={styles.tab__icon} src={sidebarBlue} alt="sidebar" />
				</button>
				<button className={styles.tab__item}>
					<img className={styles.tab__icon} src={star} alt="favorite" />
				</button>
			</div>
			<div className={styles.navigation__field}>
				<div className={styles.navigation__search}>
					<div className={styles.input__container}>
						<input className={styles.navigation__input} type="text" placeholder='Поиск по меню' />
						<button className={styles.input__filterButton}>
							<img src={filter} alt="filter" />
						</button>	
					</div>
					<SmallButton src={pin} alt="no-pin" />
				</div>
				<div className={styles.navigation__list}>
					<div className={styles.navigation__item}>
						<NavigationItem text="Моя работа" />
						<NavigationItem text="Структура портала" />
						<NavigationItem text="Личное расписание" />
						<NavigationItem text="Отсутствие на рабочем месте" />
						<NavigationItem text="Портфель услуг" />
						<NavigationItem text="Дашборды" />
						<NavigationItem text="Доски задач" />
						<NavigationItem text="Обращения" />
						<NavigationItem text="События" />
						<NavigationItem text="Инциденты" />
						<NavigationItem text="Проблемы" />
						<NavigationItem text="Настройка каталогов" />
						<NavigationItem text="Запросы на обслуживание" />
						<NavigationItem text="Запросы на изменение" />
						<NavigationItem text="Управление конфигурации" />
						<NavigationItem text="Управление уровнем услуг" />
						<NavigationItem text="Настройка соответствий" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Navigation;