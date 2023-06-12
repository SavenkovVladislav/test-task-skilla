import React, { useEffect, useState } from 'react'

import DatePicker from './DatePicker'

import styles from '../assets/styles/scss/components/Content.module.scss'

const API_URL = 'https://api.skilla.ru/mango'
const API_TOKEN = 'testtoken'

// ? date_start=<начальная дата>
// & date_end=<конечная дата>
// & in_out=<признак входящего или исходящего звонка>\

const Content = () => {
	const [list, setList] = useState([])
	const [total, setTotal] = useState(0)
	const [startDate, setStartDate] = useState(undefined)
	// const [endDate, setEndDate] = useState(undefined) // вроде не нужно

	const fetchData = (params = '') => {
		fetch(`${API_URL}/getList${params}`, {
			method: 'post',
			headers: {
				Authorization: `Bearer ${API_TOKEN}`,
			},
		})
			.then(response => response.json())
			.then(data => {
				setList(data.results)
				setTotal(data.total)
			})
	}

	// вроде не нужно

	// const onStartDateChange = e => {
	// 	setStartDate(e.currentTarget.value)
	// }

	// const onEndDateChange = e => {
	// 	// setEndDate(e.currentTarget.value)
	// }

	// useEffect(() => {
	// 	if (startDate && endDate) {
	// 		fetchData(`?date_start=${startDate}&date_end=${endDate}`)
	// 	} else if (startDate && !endDate) {
	// 		fetchData(`?date_start=${startDate}`)
	// 	} else if (!startDate && endDate) {
	// 		fetchData(`?date_end=${endDate}`)
	// 	} else {
	// 		fetchData()
	// 	}
	// }, [startDate, endDate])

	useEffect(() => {
		if (startDate) {
			fetchData(`?date_start=${startDate}`)
		} else {
			fetchData()
		}
	}, [startDate])

	const filterByDays = days => {
		const rawStartDate = new Date(Date.now())
		rawStartDate.setDate(rawStartDate.getDate() - days + 1)
		const _startDate = rawStartDate.toISOString().split('T')[0]
		setStartDate(_startDate)
	}

	const sortByInOut = type => {
		console.log({ type })
		setList(prevList => {
			const newList = [...prevList].sort((a, z) =>
				type === 'in' ? z.in_out - a.in_out : a.in_out - z.in_out
			)
			return newList
		})
	}

	console.log({ list })

	return (
		<main className={styles.root}>
			<DatePicker setStartDate={setStartDate} />
			<div>
				{/* <span>дата начала</span>
				<input type='date' onChange={onStartDateChange} />
				<span>дата кончала</span>
				<input type='date' onChange={onEndDateChange} /> */}
				{/* Оставить комментик о допущениях */}

				<button onClick={() => filterByDays(3)}>За 3 дня</button>
				<button onClick={() => filterByDays(7)}>За неделю</button>
				<button onClick={() => filterByDays(31)}>За месяц</button>
				<button onClick={() => filterByDays(365)}>За год</button>
				<button onClick={() => sortByInOut('in')}>В начале входящие</button>
				<button onClick={() => sortByInOut('out')}>В начале исходящие</button>
				<hr />
			</div>
			{total === 0 && <div>Загрузка</div>}
			{list.map(item => (
				<div key={item.id}>
					<span>{item.status}</span>
					<span>{item.date}</span> <span>{item.in_out}</span>
				</div>
			))}
		</main>
	)
}

export default Content
