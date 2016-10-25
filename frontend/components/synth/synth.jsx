import React from 'react';
import {NOTE_NAMES, TONES} from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';
import NoteKey from './note_key'

class Synth extends React.Component {
  constructor(props) {
    super(props)
    let {notes, keyPressed, keyReleased} = props;
    this.notes = {};
    NOTE_NAMES.forEach(
      note => this.notes[note] = new Note(TONES[note])
    )

    this.onKeyDown = e => {
      keyPressed(e.key)
      if (this.props.isRecording) {
        this.props.addNotes(this.props.notes)
      }
    };

    this.onKeyUp = e => {
      keyReleased(e.key)
      if (this.props.isRecording) {
        this.props.addNotes(this.props.notes)
      }
    };

    this.playNotes.bind(this);
  }

  _isKeyPressed(noteName) {
    return this.props.notes.indexOf(noteName) >= 0
  }

  componentDidMount() {
    $(document).on('keydown', e=> this.onKeyDown(e));
    $(document).on('keyup', e=> this.onKeyUp(e));
  }

  playNotes() {
    for(let key in this.notes) {
      if (this.props.notes.indexOf(key) >= 0) {
        this.notes[key].start()
      } else{
        this.notes[key].stop();
      }
    }
  }

  render() {
    this.playNotes();
    return (
        <div className="keyboard">
          {NOTE_NAMES.map(
            (note) => (
              < NoteKey note={note} pressed={this._isKeyPressed(note)} />
            )
          )}
        </div>

    );
  }
}

export default Synth;
