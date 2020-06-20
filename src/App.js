import React from 'react';
import SidebarComponent from './sidebar/sidebar'
import EditorComponent from './editor/editor'
import './App.css';

const firebase = require('firebase');

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null
    }
  }

  render() {
    return(
    <div className="app-container">
      <SidebarComponent 
        selectedNoteIndex={this.selectedNoteIndex}
        notes={this.notes}
        deleteNote={this.deleteNote}
        selectNote={this.selectNote}
        newNote={this.newNote}>
      </SidebarComponent>
        {
          this.state.selectedNote ? 
            <EditorComponent 
              selectedNote = {this.state.selectedNote}
              selectedNoteIndex={this.state.selectedNoteIndex}
              notes={this.state.notes}
              noteUpdate={this.noteUpdate}
            ></EditorComponent> :
            null
        }
    </div>
    );
}

  componentDidMount = () => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot(serverUpDate => {
        const notes = serverUpDate.docs.map(_doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        });
        console.log(notes)
        this.setState({ notes: notes });
      });
  }

  selectNote = (note, index) => this.setState({ selectedNoteIndex: index, selectedNote: note });
  noteUpdate = (id, noteObj) => {
    console.log(id, noteObj);
  }
}

export default App;
