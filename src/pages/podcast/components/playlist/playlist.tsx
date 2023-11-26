import { Metadata, PlaybackState, Track } from '@/types';
import { formantTime, playlist } from '../../utils';
import React from 'react';
import {
	TbArrowNarrowLeft,
	TbPlayerPauseFilled,
	TbPlayerPlayFilled,
} from 'react-icons/tb';

export interface playlistProps {
	isShowPlaylist: boolean;
	toggleShowPlaylist: () => void;
	audioPlayer: {
		setTrack: (track: Track) => void;
		togglePlayPause: () => void;
	};
	playerState: {
		currentTrackId: string | null;
		currentTrackMetadata: Metadata | null;
		playbackState: PlaybackState;
		currentTrackPlaybackPosition: number | null;
		currentTrackDuration: number | null;
	};
}

const Playlist: React.FC<playlistProps> = ({
	isShowPlaylist,
	toggleShowPlaylist,
	audioPlayer,
	playerState,
}) => {
	const {
		currentTrackId,
		currentTrackMetadata,
		playbackState,
		currentTrackPlaybackPosition,
		currentTrackDuration,
	} = playerState;

	return (
		<div
			className={`absolute w-full h-full flex flex-col gap-6 p-6 transition-all duration-500 ${
				isShowPlaylist ? 'translate-x-0' : 'translate-x-full'
			}`}
		>
			<section className='w-full flex items-center justify-between gap-6'>
				<span className='font-bold text-lg'>Playlist</span>
				<button onClick={() => toggleShowPlaylist()}>
					<TbArrowNarrowLeft className='text-slate-800 text-3xl' />
				</button>
			</section>
			<section className='w-full'>
				{
					<ul className='w-full flex flex-col gap-2'>
						{playlist.map((track: Track) => (
							<li
								key={track.id}
								onClick={() => {
									audioPlayer.setTrack(track);
								}}
								className={`w-full flex items-center gap-2 p-1 rounded-md transition-all duration-500 active:shadow-inner ${
									track.id === currentTrackId
										? 'bg-white shadow-md'
										: 'bg-slate-50/60 shadow'
								}`}
							>
								<figure className='w-[15%] aspect-square bg-slate-50 rounded-md overflow-hidden'>
									<img
										src={track.metadata.cover}
										alt={track.metadata.title}
										className='w-full object-cover'
									/>
								</figure>
								<div className='w-[80%] flex flex-col'>
									<h2 className='text-sm text-slate-800 font-bold truncate leading-none'>
										{track.metadata.title}
									</h2>
									<span className='text-slate-600 text-xs'>
										{track.metadata.duration}
									</span>
								</div>
							</li>
						))}
					</ul>
				}
			</section>
			<section className='w-full mt-auto flex items-center'>
				<figure className='w-14 aspect-square bg-slate-50 rounded-md overflow-hidden shadow'>
					<img
						src={currentTrackMetadata?.cover}
						alt={currentTrackMetadata?.title}
						className='w-full object-cover'
					/>
				</figure>
				<div className='w-[60%] pl-2 flex flex-col'>
					<h2 className='text-slate-800 font-bold truncate'>
						{currentTrackMetadata?.title}
					</h2>
					<span className='text-slate-400 text-xs'>{`${formantTime(
						currentTrackPlaybackPosition,
					)}/${formantTime(currentTrackDuration)}`}</span>
				</div>
				<div className='ml-auto'>
					<button
						onClick={() => audioPlayer.togglePlayPause()}
						className='bg-slate-100 w-10 aspect-square flex items-center justify-center rounded-full shadow active:shadow-inner transition-all duration-500'
					>
						{playbackState === 'PLAYING' ? (
							<TbPlayerPauseFilled className='text-slate-800 text-lg' />
						) : (
							<TbPlayerPlayFilled className='text-slate-800 text-lg' />
						)}
					</button>
				</div>
			</section>
		</div>
	);
};

export default Playlist;
