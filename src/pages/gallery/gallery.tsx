import { Page, Title } from '@/components';
import { gallery } from '@/utils/gallery';
import React from 'react';
import { Image, Modal } from './components';
import { ImageType } from '@/types';

export interface GalleryProps {}

export interface GalleryState {
	open: boolean;
	currentImageIndex: number;
}

const Gallery: React.FC<GalleryProps> = () => {
	const [open, setOpen] = React.useState<GalleryState['open']>(false);
	const [currentImageIndex, setCurrentImageIndex] =
		React.useState<GalleryState['currentImageIndex']>(0);

	return (
		<Page className='relative'>
			<Modal
				images={gallery}
				index={currentImageIndex}
				open={open}
				onClose={() => setOpen(false)}
			/>
			<Title title='Galería' />
			<section className='w-full min-h-full columns-2 space-y-4 overflow-y-scroll pb-20'>
				{gallery.length &&
					gallery.map((item: ImageType, index: number) => (
						<Image
							key={index}
							image={item.image.mini}
							index={item.key}
							setIndex={(value: number) => {
								setCurrentImageIndex(value);
								setOpen(true);
							}}
						/>
					))}
			</section>
		</Page>
	);
};

export default Gallery;
