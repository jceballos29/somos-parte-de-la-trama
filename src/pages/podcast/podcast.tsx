import { Title } from '@/components';
import React from 'react';

export interface PodcastProps {}

const Podcast: React.FC<PodcastProps> = () => {
	return (
		<div className='page'>
			<Title  title='Podcast'/>
		</div>
	);
};

export default Podcast;
