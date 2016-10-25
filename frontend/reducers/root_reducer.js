import {combineReducers} from 'redux';
import noteReducer from './notes_reducer';
import tracksReducer from './tracks_reducer';
import recordingReducer from './is_recording_reducer';
import isPlayingReducer from './is_playing_reducer';

const rootReducer = combineReducers({
  notes: noteReducer,
  isRecording: recordingReducer,
  tracks: tracksReducer,
  isPlaying: isPlayingReducer
});

export default rootReducer;
