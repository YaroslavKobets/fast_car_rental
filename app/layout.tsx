import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import { Footer, Navbar } from '@/components'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Fast Car Rental',
	description: 'Find, book, or rent a car - quickly and easily!',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={nunito.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
