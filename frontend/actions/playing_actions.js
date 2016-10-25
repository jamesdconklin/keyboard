export const START_PLAYING = "START_PLAYING"
export const STOP_PLAYING = "STOP_PLAYING"

export const startPlaying = (trackId) => ({
  type: START_PLAYING,
  trackId: trackId
});
