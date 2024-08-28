'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { CarProps } from '@/types'
import { calculateCarRent } from '@/utils'
import { Cog, DollarSign, Fuel, Joystick, SquareChevronUp } from 'lucide-react'
import CustomButton from './CustomButton'
import CarDetails from './CarDetails'
interface CarCardProps {
	car: CarProps
}

const CarCard = ({ car }: CarCardProps) => {
	const { city_mpg, year, make, model, transmission, drive } = car

	const carRent = calculateCarRent(city_mpg, year)

	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='car-card group'>
			<div className='car-card__content'>
				<h2 className='car-card__content-title'>
					{make} {model} {year}
				</h2>
			</div>
			<p className='flex mt-6 text-[32px] font-extrabold'>
				<span className='self-start'>
					<DollarSign size={18} />
				</span>
				{carRent}
				<span className='self-end text-[18px] text-medium'>/day</span>
			</p>
			<div className='relative w-full h-40 my-3 object-contain'>
				<Image
					src='/default-car-angle-1.png'
					alt='car'
					fill
					priority
					className='object-contain'
				/>
			</div>
			<div className='relative flex w-full mt-2'>
				<div className='flex group-hover:invisible w-full justify-between text-gray'>
					<div className='flex flex-col justify-center items-center gap-2'>
						<Joystick size={20} strokeWidth={3} color='#003366' />
						<p className='text-[14px] font-bold'>
							{transmission === 'a' ? 'Automatic' : 'Manual'}
						</p>
					</div>
					<div className='flex flex-col justify-center items-center gap-2'>
						<Cog size={20} strokeWidth={3} color='#003366' />
						<p className='text-[14px] font-bold'>{drive.toUpperCase()}</p>
					</div>
					<div className='flex flex-col justify-center items-center gap-2'>
						<Fuel size={20} strokeWidth={3} color='#003366' />
						<p className='text-[14px] font-bold'>{city_mpg} MPG</p>
					</div>
				</div>
				<div className='car-card__btn-container'>
					<CustomButton
						title='View More'
						containerStyles='w-full py-4 rounded-full bg-primary-blue'
						textStyles='text-white text-[14px] leading-[17px] font-bold'
						rightIcon={<SquareChevronUp color='white' />}
						handleClick={() => setIsOpen(true)}
					/>
				</div>
			</div>
			<CarDetails
				isOpen={isOpen}
				closeModal={() => setIsOpen(false)}
				car={car}
			/>
		</div>
	)
}

export default CarCard
