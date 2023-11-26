import { Page, Title } from '@/components';
import React from 'react';
import { AudioPlayer, Playlist } from './components';
import { useAudioPlayer } from './hooks';

export interface PodcastProps {}

export interface PodcastState {
	list: boolean;
}

const Podcast: React.FC<PodcastProps> = () => {
	const {
		playerState,
		playNextTrack,
		playPreviousTrack,
		togglePlayPause,
		toggleRepeat,
		toggleShuffle,
		setPlaybackPosition,
		setTrack,
	} = useAudioPlayer();

	const {
		playbackState,
		repeat,
		shuffle,
		currentTrackPlaybackPosition,
		currentTrackDuration,
		currentTrackMetadata,
		currentTrackId,
	} = playerState;

	const [list, setList] = React.useState<PodcastState['list']>(false);

	const handleToggleShowPlaylist = () => {
		setList(!list);
	};

	return (
		<Page>
			<Title title='Podcast' />
			<div className='w-full relative flex overflow-hidden bg-slate-50/60 border border-slate-50/60 backdrop-blur-sm shadow-xl rounded-3xl transition-all duration-500'>
				<AudioPlayer
					isShowPlaylist={list}
					toggleShowPlaylist={handleToggleShowPlaylist}
					audioPlayer={{
						playNextTrack,
						playPreviousTrack,
						togglePlayPause,
						toggleRepeat,
						toggleShuffle,
						setPlaybackPosition,
					}}
					playerState={{
						playbackState,
						repeat,
						shuffle,
						currentTrackPlaybackPosition,
						currentTrackDuration,
						currentTrackMetadata,
					}}
				/>
				<Playlist
					isShowPlaylist={list}
					toggleShowPlaylist={handleToggleShowPlaylist}
					audioPlayer={{ setTrack, togglePlayPause }}
					playerState={{
						currentTrackId,
						currentTrackMetadata,
						playbackState,
						currentTrackPlaybackPosition,
						currentTrackDuration,
					}}
				/>
			</div>
		</Page>
	);
};

export default Podcast;
