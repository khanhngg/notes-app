import { useEffect, useState } from 'react';
import { parseTime } from "utils/timeParser";

const NoteEditor = ({ currentNote, updateNote }) => {
  const [noteContent, setNoteContent] = useState('');

  useEffect(() => {
    setNoteContent(currentNote?.content);
  }, [currentNote?.content]);

  const handleOnEnter = (event) => {
    if (event.key === 'Enter') {
      const value = event.target.value + "\n";
      return updateNote({...currentNote, content: value, timeModified: Math.round(Date.now() / 1000)})
    }
  }
  
  const handleChange = (event) => {
    const value = event.target.value;
    setNoteContent(value);
  }

  return (
    <div className="note-editor-container">
      <p className="note-time-modified">{currentNote && parseTime(currentNote.timeModified)}</p>
      <div className="note-editor">
        <textarea
          value={noteContent}
          onKeyDown={(event) => handleOnEnter(event)}
          onChange={(event) => handleChange(event)}
        >
        </textarea>
      </div>
    </div>  );
};

export default NoteEditor;