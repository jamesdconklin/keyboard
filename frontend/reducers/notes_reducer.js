import {KEY_PRESSED, KEY_RELEASED} from '../actions/note_actions';
import {GROUP_UPDATE} from '../actions/playing_actions';
import {NOTE_NAMES} from '../util/tones'

const _defaultState = [];

const _checkKey = (key) => (
  NOTE_NAMES.indexOf(key) >= 0
);

const noteReducer = (state = _defaultState, action) => {

  Object.freeze(state)
  if (!_checkKey(action.key)) {
    return state;
  }
  switch (action.type) {
    case KEY_PRESSED:
      if (state.indexOf(action.key) >= 0) {
        return state;
      } else {
        return [...state, action.key];
      }
    case KEY_RELEASED:
      if (state.indexOf(action.key) >= 0) {
        let notes = state.slice();
        notes.splice(notes.indexOf(action.key), 1);
        return notes;
      } else {
        return state;
      }
    case GROUP_UPDATE:
      return action.notes;
    default:
      return state;
  }
}

export default noteReducer;
