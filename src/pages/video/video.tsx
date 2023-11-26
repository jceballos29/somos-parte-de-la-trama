import React from 'react';
import information from '@/assets/images/information.webp';
import cultureLogo from '@/assets/images/nos-mueve-la-cultura.webp';
import pdlPpLogo from '@/assets/images/pdl-pp.webp';
import townHall from '@/assets/images/town-hall-logo.webp';
import { Page } from '@/components';

export interface VideoProps {}

const Video: React.FC<VideoProps> = () => {
	return (
		<Page>
			<div className='w-ful flex items-center justify-between'>
				<figure className='overflow-hidden h-10'>
					<img
						src={cultureLogo}
						alt='Nos mueve la cultura'
						className='h-full'
					/>
				</figure>
				<figure className='overflow-hidden h-10'>
					<img
						src={pdlPpLogo}
						alt='PDL y PP Cultura'
						className='h-full'
					/>
				</figure>
			</div>
			<div className='w-full mt-auto flex items-center justify-between'>
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
			</div>
		</Page>
	);
};

export default Video;
