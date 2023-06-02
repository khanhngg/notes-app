import './App.css';
import { useState, useEffect } from 'react';
import { fetchFolders, fetchNotesFromFolder } from "api/api";

function App() {
  const [folders, setFolders] = useState([])
  const [notes, setNotes] = useState([])
  const [currentFolder, setCurrentFolder] = useState()
  const [currentNote, setCurrentNote] = useState()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const foldersData = await fetchFolders();
      const notesData = await fetchNotesFromFolder(foldersData[0].id);

      setFolders(foldersData);
      setCurrentFolder(foldersData[0]);
      setNotes(notesData);
      setCurrentNote(notesData[0]);
    } catch (error) {
      // TODO: Handle error
    }
  };

  return (
    <>
      <header>header stuff here</header>
      <div className="container">
        <div className="folders-container">
          {currentFolder && (<p>current folder is {currentFolder.id}</p>)}
          {folders.map(({id, name}) => (
            <p key={id}>{id}: {name}</p>
          ))}
        </div>
        <div className="notes-container">
          {currentNote && (<p>current note is {currentNote.id}</p>)}
          {notes.map(({id, content, timeCreated, timeModified, folderId}) => (
              <p key={id}>{id}: {content} {timeCreated} {timeModified} {folderId}</p>
          ))}
        </div>
        <div className="notes-editor">
          {currentNote && (<p>current note content is {currentNote.content}</p>)}
        </div>
      </div>
    </>
  );
}

export default App;
