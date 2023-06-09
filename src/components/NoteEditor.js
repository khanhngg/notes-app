import { useEffect, useState } from 'react';
import { parseDateTime } from "utils/timeParser";

const NoteEditor = ({ currentNote, updateNote, isCreatingNote, createNote }) => {
  const [noteContent, setNoteContent] = useState('');
  const [isEnterPressed, setIsEnterPressed] = useState(false);

  useEffect(() => {
    setNoteContent(currentNote?.content);
  }, [currentNote?.content]);

  const handleOnEnter = (event) => {
    if (event.key === 'Enter') {
      setIsEnterPressed(true);
    }
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setNoteContent(value);

    if (isEnterPressed) {
      setIsEnterPressed(false);

      if (isCreatingNote) {
        return createNote({
            ...currentNote,
            content: value,
            timeModified: Math.round(Date.now() / 1000)
          });
      } else {
        return updateNote({
            ...currentNote,
            content: value,
            timeModified: Math.round(Date.now() / 1000)
          });
      }
    }
  }

  return (
    <div className="note-editor-container">
      <p className="note-time-modified">{currentNote && parseDateTime(currentNote.timeModified)}</p>
      <div className="note-editor">
        {currentNote && (
          <textarea
            value={noteContent}
            onKeyDown={(event) => handleOnEnter(event)}
            onChange={(event) => handleChange(event)}
          >
          </textarea>
        )}
      </div>
    </div>  );
};

export default NoteEditor;