import information from '@/assets/images/information.png';
import clubLogo from '@/assets/images/la-marana-logo.png';
import townHall from '@/assets/images/town-hall-logo.png';
import { Title } from '@/components';
import { artisans } from '@/utils';
import React from 'react';

export interface CreditsProps {}

const Credits: React.FC<CreditsProps> = () => {
	return (
		<div className='page'>
			<Title title='Créditos' />
			<figure className='w-1/2 mx-auto overflow-hidden rounded-xl'>
				<img src={clubLogo} alt='La maraña' className='w-full' />
			</figure>
			<section className='mt-4 space-y-2'>
				<h4 className='font-bold text-center text-2xl text-slate-950'>Artesanos</h4>
				<div className='columns-2'>
					{artisans.map((artisan: string, index: number) => (
						<p
							key={index}
							className='text-sm text-slate-800 text-left leading-tight'
						>
							{artisan}
						</p>
					))}
				</div>
			</section>
			<section className='mt-4 space-y-2'>
				<h4 className='font-bold text-center text-2xl text-slate-950'>Diseño</h4>
				<p className='text-sm text-slate-800 text-center leading-tight'>
					Maria Isabel Ceballos
				</p>
			</section>
			<section className='mt-4 space-y-2'>
				<h4 className='font-bold text-center text-2xl text-slate-950'>Web</h4>
				<p className='text-sm text-slate-800 text-center leading-tight'>
					Juan Antonio Ceballos
				</p>
			</section>
			<section className='w-full flex items-center justify-between mt-auto'>
				<figure className='overflow-hidden h-6'>
					<img
						src={information}
						alt='Información'
						className='h-full'
					/>
				</figure>
				<figure className='overflow-hidden h-10'>
					<img
						src={townHall}
						alt='Alcaldía de Medellin'
						className='h-full'
					/>
				</figure>
			</section>
		</div>
	);
};

export default Credits;
