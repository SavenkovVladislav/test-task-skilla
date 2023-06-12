import React from 'react'

import { ReactComponent as PlusIcon } from '../assets/icons/sidebarIcons/plus.svg'
import { ReactComponent as InfoIcon } from '../assets/icons/sidebarIcons/info.svg'

import styles from '../assets/styles/scss/components/Button.module.scss'

const Button = ({ title, buttonIcon }) => {
	return (
		<button className={styles.root}>
			<span>{title}</span>
			{buttonIcon === 'plus' ? (
				<PlusIcon />
			) : buttonIcon === 'info' ? (
				<InfoIcon />
			) : (
				''
			)}
		</button>
	)
}

export default Button
