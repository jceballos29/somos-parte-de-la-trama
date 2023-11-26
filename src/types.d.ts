import { IconType } from 'react-icons';

export type PageType = {
	name: string;
	url: string;
	icon: IconType;
};

export type PodcastType = {
	id: string;
	cover: string;
	title: string;
	track: string;
	next: string | undefined;
	previous: string | undefined;
	head: boolean;
	tail: boolean;
};

export type Order = {
	previous: string | null;
	next: string | null;
	head: boolean;
};

export type Metadata = {
	title: string;
	cover: string;
  duration: string;
};

export type Track = {
	id: string;
	src: string;
	metadata: Metadata;
	order: Order;
};

export type Playlist = Array<Track>;

export type PlaybackState = 'PLAYING' | 'PAUSED';

export type PlayerState = {
	currentTrackDuration: number | null;
  currentTrackPlaybackPosition: number | null;
  currentTrackMetadata: Metadata | null,
  currentTrackId: string | null,
	playbackState: PlaybackState;
	repeat: boolean;
	shuffle: boolean;
};

export const initPlayerState: PlayerState = {
  currentTrackDuration: null,
  currentTrackPlaybackPosition: null,
  currentTrackMetadata: null,
  currentTrackId: null,
	playbackState: 'PAUSED',
	repeat: false,
	shuffle: false,
};

export type Controls = {
	toggleShuffle: () => void;
	toggleRepeat: () => void;
	togglePlayPause: () => void;
	playNextTrack: () => void;
	playPreviousTrack: () => void;
  setPlaybackPosition: (position: number) => void;
  setTrack: (track: Track) => void;
	cleanup: () => void;
};

export type ImageType = {
  key: number;
  image: {
    mini: string;
    full: string;
  }
}