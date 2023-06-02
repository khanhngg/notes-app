const NotesPanel = ({ notes, currentNote }) => {
  return (
    <div className="notes-container">
      {currentNote && (<p>current note is {currentNote.id}</p>)}
      {notes.map(({id, content, timeCreated, timeModified, folderId}) => (
          <p key={id}>{id}: {content} {timeCreated} {timeModified} {folderId}</p>
      ))}
    </div>
  );
};

export default NotesPanel;