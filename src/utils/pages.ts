import {
  TbHeadphones,
  TbHome,
  TbMenu2,
  TbMicrophone,
  TbPhoto,
  TbVideo,
} from 'react-icons/tb';

export const pages = [
	{
		name: 'inicio',
		url: '/',
		icon: TbHome,
	},
	{
		name: 'podcast',
		url: '/podcast',
		icon: TbMicrophone,
	},
	{
		name: 'galería',
		url: '/gallery',
		icon: TbPhoto,
	},
	{
		name: 'crónicas',
		url: '/chronicles',
		icon: TbHeadphones,
	},
	{
		name: 'video',
		url: '/video',
		icon: TbVideo,
	},
	{
		name: 'créditos',
		url: '/credits',
		icon: TbMenu2,
	},
];
