import React from 'react';
import styles from './InputWithBadges.module.scss';
import plus from './../../../img/plus.svg';
import search from './../../../img/search.svg';
import micro from './../../../img/micro-button.svg';

const InputWithBadges = ({ badgesType = 'default', label, badges = [], onRemoveBadge }) => {
    return (
        <div className={`${styles.inputWithBadges} ${badgesType === 'full-width' ? styles.fullWidth : styles.default}`}>
            {label && <label className={styles.inputLabel}>{label}</label>}

            <div className={styles.inputRow}>
                <div className={styles.inputContainer}>
                    {badges.map((badge, index) => (
                        <span key={index} className={styles.badge}>
                            {badge}
                            {onRemoveBadge && (
                                <button
                                    className={styles.removeBadgeButton}
                                    onClick={() => onRemoveBadge(index)}
                                >
                                    <img src={micro} alt="delete" />
                                </button>
                            )}
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
