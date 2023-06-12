import React, { useState } from 'react'
import { ReactComponent as LogoIcon } from '../assets/icons/logo.svg'
import { ReactComponent as TimelineIcon } from '../assets/icons/sidebarIcons/timeline.svg'
import { ReactComponent as CallsIcon } from '../assets/icons/sidebarIcons/calls.svg'
import { ReactComponent as OrdersIcon } from '../assets/icons/sidebarIcons/orders.svg'
import { ReactComponent as MailIcon } from '../assets/icons/sidebarIcons/mail.svg'
import { ReactComponent as PeopleIcon } from '../assets/icons/sidebarIcons/people.svg'
import { ReactComponent as DocumentsIcon } from '../assets/icons/sidebarIcons/documents.svg'
import { ReactComponent as ExecutorsIcon } from '../assets/icons/sidebarIcons/executors.svg'
import { ReactComponent as BriefcaseIcon } from '../assets/icons/sidebarIcons/briefcase.svg'
import { ReactComponent as LibraryIcon } from '../assets/icons/sidebarIcons/library.svg'
import { ReactComponent as SettingsIcon } from '../assets/icons/sidebarIcons/settings.svg'

import Button from './Button'

import styles from '../assets/styles/scss/components/Sidebar.module.scss'

const Sidebar = () => {
	const [activeItem, setActiveItem] = useState(3)

	const sidebarItems = [
		{ title: 'Итоги', icon: <TimelineIcon />, id: 0 },
		{ title: 'Заказы', icon: <OrdersIcon />, id: 1 },
		{ title: 'Сообщения', icon: <MailIcon />, id: 2 },
		{ title: 'Звонки', icon: <CallsIcon />, id: 3 },
		{ title: 'Контрагенты', icon: <PeopleIcon />, id: 4 },
		{ title: 'Документы', icon: <DocumentsIcon />, id: 5 },
		{ title: 'Исполнители', icon: <ExecutorsIcon />, id: 6 },
		{ title: 'Отчеты', icon: <BriefcaseIcon />, id: 7 },
		{ title: 'База знаний', icon: <LibraryIcon />, id: 8 },
		{ title: 'Настройки', icon: <SettingsIcon />, id: 9 },
	]

	return (
		<aside className={styles.root}>
			<LogoIcon className={styles.logo} />
			<ul className={styles.items}>
				{sidebarItems.map(item => (
					<li
						className={activeItem === item.id && styles.active}
						onClick={() => setActiveItem(item.id)}
						key={item.id}
					>
						{activeItem === item.id && (
							<div className={styles.activeColumn}></div>
						)}
						{item.icon}
						{item.title}
						{activeItem === item.id && (
							<div className={styles.activePointer}></div>
						)}
					</li>
				))}
			</ul>
			<div className={styles.sidebarButtonGroup}>
				<Button title='Добавить заказ' buttonIcon='plus' />
				<Button title='Оплата' buttonIcon='info' />
			</div>
		</aside>
	)
}

export default Sidebar
