import React from 'react';
import somosParte from '@/assets/images/somos-parte-de-la-trama.png';

export interface TitleProps {
	title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
	return (
		<div className='w-full flex items-center justify-between mb-5'>
			<h2 className='text-3xl font-bold text-slate-950'>{title}</h2>
			<figure className='h-10 overflow-hidden'>
				<img
					src={somosParte}
					alt='Somos parte de la trama'
					className='h-full'
				/>
			</figure>
		</div>
	);
};

export default Title;
