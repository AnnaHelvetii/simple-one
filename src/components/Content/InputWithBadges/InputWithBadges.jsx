import React from 'react';
import styles from './InputWithBadges.module.scss';
import plus from './../../../img/plus.svg';
import search from './../../../img/search.svg';
import micro from './../../../img/micro-button.svg';
import close from './../../../img/close-x.svg';

const InputWithBadges = ({ badgesType = 'default', label, badges = [] }) => {
    return (
        <div className={`${styles.inputWithBadges} ${badgesType === 'full-width' ? styles.fullWidth : styles.default}`}>
            {label && <label className={styles.inputLabel}>{label}</label>}

            <div className={styles.inputRow}>
                <div className={styles.inputContainer}>
					<button className={styles.removeBadgeButton}>
						<img src={micro} alt="delete" />
					</button>
                    {badges.map((badge, index) => (
                        <span key={index} className={styles.badge}>
							<p className={styles.badge__title}>
								{badge}
							</p>
                            <img src={close} alt="close" />
                        </span>
                    ))}
                </div>
                <button className={styles.actionButton}>
                    <img className={styles.icon} src={plus} alt="add" />
                </button>
                <button className={styles.actionButton}>
                    <img className={styles.icon} src={search} alt="search" />
                </button>
            </div>
        </div>
    );
};

export default InputWithBadges;
