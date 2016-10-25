import {connect} from 'react-redux';
import Jukebox from './jukebox';
import {groupUpdate} from '../../actions/note_actions';
import {startPlaying, stopPlaying} from '../../actions/playing_actions';

const mapStateToProps = state => ({
  tracks: state.tracks,
  isRecording: state.isRecording,
  isPlaying: state.isPlaying
});

const mapDispatchToProps = dispatch => ({
  groupUpdate: notes => dispatch(groupUpdate(notes)),
  startPlaying: () => dispatch(startPlaying()),
  stopPlaying: () => dispatch(stopPlaying())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jukebox);
