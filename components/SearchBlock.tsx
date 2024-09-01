'use client'

import { useRouter } from 'next/navigation'
import SearchBar from '@/components/SearchBar'
import CustomFilter from '@/components/CustomFilter'
import CustomButton from '@/components/CustomButton'
import { fuels, yearsOfProduction } from '@/constants'
import { useState } from 'react'

const SearchBlock = () => {
	const router = useRouter()
	const [manufacturer, setManufacturer] = useState('')
	const [model, setModel] = useState('')

	const handleClear = () => {
		const searchParams = new URLSearchParams(window.location.search)
		searchParams.delete('model')
		searchParams.delete('manufacturer')
		searchParams.delete('fuel')
		searchParams.delete('year')
		const newPathName = `${window.location.pathname}?${searchParams.toString()}`
		router.push(newPathName, { scroll: false })
	}

	const handleSearch = () => {
		if (!manufacturer && !model) {
			return alert('Please fill in the search bar')
		}

		const lowerCaseModel = model ? model.toLowerCase() : ''
		const lowerCaseManufacturer = manufacturer ? manufacturer.toLowerCase() : ''

		updateSearchParams(lowerCaseModel, lowerCaseManufacturer)
	}

	const updateSearchParams = (model?: string, manufacturer?: string) => {
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
		<div className='search'>
			<SearchBar
				manufacturer={manufacturer}
				setManufacturer={setManufacturer}
				model={model}
				setModel={setModel}
			/>
			<div className='search__actions'>
				<div className='search__filters'>
					<CustomFilter title='fuel' options={fuels} />
					<CustomFilter title='year' options={yearsOfProduction} />
				</div>

				<div className='search__buttons'>
					<CustomButton
						title='Search'
						handleClick={handleSearch}
						btnType='button'
						containerStyles='search-btn bg-primary-blue text-white hover:bg-white hover:text-primary-blue '
					/>
					<CustomButton
						title='Clear'
						handleClick={handleClear}
						btnType='button'
						containerStyles='search-btn bg-white hover:text-white hover:bg-primary-blue/40'
					/>
				</div>
			</div>
		</div>
	)
}

export default SearchBlock
