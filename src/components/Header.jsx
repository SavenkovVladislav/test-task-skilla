import React from 'react'

import { ReactComponent as SearchIcon } from '../assets/icons/search.svg'
import { ReactComponent as Arrow } from '../assets/icons/boldArrow.svg'
import avatar from '../assets/img/avatar.png'

import styles from '../assets/styles/scss/components/Header.module.scss'

const Header = () => {
	const barItems = [
		{ title: 'Новые звонки', dataText: '20 из 30 шт', color: 'green', id: 0 },
		{ title: 'Качество разговоров', dataText: '40%', color: 'yellow', id: 1 },
		{ title: 'Конверсия в заказ', dataText: '67%', color: 'red', id: 2 },
	]

	return (
		<header className={styles.root}>
			<time className={styles.text} dateTime='2023-10-13'>
				Среда, 13 окт
			</time>
			<div className={styles.barsGroup}>
				{barItems.map(items => (
					<div
						className={`${styles.barsItem} ${
							items.color === 'green'
								? styles.barsItem_green
								: items.color === 'yellow'
								? styles.barsItem_yellow
								: items.color === 'red'
								? styles.barsItem_red
								: ''
						}`}
						key={items.id}
					>
						<p>
							{items.title} <span>{items.dataText}</span>
						</p>
						<div
							className={`${styles.barsRow} ${
								items.color === 'green'
									? styles.barsRow_green
									: items.color === 'yellow'
									? styles.barsRow_yellow
									: items.color === 'red'
									? styles.barsRow_red
									: ''
							}`}
						>
							<div></div>
						</div>
					</div>
				))}
			</div>
			<SearchIcon className={styles.search} />
			<div className={styles.userBlock}>
				<p className={styles.text}>ИП Сидорова Александра Михайловна</p>
				<Arrow className={styles.arrow} />
			</div>
			<div className={styles.avatarBlock}>
				<img src={avatar} alt='avatar' />
				<Arrow className={styles.arrow} />
			</div>
		</header>
	)
}

export default Header
