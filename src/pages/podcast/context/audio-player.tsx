import React, { createContext, useEffect, useRef, useState } from 'react';
import { Controls, PlayerState, Track } from '@/types';
import { createAudioPlayer, playlist } from '../utils';

// Creamos un nuevo contexto para el reproductor de audio
export const AudioPlayerContext = createContext<UseAudioPlayer | null>(null);

// Definimos la interfaz para el contexto del reproductor de audio
export interface UseAudioPlayer extends Omit<Controls, 'cleanup'> {
  playerState: PlayerState;
}

export interface AudioPlayerProviderProps {
  children: React.ReactNode;
}

// Creamos un componente que actúe como proveedor de contexto
export const AudioPlayerProvider: React.FC<AudioPlayerProviderProps> = ({ children }) => {
  const [playerState, setPlayerState] = useState<PlayerState>({
    currentTrackDuration: null,
    currentTrackPlaybackPosition: null,
    currentTrackMetadata: null,
    currentTrackId: null,
    playbackState: 'PAUSED',
    repeat: false,
    shuffle: false,
  });

  const playerRef = useRef<Controls | null>(null);

  useEffect(() => {
    playerRef.current = createAudioPlayer(playlist, setPlayerState);

    return () => {
      playerRef.current?.cleanup();
    };
  }, []);

  const value: UseAudioPlayer = {
    playerState,
    togglePlayPause: () => playerRef.current?.togglePlayPause(),
    playNextTrack: () => playerRef.current?.playNextTrack(),
    playPreviousTrack: () => playerRef.current?.playPreviousTrack(),
    toggleRepeat: () => playerRef.current?.toggleRepeat(),
    toggleShuffle: () => playerRef.current?.toggleShuffle(),
    setPlaybackPosition: (position: number) => playerRef.current?.setPlaybackPosition(position),
    setTrack: (track: Track) => playerRef.current?.setTrack(track),
  };

  return (
    <AudioPlayerContext.Provider value={value}>
      {children}
    </AudioPlayerContext.Provider>
  );
};
