import './App.css'
import { Header } from './src/components/header/header.js'
import { Filter } from './src/components/filter/filter.jsx'
import { HotelList } from './src/components/hotelList/hotelList.jsx'
import { hotelsData } from './src/server/hotels/hotels.js'
import { Footer } from './src/components/footer/footer.js'
import { useState, useEffect } from 'react'
import {
	isBeforeToday,
	setDateForHeader,
	isToday,
	isTodayFilter,
	isAfterToday,
} from './src/utils/utilsdate.js'

export default function App() {
	const [country, setCountry] = useState('todos')
	const [price, setPrice] = useState('todos')
	const [size, setSize] = useState('todos')
	const [newHotelsData, setNewHotelsData] = useState(hotelsData)
	const [availableFrom, setAvailableFrom] = useState('')
	const [availableTo, setAvailableTo] = useState('')
	const [numberDateFrom, setNumberDateFrom] = useState()
	const [numberMonthFrom, setNumberMonthFrom] = useState()
	const [numberYearFrom, setNumberYearFrom] = useState()
	const [numberDateTo, setNumberDateTo] = useState()
	const [numberMonthTo, setNumberMonthTo] = useState()
	const [numberYearTo, setNumberYearTo] = useState()
	const handlerCountry = (e) => setCountry(e.target.value)
	const handlerPrice = (e) => setPrice(e.target.value)
	const handlerSize = (e) => setSize(e.target.value)
	const handlerAvailableFrom = (e) => {
		setAvailableTo('')
		setNumberDateTo()
		setNumberMonthTo()
		setNumberYearTo()
		if (isBeforeToday(e.target.value) || isToday(e.target.value)) {
			setAvailableFrom(e.target.value)
		} else {
			window.alert('La fecha no debe ser anterior al día de hoy')
		}
		let dateForHeader = setDateForHeader(e.target.value)
		setNumberDateFrom(dateForHeader[0])
		setNumberMonthFrom(dateForHeader[1])
		setNumberYearFrom(dateForHeader[2])
	}
	const handlerAvailableTo = (e) => {
		if (isAfterToday(e.target.value, availableFrom)) {
			setAvailableTo(e.target.value)
		} else {
			window.alert('La fecha debe ser igual o mayor a la fecha de ingreso')
		}
		let dateForHeader = setDateForHeader(e.target.value)
		setNumberDateTo(dateForHeader[0])
		setNumberMonthTo(dateForHeader[1])
		setNumberYearTo(dateForHeader[2])
	}
	const onReset = (e) => {
		setCountry('todos')
		setAvailableFrom('')
		setAvailableTo('')
		setPrice('todos')
		setSize('todos')

		setNumberDateFrom()
		setNumberMonthFrom()
		setNumberYearFrom()
		setNumberDateTo()
		setNumberMonthTo()
		setNumberYearTo()
	}
	useEffect(() => {
		const countryFilter = (hotel) => {
			return country === 'todos' ? true : country === hotel.country
		}
		const priceFilter = (hotel) => {
			return price === 'todos' ? true : parseInt(price, 0) === hotel.price
		}
		const sizeFilter = (hotel) => {
			switch (size) {
				case 'todos':
					return true
				case 'pequeños':
					return hotel.rooms <= 10
				case 'medianos':
					return hotel.rooms > 10 && hotel.rooms <= 20
				case 'grandes':
					return hotel.rooms > 20
				default:
					return false
			}
		}
		const datesFilter = (hotel) => {
			if (!availableFrom || !availableTo) {
				return true
			} else {
				const unixFrom = isTodayFilter(availableFrom)
				const unixTo = new Date(availableTo + ' 03:00').valueOf()
				return (
					unixFrom >= hotel.availabilityFrom && unixTo <= hotel.availabilityTo
				)
			}
		}
		const newHotelsData = hotelsData.filter((hotel) => {
			return (
				countryFilter(hotel) &&
				priceFilter(hotel) &&
				sizeFilter(hotel) &&
				datesFilter(hotel)
			)
		})
		setNewHotelsData(newHotelsData)
	}, [country, size, price, availableFrom, availableTo])
	return (
		<div className='App'>
			<Header
				availableFrom={availableFrom}
				numberDateFrom={numberDateFrom}
				numberMonthFrom={numberMonthFrom}
				numberYearFrom={numberYearFrom}
				numberDateTo={numberDateTo}
				numberMonthTo={numberMonthTo}
				numberYearTo={numberYearTo}
				country={country}
				size={size}
				price={price}
			/>
			<Filter
				country={country}
				handlerCountry={handlerCountry}
				price={price}
				handlerPrice={handlerPrice}
				size={size}
				handlerSize={handlerSize}
				availableFrom={availableFrom}
				handlerAvailableFrom={handlerAvailableFrom}
				availableTo={availableTo}
				handlerAvailableTo={handlerAvailableTo}
				onReset={onReset}
			/>
			<HotelList newHotelsData={newHotelsData} />
			<Footer />
		</div>
	)
}
