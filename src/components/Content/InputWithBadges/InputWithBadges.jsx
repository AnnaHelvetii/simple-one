import React, { useState } from 'react';
import styles from './InputWithBadges.module.scss';
import plus from './../../../img/plus.svg';
import search from './../../../img/search.svg';
import micro from './../../../img/micro-button.svg';

const maxBadgeLength = 35;

const InputWithBadges = ({ badgesType = 'default', label }) => {
    const [participants, setParticipants] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const truncateBadge = (text) =>
        text.length > maxBadgeLength ? `${text.slice(0, maxBadgeLength)}...` : text;

    const handleAddParticipant = () => {
        if (inputValue.trim() !== '' && (badgesType === 'full-width' || participants.length === 0)) {
            const truncatedValue = truncateBadge(inputValue.trim());
            setParticipants([...participants, truncatedValue]);
            setInputValue('');
        }
    };

    const handleRemoveBadge = () => {
        setParticipants([]);
    };

    return (
        <div className={`${styles.inputWithBadges} ${badgesType === 'full-width' ? styles.fullWidth : styles.default}`}>
            {label && <label className={styles.inputLabel}>{label}</label>}

            <div className={styles.inputRow}>
                <div className={styles.inputContainer}>
                    {participants.map((participant, index) => (
                        <span key={index} className={styles.badge}>
                            {participant}
                        </span>
                    ))}
                    {badgesType === 'default' && participants.length > 0 && (
                        <button className={styles.removeBadgeButton} onClick={handleRemoveBadge}>
                            <img src={micro} alt="delete" />
                        </button>
                    )}
                    <input
                        type="text"
                        className={styles.inputField}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </div>
                <button className={styles.actionButton} onClick={handleAddParticipant}>
                    <img className={styles.icon} src={plus}></img>
                </button>
                <button className={styles.actionButton}>
                    <img className={styles.icon} src={search}></img>
                </button>
            </div>
        </div>
    );
};

export default InputWithBadges;
