import './App.css';
import { useState, useEffect } from 'react';
import { fetchFolders, fetchNotesFromFolder, updateNote, fetchNotes, deleteNote } from "api";
import { Header, FoldersPanel, NoteEditor, NotesPanel } from "components";

function App() {
  // NOTE: Using local states since Typicode My JSON Server does not persist data
  const [localFolders, setLocalFolders] = useState([]);
  const [localNotes, setLocalNotes] = useState([]);

  const [folders, setFolders] = useState([]);
  const [notes, setNotes] = useState([]);
  const [currentFolder, setCurrentFolder] = useState();
  const [currentNote, setCurrentNote] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const foldersData = await fetchFolders();
      sortFolders(foldersData);

      const notesData = await fetchNotesFromFolder(foldersData[0].id);
      sortNotes(notesData);

      setFolders(foldersData);
      setCurrentFolder(foldersData[0]);
      setNotes(notesData);
      setCurrentNote(notesData[0]);

      // NOTE: Set local states for fake data persistence
      const localNotesData = await fetchNotes();
      setLocalNotes(localNotesData);
      setLocalFolders(foldersData);
    } catch (error) {
      // TODO: Handle error
    }
  };

  const sortFolders = (folders) => {
    folders.sort((folderA, folderB) => {
      if (folderA.name < folderB.name) {
        return -1;
      }
      if (folderA.name > folderB.name) {
        return 1;
      }
      return 0;
    });
  }

  const sortNotes = (notes) => {
    notes.sort((noteA, noteB) => {
      return noteB.timeModified - noteA.timeModified;
    });
  }

  const handleToggleFolders = () => {

  }

  const handleCreateFolder = () => {
  }

  const handleCreateNote = () => {

  }

  const handleDeleteNote = async () => {
    const deletedNote = await deleteNote(currentNote.id);
    
    // NOTE: Update fake local states
    const newLocalNotes = localNotes.filter(note => note.id !== currentNote.id);
    setLocalNotes(newLocalNotes);

    const newNotes = notes.filter(note => note.id !== currentNote.id);
    sortNotes(newNotes);
    setNotes(newNotes);
    setCurrentNote(newNotes[0]);
  }

  const handleSelectFolder = async (folderId) => {
    const selectedFolder = folders.find(folder => folder.id === folderId);

    // NOTE: Ideally, we should call API to get the correct data like below:
    // const notesData = await fetchNotesFromFolder(folderId);
    // Given the fake REST API server, we will get data from local state like so:
    const notesData = localNotes.filter(note => note.folderId === folderId);

    setCurrentFolder(selectedFolder);
    setNotes(notesData);
    setCurrentNote(notesData[0]);
  }

  const handleSelectNote = async (noteId) => {
    const selectedNote = notes.find(note => note.id === noteId);
    setCurrentNote(selectedNote);
  }

  const handleUpdateNote = async (note) => {
    const updatedNote = await updateNote(note.id, note);

    const updatedNoteIndex = notes.findIndex((note) => note.id === updatedNote.id);
    const newNotes = [...notes];
    newNotes[updatedNoteIndex] = updatedNote;

    sortNotes(newNotes);
    setNotes(newNotes);
    setCurrentNote(updatedNote);

    // NOTE: Update fake local states
    const updatedLocalNoteIndex = localNotes.findIndex((note) => note.id === updatedNote.id);
    const newLocalNotes = [...localNotes];
    newLocalNotes[updatedLocalNoteIndex] = updatedNote;
    setLocalNotes(newLocalNotes);
  }

  return (
    <>
      <Header deleteNote={handleDeleteNote} />
      <div className="container">
        <FoldersPanel
          folders={folders}
          currentFolder={currentFolder}
          selectFolder={handleSelectFolder}
          createFolder={handleCreateFolder}
        />
        <NotesPanel
          notes={notes}
          currentNote={currentNote}
          selectNote={handleSelectNote}
        />
        <NoteEditor
          currentNote={currentNote}
          updateNote={handleUpdateNote}
        />
      </div>
    </>
  );
}

export default App;
