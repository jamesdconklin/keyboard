import {connect} from 'react-redux';
import Synth from './synth';
import {keyPressed, keyReleased} from '../../actions/note_actions';
import {addNotes} from '../../actions/track_actions';

const mapStateToProps = state => ({
  notes: state.notes,
  isRecording: state.isRecording
});

const mapDispatchToProps = dispatch => ({
  keyPressed: key => dispatch(keyPressed(key)),
  keyReleased: key => dispatch(keyReleased(key)),
  addNotes: notes => dispatch(addNotes(notes))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Synth);
