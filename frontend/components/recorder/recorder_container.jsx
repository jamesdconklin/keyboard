import {connect} from 'react-redux';
import Recorder from './recorder';
import {startRecording, stopRecording, addNotes} from '../../actions/track_actions'

const mapStateToProps = (state) => ({
  isRecording: state.isRecording,
  tracks: state.tracks
});

const mapDispatchToProps = (dispatch) => ({
  startRecording: () => dispatch(startRecording()),
  stopRecording: () => dispatch(stopRecording()),
  addNotes: (notes) => dispatch(addNotes(notes))
});
export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Recorder);
