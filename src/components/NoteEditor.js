const NoteEditor = ({ currentNote }) => {
  return (
    <div className="notes-editor">
      {currentNote && (<p>current note content is {currentNote.content}</p>)}
    </div>  );
};

export default NoteEditor;