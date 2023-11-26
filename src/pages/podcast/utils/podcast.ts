import bienvenidoCover from '@/assets/images/covers/bienvenida.webp';
import cuartoDeSanAlejoCover from '@/assets/images/covers/cuarto-de-san-alejo.webp';
import experienciasRecicladasCircularidadCover from '@/assets/images/covers/experiencias-recicladas-circularidad.webp';
import memoriaRememorarCover from '@/assets/images/covers/memoria-rememorar.webp';
import repararResarcirRemendarCover from '@/assets/images/covers/reparar-resarcir-remendar.webp';
import bienvenidoTrack from '@/assets/music/podcast/bienvenida.mp3';
import cuartoDeSanAlejoTrack from '@/assets/music/podcast/cuarto-de-san-alejo.mp3';
import experienciasRecicladasCircularidadTrack from '@/assets/music/podcast/experiencias-recicladas-circularidad.mp3';
import memoriaRememorarTrack from '@/assets/music/podcast/memoria-rememorar.mp3';
import repararResarcirRemendarTrack from '@/assets/music/podcast/reparar-resarcir-remendar.mp3';
import { Playlist } from '@/types';


export const podcast = [
  {
    id: '1fb6620d-1064-4f77-aacb-add629c09059',
    cover: bienvenidoCover,
    title: 'Bienvenida',
    track: bienvenidoTrack,
    next: '11a9950a-d177-43b8-9671-b2a49d2bb44b',
    previous: undefined,
    head: true,
    tail: false,
  },
  {
    id: '11a9950a-d177-43b8-9671-b2a49d2bb44b',
    cover: cuartoDeSanAlejoCover,
    title: 'Cuarto de San Alejo',
    track: cuartoDeSanAlejoTrack,
    next: 'a3b800bd-25e6-472f-abcc-44aed0a776fe',
    previous: '1fb6620d-1064-4f77-aacb-add629c09059',
    head: false,
    tail: false,
  },
  {
    id: 'a3b800bd-25e6-472f-abcc-44aed0a776fe',
    cover: repararResarcirRemendarCover,
    title: 'Reparar, resarcir y remendar',
    track: repararResarcirRemendarTrack,
    next: '2a864c61-43ba-4e60-bc66-29e76131ba83',
    previous: '11a9950a-d177-43b8-9671-b2a49d2bb44b',
    head: false,
    tail: false,
  },
  {
    id: '2a864c61-43ba-4e60-bc66-29e76131ba83',
    cover: memoriaRememorarCover,
    title: 'Memoria y rememorar',
    track: memoriaRememorarTrack,
    next: '1bb4ab57-3db9-4fc0-bfb2-2cc1623919ad',
    previous: 'a3b800bd-25e6-472f-abcc-44aed0a776fe',
    position: 0,
    head: false,
    tail: false,
  },
  {
    id: '1bb4ab57-3db9-4fc0-bfb2-2cc1623919ad',
    cover: experienciasRecicladasCircularidadCover,
    title: 'Experiencias recicladas y circularidad',
    track: experienciasRecicladasCircularidadTrack,
    next: undefined,
    previous: '2a864c61-43ba-4e60-bc66-29e76131ba83',
    head: false,
    tail: true,
  }
]

export const playlist: Playlist = [
  {
    id: '1fb6620d-1064-4f77-aacb-add629c09059',
    src: bienvenidoTrack,
    metadata: {
      title: 'Bienvenida',
      cover: bienvenidoCover,
      duration: '3:27',
    },
    order: {
      previous: null,
      next: '11a9950a-d177-43b8-9671-b2a49d2bb44b',
      head: true,
    }
  },
  {
    id: '11a9950a-d177-43b8-9671-b2a49d2bb44b',
    src: cuartoDeSanAlejoTrack,
    metadata: {
      title: 'Cuarto de San Alejo',
      cover: cuartoDeSanAlejoCover,
      duration: '3:21',
    },
    order: {
      previous: '1fb6620d-1064-4f77-aacb-add629c09059',
      next: 'a3b800bd-25e6-472f-abcc-44aed0a776fe',
      head: false,
    }
  },
  {
    id: 'a3b800bd-25e6-472f-abcc-44aed0a776fe',
    src: repararResarcirRemendarTrack,
    metadata: {
      title: 'Reparar, resarcir y remendar',
      cover: repararResarcirRemendarCover,
      duration: '2:03',
    },
    order: {
      previous: '11a9950a-d177-43b8-9671-b2a49d2bb44b',
      next: '2a864c61-43ba-4e60-bc66-29e76131ba83',
      head: false,
    }
  },
  {
    id: '2a864c61-43ba-4e60-bc66-29e76131ba83',
    src: memoriaRememorarTrack,
    metadata: {
      title: 'Memoria y rememorar',
      cover: memoriaRememorarCover,
      duration: '3:32',
    },
    order: {
      previous: 'a3b800bd-25e6-472f-abcc-44aed0a776fe',
      next: '1bb4ab57-3db9-4fc0-bfb2-2cc1623919ad',
      head: false,
    }
  },
  {
    id: '1bb4ab57-3db9-4fc0-bfb2-2cc1623919ad',
    src: experienciasRecicladasCircularidadTrack,
    metadata: {
      title: 'Experiencias recicladas y circularidad',
      cover: experienciasRecicladasCircularidadCover,
      duration: '1:55',
    },
    order: {
      previous: '2a864c61-43ba-4e60-bc66-29e76131ba83',
      next: null,
      head: false,
    }
  }
]