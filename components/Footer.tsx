import Image from 'next/image'
import React from 'react'
import { footerLinks } from '@/constants'
import Link from 'next/link'
import { link } from 'fs'

const Footer = () => {
	return (
		<footer className='flex flex-col text-black-100 mt-5 border-t border-blue-100'>
			<div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
				<div className='flex flex-col justify-start items-start gap-6'>
					<Image
						src='/logo.svg'
						alt='Car Hub Logo'
						width={118}
						height={18}
						className='object-contain'
					/>
					<p className='text-base text-gray-700'>
						Find, book, or rent a car - quickly and easily!
					</p>
				</div>
				<div className='footer__links'>
					{footerLinks.map(link => (
						<div key={link.title} className='footer__link'>
							<h3 className='font-bold'>{link.title}</h3>
							{link.links.map(item => (
								<Link
									key={item.title}
									href={item.url}
									className='text-gray-500'
								>
									{item.title}
								</Link>
							))}
						</div>
					))}
				</div>
			</div>
			<div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
				<p className='text-base text-gray-700'>
					Fast Car Rental 2024 All rights reserved &copy;
				</p>
				<div className='footer__copyright-link flex gap-2'>
					<Link href='/' className='text-gray-500'>
						Privacy Policy
					</Link>
					<Link href='/' className='text-gray-500'>
						Terms of Use
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
