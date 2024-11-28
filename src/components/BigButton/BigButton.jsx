import React from 'react';
import styles from './BigButton.module.scss';

const BigButton = ({ text, variant = 'default', onClick }) => {
    const buttonClass = variant === 'blue' 
        ? `${styles.bigbutton} ${styles.blue}` 
        : styles.bigbutton;

    return (
        <button className={buttonClass} onClick={onClick}>
            {text}
        </button>
    );
}

export default BigButton;

