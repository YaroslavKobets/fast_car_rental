import { CarCard, Hero, Profile, ShowMore } from '@/components'
import { fetchCars } from '@/utils'
import SearchBlock from '@/components/SearchBlock'
import { HomeProps } from '@/types'

export default async function Home({ searchParams }: HomeProps) {
	const allCars = await fetchCars({
		manufacturer: searchParams.manufacturer || '',
		year: searchParams.year || 2022,
		fuel: searchParams.fuel || '',
		limit: searchParams.limit || 12,
		model: searchParams.model || '',
	})

	const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

	return (
		<main className='overflow-hidden'>
			<Hero />

			<div className='mt-12 padding-x padding-y max-width' id='discover'>
				<div className='home__text-container'>
					<h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
					<p>Explore the cars you might like</p>
				</div>
				<div className='grid md:grid-cols-2 grid-cols-1 items-start gap-8 mt-8'>
					<SearchBlock />
					<Profile />
				</div>

				{!isDataEmpty ? (
					<section>
						<div className='home__cars-wrapper'>
							{allCars.map(car => (
								<CarCard key={car.id} car={car} />
							))}
						</div>
						<ShowMore
							pageNumber={(searchParams.limit || 10) / 10}
							isNext={(searchParams.limit || 10) > allCars.length}
						/>
					</section>
				) : (
					<div className='home__error-container'>
						<h2 className='text-black text-xl font-bold'>Oops, no results</h2>
						<p>{allCars?.message}</p>
					</div>
				)}
			</div>
		</main>
	)
}
