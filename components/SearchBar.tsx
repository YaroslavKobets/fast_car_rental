'use client'
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'
import clsx from 'clsx'
import { CarFront, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
	<button
		type='submit'
		className={clsx(
			'-ml-5 z-10 rounded-full bg-white p-2 border-gray-50 border-2',
			otherClasses
		)}
	>
		<Search size={30} color='#003366' />
	</button>
)

const SearchBar = () => {
	const [manufacturer, setManufacturer] = useState('')
	const [model, setModel] = useState('')
	const router = useRouter()

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (manufacturer === '' && model === '') {
			return alert('Please fill in the search bar')
		}

		updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
	}

	const updateSearchParams = (model: string, manufacturer: string) => {
		const searchParams = new URLSearchParams(window.location.search)
		if (model) {
			searchParams.set('model', model)
		} else {
			searchParams.delete('model')
		}
		if (manufacturer) {
			searchParams.set('manufacturer', manufacturer)
		} else {
			searchParams.delete('manufacturer')
		}

		const newPathName = `${window.location.pathname}?${searchParams.toString()}`

		router.push(newPathName, { scroll: false })
	}

	return (
		<form className='searchbar' onSubmit={handleSearch}>
			<div className='searchbar__item'>
				<SearchManufacturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
				<SearchButton otherClasses='sm:hidden' />
			</div>
			<div className='searchbar__item'>
				<CarFront size={20} color='#003366' className='absolute ml-4' />
				<input
					type='text'
					name='model'
					value={model}
					onChange={e => setModel(e.target.value)}
					placeholder='Rav4'
					className='searchbar__input'
				/>
				<SearchButton otherClasses='sm:hidden' />
			</div>
			<SearchButton otherClasses='max-sm:hidden' />
		</form>
	)
}

export default SearchBar
