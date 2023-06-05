const NotesPanel = ({ notes, currentNote, selectNote }) => {
  const getNoteTitle = (content) => {
    return content.split('\n')[0];
  }

  return (
    <div className="notes-container">
      {notes.map(({ id, content, timeCreated, timeModified, folderId }) => {
        return currentNote.id === id
        ?
          <div className="note-item selected-item" key={id}>
            <span><strong>{getNoteTitle(currentNote.content)}</strong></span>
          </div>
        :
          <div className="note-item" key={id} onClick={() => selectNote(id)}>
            <span>{getNoteTitle(content)}</span>
          </div>
      })}
      {notes.length === 0 && (
        <p className="note-item empty-notes">No Notes</p>
      )}
    </div>
  );
};

export default NotesPanel;