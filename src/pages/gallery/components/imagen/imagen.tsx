import React from 'react';

export interface ImagenProps {
	image: string;
	index: number;
	setIndex: (index: number) => void;
}

export interface ImagenState {
	load: boolean;
}

const Image: React.FC<ImagenProps> = ({ image, index, setIndex }) => {
	const [loading, setLoad] =
		React.useState<ImagenState['load']>(true);

	return (
		<figure
			className={`rounded ${
				loading ? 'p-0' : 'p-1'
			} shadow-xl bg-white`}
			style={{
				opacity: loading ? 0 : 1,
				transition: 'opacity 0.5s ease',
			}}
			onClick={() => setIndex(index)}
		>
			<img
				src={image}
				onLoad={() => setLoad(false)}
				loading='eager'
				alt={`Somos parte de la trama ${index}`}
				className='w-full rounded-sm'
			/>
		</figure>
	);
};

export default Image;
