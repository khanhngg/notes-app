const NotesPanel = ({ notes, currentNote, selectNote }) => {
  const getNoteTitle = (content) => {
    if (!content) return "New Note";
    return content.split('\n')[0];
  }

  const getNotePreview = (content) => {
    if (!content) return "No additional text";

    const contentArray = content.split('\n');
    if (contentArray.length < 2) {
      return "No additional text";
    } else {
      for (let index = 1; index < contentArray.length; index++) {
        const contentElement = contentArray[index];
        if (contentElement.trim() !== "") {
          return contentElement;
        }
      }
      return "No additional text";
    }
  }

  return (
    <div className="notes-container">
      {notes.map(({ id, content, timeCreated, timeModified, folderId }) => {
        return currentNote.id === id
        ?
          <div className="note-item selected-item" key={id}>
            <p className="note-title"><strong>{getNoteTitle(content)}</strong></p>
            <p className="note-preview">{getNotePreview(content)}</p>
          </div>
        :
        <div className="note-item" key={id} onClick={() => selectNote(id)}>
            <p className="note-title"><strong>{getNoteTitle(content)}</strong></p>
            <p className="note-preview">{getNotePreview(content)}</p>
          </div>
      })}
      {notes.length === 0 && (
        <p className="note-item empty-notes">No Notes</p>
      )}
    </div>
  );
};

export default NotesPanel;