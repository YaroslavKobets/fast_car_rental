'use client'
import React from 'react'
import SearchManufacturer from './SearchManufacturer'
import { CarFront } from 'lucide-react'

interface SearchBarProps {
	manufacturer: string
	setManufacturer: (manufacturer: string) => void
	model: string
	setModel: (model: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({
	manufacturer,
	setManufacturer,
	model,
	setModel,
}) => {
	return (
		<>
			<div className='search__item'>
				<SearchManufacturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
			</div>
			<div className='search__item'>
				<CarFront size={20} color='#003366' className='absolute ml-4' />
				<input
					type='text'
					name='model'
					value={model}
					onChange={e => setModel(e.target.value)}
					placeholder='Model'
					className='search__input'
				/>
			</div>
		</>
	)
}

export default SearchBar
