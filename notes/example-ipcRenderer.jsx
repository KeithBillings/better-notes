import React, { useState } from 'react';
const { ipcRenderer } = window.require('electron');

const NoteEditor = () => {
  const [noteContent, setNoteContent] = useState('');

  const saveNote = () => {
    ipcRenderer.send('save-note', noteContent);
  };

  return (
    <div>
      <textarea value={noteContent} onChange={(e) => setNoteContent(e.target.value)} />
      <button onClick={saveNote}>Save Note</button>
    </div>
  );
};

export default NoteEditor;
