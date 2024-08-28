'use client'

import { CarProps } from '@/types'
import React, { Fragment } from 'react'
import {
	Dialog,
	DialogPanel,
	Transition,
	TransitionChild,
} from '@headlessui/react'
import { X } from 'lucide-react'
import Image from 'next/image'
import CustomButton from './CustomButton'

interface CarDetailsProps {
	isOpen: boolean
	closeModal: () => void
	car: CarProps
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
	const { make, model } = car
	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					open={isOpen}
					as='div'
					className='relative z-10'
					onClose={closeModal}
				>
					<TransitionChild
						as={Fragment}
						enter='easy-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-black bg-opacity-25'></div>
					</TransitionChild>
					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-4 text-center'>
							<TransitionChild
								as={Fragment}
								enter='easy-out duration-300'
								enterFrom='opacity-0 scale-90'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-90'
							>
								<DialogPanel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5 p-6'>
									<button
										type='button'
										className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
										onClick={closeModal}
									>
										<X size={20} />
									</button>
									<div className='flex-1 flex flex-col gap-3'>
										<div className='relative w-full h-52 bg-pattern bg-cover bg-bottom  rounded-lg overflow-hidden'>
											<div className='absolute inset-2 z-10'>
												<Image
													src='/default-car-angle-1.png'
													alt='car'
													fill
													priority
													className='object-contain'
												/>
											</div>

											<span className='absolute inset-0 bg-primary-blue opacity-60 '></span>
										</div>
										<div className='flex gap-3'>
											<div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
												<Image
													src='/default-car-angle-2.png'
													alt='car'
													fill
													priority
													className='object-contain'
												/>
											</div>
											<div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
												<Image
													src='/default-car-angle-3.png'
													alt='car'
													fill
													priority
													className='object-contain'
												/>
											</div>
											<div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
												<Image
													src='/default-car-angle-4.png'
													alt='car'
													fill
													priority
													className='object-contain'
												/>
											</div>
										</div>

										<div className='flex flex-1 flex-col gap-2'>
											<h2 className='text-primary-blue capitalize font-bold'>
												{make} {model}
											</h2>
											<div className='mt-3 grid gap-2'>
												{Object.entries(car).map(([key, value]) => (
													<div
														className='flex justify-between border-b-[1px] '
														key={key}
													>
														<h4 className=' capitalize font-bold text-gray-500'>
															{key.replace('_', ' ')}
														</h4>
														<p className='text-gray-700 font-semibold'>
															{value}
														</p>
													</div>
												))}
											</div>
											<CustomButton
												title='Book Now'
												containerStyles='bg-primary-blue text-white rounded-full mt-4'
											/>
										</div>
									</div>
								</DialogPanel>
							</TransitionChild>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

export default CarDetails
