import {
	Controls,
	Metadata,
	PlaybackState,
	PlayerState,
	Playlist,
	Track,
} from '@/types';

export const createAudioPlayer = (
	playlist: Playlist,
	onStateChange: (state: PlayerState) => void,
): Controls => {
	let currentTrack: Track = {
		id: '',
		src: '',
		metadata: {
			title: '',
			cover: '',
			duration: '',
		},
		order: {
			previous: null,
			next: null,
			head: false,
		},
	};
	let repeat: boolean = false;
	let shuffle: boolean = false;
	const playbackHistory: Array<Track> = [];
	const audioElement: HTMLAudioElement = new Audio();

	// #region Player State

	const getPlaybackState = (): PlaybackState => {
		return audioElement.paused ? 'PAUSED' : 'PLAYING';
	};

	const getCurrentTrackDuration = (): number | null => {
		return isNaN(audioElement.duration)
			? null
			: audioElement.duration;
	};

	const getCurrentTrackPlaybackPosition = (): number | null => {
		return isNaN(audioElement.currentTime)
			? null
			: audioElement.currentTime;
	};

	const getCurrentTrackMetadata = (): Metadata | null => {
		return currentTrack.metadata;
	}

	const getCurrentTrackId = (): string | null => {
		return currentTrack.id;
	}

	const computeCurrentPlayerState = (): PlayerState => {
		return {
			currentTrackDuration: getCurrentTrackDuration(),
			currentTrackPlaybackPosition: getCurrentTrackPlaybackPosition(),
			currentTrackMetadata: getCurrentTrackMetadata(),
			currentTrackId: getCurrentTrackId(),
			playbackState: getPlaybackState(),
			repeat,
			shuffle,
		};
	};

	const emitCurrentPlayerState = () => {
		const state = computeCurrentPlayerState();
		onStateChange(state as PlayerState);
	};

	// #endregion

	// #region Event Listener
	const setUpAudioElementListener = () => {
		audioElement.addEventListener('playing', emitCurrentPlayerState);
		audioElement.addEventListener('pause', emitCurrentPlayerState);
		audioElement.addEventListener('ended', onCurrentTrackEnded);
		audioElement.addEventListener(
			'timeupdate',
			emitCurrentPlayerState,
		);
		audioElement.addEventListener(
			'loadeddata',
			emitCurrentPlayerState,
		);
	};

	const removeAudioElementListener = () => {
		audioElement.removeEventListener(
			'playing',
			emitCurrentPlayerState,
		);
		audioElement.removeEventListener('pause', emitCurrentPlayerState);
		audioElement.removeEventListener('ended', onCurrentTrackEnded);
		audioElement.removeEventListener(
			'timeupdate',
			emitCurrentPlayerState,
		);
		audioElement.removeEventListener(
			'loadeddata',
			emitCurrentPlayerState,
		);
	};

	const onCurrentTrackEnded = () => {
		if (repeat) {
			replayCurrentTrack();
		} else {
			playNextTrack();
		}
	};

	// #endregion

	// #region Track handling

	const replayCurrentTrack = () => {
		audioElement.currentTime = 0;
		audioElement.play();
	};

	const loadTrack = (track: Track) => {
		audioElement.src = track.src;
		audioElement.load();
		currentTrack = track;
	};

	const computeNextTrack = () => {
		if (shuffle) {
			return computeRandomTrack();
		} else {
			return computeSubsequentTrack();
		}
	};

	const computeSubsequentTrack = (): Track => {
		const nextTrack = playlist.find(
			(item) => item.id === currentTrack.order.next,
		);
		if (nextTrack) {
			return nextTrack;
		} else {
			return currentTrack;
		}
	};

	const computeRandomTrack = (): Track => {
		const randomTrack =
			playlist[Math.floor(Math.random() * playlist.length)];
		if (randomTrack.id === currentTrack.id) {
			return computeRandomTrack();
		}
		return randomTrack;
	};

	const setTrack = (track: Track) => {
		loadTrack(track);
		emitCurrentPlayerState();
		audioElement.play();
	}

	// #endregion

	// #region Controls

	const togglePlayPause = () => {
		if (audioElement.paused) {
			audioElement.play();
		} else {
			audioElement.pause();
		}
	};

	const playNextTrack = () => {
		playbackHistory.push(currentTrack);
		const nextTrack = computeNextTrack();
		if (nextTrack) {
			loadTrack(nextTrack);
			audioElement.play();
		}
	};

	const playPreviousTrack = () => {
		if (
			playbackHistory.length === 0 ||
			audioElement.currentTime > 5
		) {
			replayCurrentTrack();
		} else {
			const previousTrack = playbackHistory.pop();
			if (previousTrack) {
				loadTrack(previousTrack);
				audioElement.play();
			}
		}
	};

	const toggleRepeat = () => {
		repeat = !repeat;
		emitCurrentPlayerState();
	};

	const toggleShuffle = () => {
		shuffle = !shuffle;
		emitCurrentPlayerState();
	};

	const setPlaybackPosition = (position: number) => {
		if (isNaN(position)) return;
		audioElement.currentTime = position;
	};

	// #endregion

	const init = () => {
		setUpAudioElementListener();
		loadTrack(playlist.find((item) => !item.order.previous)!);
	};

	const cleanup = () => {
		removeAudioElementListener();
		audioElement.pause();
	};

	init();
	return {
		togglePlayPause,
		playNextTrack,
		playPreviousTrack,
		toggleRepeat,
		toggleShuffle,
		setPlaybackPosition,
		setTrack,
		cleanup,
	};
};
