'use client'

import { CustomFilterProps } from '@/types'
import { updateSearchParams } from '@/utils'
import {
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
} from '@headlessui/react'
import clsx from 'clsx'
import { ChevronsUpDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const CustomFilter = ({ title, options }: CustomFilterProps) => {
	const [selected, setSelected] = useState(options[0])
	const router = useRouter()

	const handleUpdateParams = (e: { title: string; value: string }) => {
		const newPathName = updateSearchParams(title, e.value.toLowerCase())

		router.push(newPathName, { scroll: false })
	}

	return (
		<div className='w-full'>
			<Listbox
				value={selected}
				onChange={e => {
					setSelected(e)
					handleUpdateParams(e)
				}}
			>
				<div className='relative w-full z-10'>
					<ListboxButton className='custom-filter__btn'>
						<span className='block truncate'>{selected.title}</span>
						<ChevronsUpDown className='ml-4' size={20} />
					</ListboxButton>
					<ListboxOptions
						transition
						className={clsx(
							'custom-filter__options',
							'transition duration-100 ease-in data-[enter]:opacity-100 data-[leave]:data-[closed]:opacity-0'
						)}
					>
						{options.map(option => (
							<ListboxOption
								key={option.title}
								value={option}
								className='relative cursor-default select-none py-1 px-4 data-[focus]:bg-primary-blue data-[focus]:text-white'
							>
								{() => (
									<span className='block truncate data-[selected]:font-medium'>
										{option.title}
									</span>
								)}
							</ListboxOption>
						))}
					</ListboxOptions>
				</div>
			</Listbox>
		</div>
	)
}

export default CustomFilter
