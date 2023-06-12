import React, { useState } from 'react'

import { ReactComponent as Arrow } from '../assets/icons/datePickerIcons/arrow.svg'
import { ReactComponent as Calendar } from '../assets/icons/datePickerIcons/calendar.svg'

import styles from '../assets/styles/scss/components/DatePicker.module.scss'

const dropdownArray = [
	{ title: '3 дня', days: 3, id: 0 },
	{ title: 'Неделя', days: 7, id: 1 },
	{ title: 'Месяц', days: 31, id: 2 },
	{ title: 'Год', days: 365, id: 3 },
]
const DatePicker = ({ setStartDate }) => {
	const [dropdownItem, setDropdownItem] = useState({ title: '3 дня', id: 0 })
	const [open, setOpen] = useState(false)

	const onClickListItem = obj => {
		setDropdownItem(obj)
		setOpen(false)

		filterByDays(obj.days)
	}

	const filterByDays = days => {
		const rawStartDate = new Date(Date.now())
		rawStartDate.setDate(rawStartDate.getDate() - days + 1)
		const _startDate = rawStartDate.toISOString().split('T')[0]
		// console.log(_startDate)
		setStartDate(_startDate)
	}

	return (
		<div className={styles.root}>
			<Arrow className={`${styles.arrow} ${styles.arrowLeft}`} />
			<div className={styles.calendar} onClick={() => setOpen(!open)}>
				<Calendar />
				<span>{dropdownItem.title}</span>
			</div>
			<Arrow className={styles.arrow} />
			{open && (
				<ul className={styles.dropdown}>
					{dropdownArray.map(obj => (
						<li
							className={
								dropdownItem.id === obj.id
									? `${styles.dropdownItem} ${styles.dropdownItemActive}`
									: styles.dropdownItem
							}
							key={obj.id}
							onClick={() => {
								onClickListItem(obj)
							}}
						>
							{obj.title}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default DatePicker
