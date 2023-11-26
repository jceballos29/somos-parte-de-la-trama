import React from 'react';
import { TbPlaylist } from 'react-icons/tb';
import { Controls, Information, ProgressBar } from './components';
import { formantTime } from '../../utils';
import { Metadata, PlaybackState } from '@/types';

export interface AudioPlayerProps {
	isShowPlaylist: boolean;
	toggleShowPlaylist: () => void;
	audioPlayer: {
		playNextTrack: () => void,
		playPreviousTrack: () => void,
		togglePlayPause: () => void,
		toggleRepeat: () => void,
		toggleShuffle: () => void,
		setPlaybackPosition: (position: number) => void,
	},
	playerState: {
		playbackState: PlaybackState,
		repeat: boolean,
		shuffle: boolean,
		currentTrackPlaybackPosition: number | null,
		currentTrackDuration: number | null,
		currentTrackMetadata: Metadata | null,
	}
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
	isShowPlaylist,
	toggleShowPlaylist,
	audioPlayer,
	playerState,
}) => {

	const {
		playbackState,
		repeat,
		shuffle,
		currentTrackPlaybackPosition,
		currentTrackDuration,
		currentTrackMetadata,
	} = playerState;

	const computeProgress = () => {
		if (currentTrackPlaybackPosition && currentTrackDuration) {
			return (
				(currentTrackPlaybackPosition / currentTrackDuration) * 100
			);
		}
		return 0;
	};

	const setProgress = (value: number) => {
		if (currentTrackDuration) {
			audioPlayer.setPlaybackPosition((value * currentTrackDuration) / 100);
		}
	};

	return (
		<div
			className={`w-full flex flex-col p-6 transition-all duration-500 ${
				isShowPlaylist ? '-translate-x-full' : '-translate-x-0'
			}`}
		>
			<Information
				cover={currentTrackMetadata?.cover}
				title={currentTrackMetadata?.title}
			/>
			<ProgressBar
				progress={computeProgress()}
				onChange={setProgress}
				leftLabel={formantTime(currentTrackPlaybackPosition)}
				rightLabel={formantTime(currentTrackDuration)}
			/>
			<Controls
				onPrevClick={audioPlayer.playPreviousTrack}
				onNextClick={audioPlayer.playNextTrack}
				onPlayClick={audioPlayer.togglePlayPause}
				onRepeatClick={audioPlayer.toggleRepeat}
				onShuffleClick={audioPlayer.toggleShuffle}
				isPlaying={playbackState === 'PLAYING' ? true : false}
				repeat={repeat}
				shuffle={shuffle}
			/>
			<div className='w-full flex items-center justify-end'>
				<button
					className='flex items-center text-xs gap-1 p-2 bg-slate-50 rounded-md shadow'
					onClick={() => toggleShowPlaylist()}
				>
					<TbPlaylist className='text-slate-800 text-xl' />
				</button>
			</div>
		</div>
	);
};

export default AudioPlayer;
