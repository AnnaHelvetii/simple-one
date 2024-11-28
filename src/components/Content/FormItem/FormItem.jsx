import React from 'react';
import styles from './FormItem.module.scss';

	const FormItem = ({ 
		label, 
		id, 
		defaultValue, 
		isRequired = false, 
		variant = 'half',
		buttonIcon,
	}) => {
		return (
			<div 
				className={`
					${styles.form__item} ${variant === 'full' ? styles.full : ''} 
					${variant === 'half-with-button' ? styles.halfWithButton : ''}
				`}
			>
				<label htmlFor={id} className={styles.item__label}>
					{isRequired && <span className={styles.required}>*</span>}
					{label}
				</label>
				<div className={styles.inputWrapper}>
					<input 
						type="text" 
						id={id}
						value={defaultValue}
						className={styles.item__input}
					/>
					{variant === 'half-with-button' && (
						<button type="button" className={styles.actionButton}>
							{buttonIcon}
						</button>
					)}
				</div>
			</div>
		);
	};

	export default FormItem;
