'use client'
import {
	Combobox,
	ComboboxInput,
	ComboboxOption,
	ComboboxOptions,
	ComboboxButton,
} from '@headlessui/react'

import React, { useState } from 'react'
import { SearchManufacturerProps } from '@/types'
import { Car } from 'lucide-react'
import { manufacturers } from '@/constants'
import clsx from 'clsx'

const SearchManufacturer = ({
	setManufacturer,
	manufacturer,
}: SearchManufacturerProps) => {
	const [query, setQuery] = useState('')

	const filteredManufacturers =
		query === ''
			? manufacturers
			: manufacturers.filter(item =>
					item
						.toLowerCase()
						.replace(/\s+/g, '')
						.includes(query.toLowerCase().replace(/\s+/g, ''))
			  )

	return (
		<div className='search-manufacturer'>
			<Combobox value={manufacturer} onChange={setManufacturer}>
				<div className='relative w-full'>
					<ComboboxButton className='absolute top-[14px] z-[2]'>
						<Car size={20} className='ml-4' color='#003366' />
					</ComboboxButton>
					<ComboboxInput
						className='search-manufacturer__input relative '
						placeholder='Manufacturer'
						displayValue={(manufacturer: string) => manufacturer}
						onChange={e => {
							setQuery(e.target.value)
						}}
					/>

					<ComboboxOptions
						className={clsx(
							'absolute w-full z-20 shadow-lg	max-h-60 overflow-y-auto rounded-md bg-white'
						)}
					>
						{filteredManufacturers.map(item => (
							<ComboboxOption
								key={item}
								className={({ active }) =>
									`search-manufacturer__option ${
										active ? 'bg-primary-blue text-white' : 'text-gray-900'
									}`
								}
								value={item}
							>
								{({ selected, active }) => (
									<>
										<span
											className={`block truncate ${
												selected ? 'font-medium' : 'font-normal'
											}`}
										>
											{item}
										</span>
										{selected ? (
											<span
												className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
													active ? 'text-white' : 'text-teal-600'
												}`}
											></span>
										) : null}
									</>
								)}
							</ComboboxOption>
						))}
					</ComboboxOptions>
				</div>
			</Combobox>
		</div>
	)
}

export default SearchManufacturer
