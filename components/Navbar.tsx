import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'

const Navbar = () => {
	return (
		<header className='w-full absolute z-10'>
			<nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
				<Link href='/' className='flex items-center justify-center'>
					<Image
						src='/logo.svg'
						alt='Car Hub Logo'
						width={160}
						height={22}
						className='object-contain'
					/>
				</Link>

				<CustomButton
					title='Sing In'
					btnType='button'
					containerStyles='text-white rounded-full bg-primary-blue min-w-[130px]'
				/>
			</nav>
		</header>
	)
}

export default Navbar
