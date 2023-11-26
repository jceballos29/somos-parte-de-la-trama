import { Controls, PlayerState, Track } from '@/types';
import { createAudioPlayer, playlist } from '../utils';
import React from 'react';

export interface UseAudioPlayer extends Omit<Controls, 'cleanup'> {
	playerState: PlayerState;
}

const useAudioPlayer = (): UseAudioPlayer => {
	const [playerState, setPlayerState] = React.useState<PlayerState>({
		currentTrackDuration: null,
		currentTrackPlaybackPosition: null,
    currentTrackMetadata: null,
		currentTrackId: null,
		playbackState: 'PAUSED',
		repeat: false,
		shuffle: false,
	});

	const playerRef = React.useRef<Controls | null>(null);

	const togglePlayPause = () => {
		playerRef.current?.togglePlayPause();
	};
	const playNextTrack = () => {
		playerRef.current?.playNextTrack();
	};
	const playPreviousTrack = () => {
		playerRef.current?.playPreviousTrack();
	};
	const toggleRepeat = () => {
		playerRef.current?.toggleRepeat();
	};
	const toggleShuffle = () => {
		playerRef.current?.toggleShuffle();
	};
	const setPlaybackPosition = (position: number) => {
		playerRef.current?.setPlaybackPosition(position);
	};

	const setTrack = (track: Track) => {
		playerRef.current?.setTrack(track);
	}

	React.useEffect(() => {
		playerRef.current = createAudioPlayer(playlist, setPlayerState);

		return () => {
			playerRef.current?.cleanup();
		};
	}, []);

	return {
		playerState,
		togglePlayPause,
		playNextTrack,
		playPreviousTrack,
		toggleRepeat,
		toggleShuffle,
		setPlaybackPosition,
		setTrack,
	};
};

export default useAudioPlayer;
