import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  RepeatMode,
  Event,
} from 'react-native-track-player';

export async function setupPlayer() {
  let isSetup = false;
  try {
    await TrackPlayer.getCurrentTrack();
    isSetup = true;
  } catch {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior:
          AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
      },
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
      ],
      progressUpdateEventInterval: 2,
    });

    isSetup = true;
  } finally {
    return isSetup;
  }
}

export async function addTracks() {
  // await TrackPlayer.add([
  //   {
  //     id: '1',
  //     url: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3',
  //     title: 'Fluidity',
  //     artist: 'tobylane',
  //   },
  // ]);
  // await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

export async function service() {
  // TODO: Attach remote event handlers
}
