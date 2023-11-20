import {
	Bars3Icon,
	HomeIcon,
	MegaphoneIcon,
	MicrophoneIcon,
	PhotoIcon,
	VideoCameraIcon,
} from '@heroicons/react/24/outline';
import {
	Bars3Icon as Bars3IconSolid,
	HomeIcon as HomeIconSolid,
	MegaphoneIcon as MegaphoneIconSolid,
	MicrophoneIcon as MicrophoneIconSolid,
	PhotoIcon as PhotoIconSolid,
	VideoCameraIcon as VideoCameraIconSolid,
} from '@heroicons/react/24/solid';

export const pages = [
  {
    name: 'inicio',
    url: '/',
    icons: {
      solid: HomeIconSolid,
      outline: HomeIcon,
    },
  },
  {
    name: 'podcast',
    url: '/podcast',
    icons: {
      solid: MicrophoneIconSolid,
      outline: MicrophoneIcon,
    },
  },
  {
    name: 'galería',
    url: '/gallery',
    icons: {
      solid: PhotoIconSolid,
      outline: PhotoIcon,
    },
  },
  {
    name: 'crónicas',
    url: '/chronicles',
    icons: {
      solid: MegaphoneIconSolid,
      outline: MegaphoneIcon,
    },
  },
  {
    name: 'video',
    url: '/video',
    icons: {
      solid: VideoCameraIconSolid,
      outline: VideoCameraIcon,
    },
  },
  {
    name: 'créditos',
    url: '/credits',
    icons: {
      solid: Bars3IconSolid,
      outline: Bars3Icon,
    },
  },
];

