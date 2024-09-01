import { SquareUserRound } from 'lucide-react'
import React from 'react'

const Profile = () => {
	return (
		<div className='profile'>
			<div className='profile__detail grid'>
				<div className='row-[2_span]'>
					<SquareUserRound size={50} />
				</div>
				<div>Name</div>
				<div>Surname</div>
			</div>
			<div className='my-3 font-medium'>
				<div>
					Your Discount: &nbsp;
					<span className='font-bold text-primary-blue'>10%</span>
				</div>
			</div>
			<div className='profile__booking'></div>
		</div>
	)
}

export default Profile
