import React from 'react';
import styles from './Header.module.scss';
import logo from './../../img/logo.svg';
import avatar from './../../img/avatar.png';
import settings from './../../img/settings.svg';
import sidebarBl from './../../img/sidebar-black.svg';
import SmallButton from '../SmallButton/SmallButton';

const Header = () => {
	return (
		<header className={styles.header}>
			<img className={styles.logo} src={logo} alt="logo" />
			<button className={styles.menu__sidebar}>
				<img className={styles.sidebar__image} src={sidebarBl} alt="settings" />
			</button>
			<div className={styles.header__menu}>
				<input className={styles.menu__input} type="text" placeholder='Поиск' />
				<div className={styles.menu__user}>
					<div className={styles.user__avatar}>
						<img 
							className={styles.user__photo} 
							src={avatar}
							alt="user" 
						/>
					</div>
					<p className={styles.user__name}>Максим Галактионов</p>
				</div>
				<SmallButton src={settings} alt="settings" />
			</div>
		</header>
	);
}

export default Header;