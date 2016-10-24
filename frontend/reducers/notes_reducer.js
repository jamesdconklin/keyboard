import {KEY_PRESSED, KEY_RELEASED} from '../actions/note_actions';
import {NOTE_NAMES} from '../util/tones'

const _defaultState = {
  notes: []
}

const _checkKey = (key) => (
  NOTE_NAMES.indexOf(key) >= 0
)

const noteReducer = (state = _defaultState, action) => {
  debugger;
  Object.freeze(state)
  if (!_checkKey(action.key)) {
    return state;
  }
  switch (action.type) {
    case KEY_PRESSED:
      if (state.notes.indexOf(action.key) >= 0) {
        return state;
      } else {
        return {
          notes: [...state.notes, action.key]
        };
      }
    case KEY_RELEASED:
      if (state.notes.indexOf(action.key) >= 0) {
        let notes = state.notes.slice()
        notes.splice(notes.indexOf(action.key), 1)
        return { notes }
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default noteReducer;
