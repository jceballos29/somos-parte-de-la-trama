import { ImageType } from '@/utils';
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import React from 'react';

export interface ModalProps {
	index: number;
	images: ImageType[];
	open: boolean;
	onClose: () => void;
}

export interface ModalState {
	open: boolean;
	currentImage: ImageType;
}

const Modal: React.FC<ModalProps> = ({
	index,
	images,
	open,
	onClose,
}) => {
	const [image, setImage] = React.useState<
		ModalState['currentImage']
	>({
		key: 0,
		image: '',
	});

	const next = () => {
		const nextIndex = image.key + 1;
		if (nextIndex > images.length - 1) {
			setImage(images[0]);
		} else {
			setImage(images[nextIndex]);
		}
	};

	const previous = () => {
		const prevIndex = image.key - 1;
		if (prevIndex < 0) {
			setImage(images[images.length - 1]);
		} else {
			setImage(images[prevIndex]);
		}
	};

	React.useEffect(() => {
		setImage(images[index]);
	}, [images, index]);

	return (
		open && (
			<motion.div
				initial={{ opacity: 0, visibility: 'hidden' }}
				animate={{ opacity: 1, visibility: 'visible' }}
				exit={{ opacity: 0, visibility: 'hidden' }}
				transition={{ duration: 0.3 }}
				className={`fixed z-20 top-0 left-0 w-full h-[100dvh] overflow-hidden bg-black/70 backdrop-blur-sm flex items-center justify-center`}
			>
				<button
					className='absolute top-14 left-1/2 -translate-x-1/2 z-20 rounded-full border-2 border-white bg-black/50 shadow backdrop-blur-sm p-1'
					onClick={() => onClose()}
				>
					<XMarkIcon className='h-6 w-6 text-white' />
				</button>
				<motion.figure
					initial={{ scale: 0.5 }}
					animate={{ scale: 1 }}
					exit={{ scale: 0.5 }}
					transition={{ duration: 0.3 }}
					className='bg-black w-[90%] h-max-[90%] flex flex-col items-center rounded-md overflow-hidden relative'
				>
					<button
						className='absolute left-0 top-1/2 -translate-y-1/2 h-full'
						onClick={previous}
					>
						<ChevronLeftIcon className='h-10 w-10 text-white' />
					</button>
					<button
						className='absolute right-0 top-1/2 -translate-y-1/2 h-full'
						onClick={next}
					>
						<ChevronRightIcon className='h-10 w-10 text-white' />
					</button>
					<img
						src={image?.image}
						alt={`Somos parte de la trama ${image?.key}`}
						className='object-contain object-center'
					/>
				</motion.figure>
			</motion.div>
		)
	);
};

export default Modal;
