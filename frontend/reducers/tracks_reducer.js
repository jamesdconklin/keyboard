import {START_RECORDING, STOP_RECORDING, ADD_NOTES} from '../actions/track_actions';
import merge from 'lodash/merge';

var currTrackId = 0;

const newTrack = (timeStart) => {
  let id = ++ currTrackId
  let wrappedTrack = {};
  wrappedTrack[id] = {
    id: id,
    name: `Track ${id}`,
    roll: [],
    timeStart: timeStart
  }
  return wrappedTrack;
}


const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  let currTrack;
  let newState = merge({}, state);
  switch (action.type) {
    case START_RECORDING:
      let track = newTrack(action.timeNow)
      return merge(newState, track);
    case STOP_RECORDING:
      currTrack = newState[currTrackId];
      currTrack.roll.push(
        { notes: [], timeSlice: action.timeNow - currTrack.timeStart }
      );
      return newState;
    case ADD_NOTES:
      currTrack = newState[currTrackId];
      currTrack.roll.push(
        { notes: action.notes, timeSlice: action.timeNow - currTrack.timeStart }
      )
      return newState;
    default:
      return state;

  }

}

export default tracksReducer;
