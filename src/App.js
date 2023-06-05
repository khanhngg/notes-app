import './App.css';
import { useState, useEffect } from 'react';
import { fetchFolders, fetchNotesFromFolder, createNote, updateNote, fetchNotes, deleteNote } from "api";
import { Header, FoldersPanel, NoteEditor, NotesPanel } from "components";

function App() {
  // NOTE: Using local states since Typicode My JSON Server does not persist data
  const [localFolders, setLocalFolders] = useState([]);
  const [localNotes, setLocalNotes] = useState([]);

  const [folders, setFolders] = useState([]);
  const [notes, setNotes] = useState([]);
  const [currentFolder, setCurrentFolder] = useState();
  const [currentNote, setCurrentNote] = useState();
  const [isCreatingNote, setIsCreatingNote] = useState(false);

  const [isShowFoldersPanel, setIsShowFoldersPanel] = useState(true);

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
    const toggle = !isShowFoldersPanel;
    setIsShowFoldersPanel(toggle);
  }

  const handleCreateFolder = () => {
  }

  const handleCreatingNote = () => {
    setIsCreatingNote(true);
    const newNote = {
      "id": localNotes.length + 1, // NOTE: ideally this should be set using UUID generator
      "content": "",
      "timeCreated" : Math.round(Date.now() / 1000),
      "timeModified" : Math.round(Date.now() / 1000),
      "folderId": currentFolder.id
    }

    const newNotes = [...notes, newNote];
    sortNotes(newNotes);
    setNotes(newNotes);
    setCurrentNote(newNote);

    // NOTE: Update fake local states
    const newLocalNotes = [...localNotes, newNote];
    setLocalNotes(newLocalNotes);
  }

  const handleCreateNote = async (note) => {
    setIsCreatingNote(false);
    const createdNote = await createNote(note);
    updateNoteStates(createdNote);
  }

  const handleDeleteNote = async (isFromNotesPanel) => {
    await deleteNote(currentNote.id);

    // NOTE: Update fake local states
    const newLocalNotes = localNotes.filter(note => note.id !== currentNote.id);
    setLocalNotes(newLocalNotes);

    if (isCreatingNote && !isFromNotesPanel) {
      setIsCreatingNote(false);
      return;
    }
    setIsCreatingNote(false);

    const newNotes = notes.filter(note => note.id !== currentNote.id);
    sortNotes(newNotes);
    setNotes(newNotes);
    setCurrentNote(newNotes[0]);
  }

  const handleSelectFolder = async (folderId) => {
    // Check if is in the middle of creating note, delete that unsaved one
    if (isCreatingNote) {
      handleDeleteNote();
    }

    const selectedFolder = folders.find(folder => folder.id === folderId);

    // NOTE: Ideally, we should call API to get the correct data like below:
    // const notesData = await fetchNotesFromFolder(folderId);
    // Given the fake REST API server, we will get data from local state like so:
    const notesData = localNotes.filter(note => note.folderId === folderId);

    setCurrentFolder(selectedFolder);
    sortNotes(notesData);
    setNotes(notesData);
    setCurrentNote(notesData[0]);
  }

  const handleSelectNote = async (noteId) => {
    // Check if is in the middle of creating note, delete that unsaved one
    if (isCreatingNote) {
      handleDeleteNote(true);
    }

    const selectedNote = notes.find(note => note.id === noteId);
    setCurrentNote(selectedNote);
  }

  const handleUpdateNote = async (note) => {
    const updatedNote = await updateNote(note.id, note);

    // NOTE: Pass `note` instead of `updatedNote` to accomodate the 404 response from fake REST API
    updateNoteStates(note);
  }

  const updateNoteStates = (note) => {
    const updatedNoteIndex = notes.findIndex((otherNote) => otherNote.id === note.id);
    const newNotes = [...notes];
    newNotes[updatedNoteIndex] = note;

    sortNotes(newNotes);
    setNotes(newNotes);
    setCurrentNote(note);
    
    // NOTE: Update fake local states
    const updatedLocalNoteIndex = localNotes.findIndex((otherNote) => otherNote.id === note.id);
    const newLocalNotes = [...localNotes];
    newLocalNotes[updatedLocalNoteIndex] = note;
    setLocalNotes(newLocalNotes);
  }

  return (
    <>
      <Header
        toggleFolders={handleToggleFolders}
        deleteNote={handleDeleteNote}
        createNote={handleCreatingNote}
      />
      <div className="container">
        <FoldersPanel
          isShow={isShowFoldersPanel}
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
          isCreatingNote={isCreatingNote}
          createNote={handleCreateNote}
        />
      </div>
    </>
  );
}

export default App;
