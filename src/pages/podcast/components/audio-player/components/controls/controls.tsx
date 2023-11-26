import React from 'react';
import {
	TbArrowsShuffle,
	TbPlayerPauseFilled,
	TbPlayerPlayFilled,
	TbPlayerSkipBackFilled,
	TbPlayerSkipForwardFilled,
	TbRepeat,
	TbRepeatOff,
} from 'react-icons/tb';

export interface ControlsProps {
	onPrevClick: () => void;
	onNextClick: () => void;
	onPlayClick: () => void;
	onRepeatClick: () => void;
	onShuffleClick: () => void;
	isPlaying: boolean;
	repeat: boolean;
	shuffle: boolean;
}

const Controls: React.FC<ControlsProps> = ({
	onNextClick,
	onPlayClick,
	onPrevClick,
	onRepeatClick,
	onShuffleClick,
	isPlaying,
	repeat,
	shuffle,
}) => {
	return (
		<section className='w-full relative flex items-center justify-evenly my-2'>
			<button onClick={() => onShuffleClick()}>
				<TbArrowsShuffle
					className={`${
						shuffle ? 'text-slate-800' : 'text-slate-400'
					}  text-xl transition-all duration-500`}
				/>
			</button>
			<div className='flex items-center justify-center space-x-4'>
				<button onClick={() => onPrevClick()}>
					<TbPlayerSkipBackFilled
						className={`text-slate-800 text-3xl transition-all duration-500`}
					/>
				</button>
				<button
					className='bg-slate-100 w-16 aspect-square flex items-center justify-center rounded-full shadow active:shadow-inner transition-all duration-500'
					onClick={() => onPlayClick()}
				>
					{isPlaying ? (
						<TbPlayerPauseFilled className='text-slate-800 text-3xl' />
					) : (
						<TbPlayerPlayFilled className='text-slate-800 text-3xl' />
					)}
				</button>
				<button onClick={() => onNextClick()}>
					<TbPlayerSkipForwardFilled
						className={`text-slate-800 text-3xl transition-all duration-500`}
					/>
				</button>
			</div>
			<button onClick={() => onRepeatClick()}>
				{repeat ? (
					<TbRepeat
						className={`${
							repeat ? 'text-slate-800' : 'text-slate-400'
						}  text-xl transition-all duration-500`}
					/>
				) : (
					<TbRepeatOff
						className={`${
							repeat ? 'text-slate-800' : 'text-slate-400'
						}  text-xl transition-all duration-500`}
					/>
				)}
			</button>
		</section>
	);
};

export default Controls;
