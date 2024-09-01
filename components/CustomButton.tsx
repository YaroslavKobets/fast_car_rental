'use client'

import { CustomButtonProps } from '@/types'
import { clsx } from 'clsx'
import React from 'react'

const CustomButton = ({
	title,
	containerStyles,
	handleClick,
	btnType,
	rightIcon,
	textStyles,
	isDisabled,
}: CustomButtonProps) => {
	return (
		<button
			disabled={isDisabled}
			type={btnType}
			className={clsx('custom-btn', containerStyles)}
			onClick={handleClick}
		>
			<span className={clsx('flex items-center gap-2', textStyles)}>
				{title} {rightIcon}
			</span>
		</button>
	)
}

export default CustomButton
