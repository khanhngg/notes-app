import './App.css';
import { useState, useEffect } from 'react';
import { fetchFolders, fetchNotesFromFolder } from "api";
import {Header, FoldersPanel, NoteEditor, NotesPanel} from "components";

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
      <Header />
      <div className="container">
        <FoldersPanel folders={folders} currentFolder={currentFolder} />
        <NotesPanel notes={notes} currentNote={currentNote} />
        <NoteEditor currentNote={currentNote} />
      </div>
    </>
  );
}

export default App;
