const API_BASE_URL = "https://my-json-server.typicode.com/khanhngg/notes-app";

// TODO: test out how new ID are handled? or need to pass it here?
/**
 * Creates a new folder.
 *
 * @param {Object} folderData - The data for the new folder.
 * @returns {Promise<Object>} A Promise that resolves to the newly created folder.
 */
export const createFolder = async (folderData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/folders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(folderData),
    });
    return await response.json();
  } catch (error) {
    console.error('Error creating folder:', error);
    throw error;
  }
};

/**
 * Creates a new note.
 *
 * @param {Object} noteData - The data for the new note.
 * @returns {Promise<Object>} A Promise that resolves to the newly created note.
 */
export const createNote = async (noteData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(noteData),
    });
    return await response.json();
  } catch (error) {
    console.error('Error creating note:', error);
    throw error;
  }
};

/**
 * Fetches folders.
 *
 * @returns {Promise<Array>} A Promise that resolves to an array of folder objects.
 */
export const fetchFolders = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/folders`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching folders:', error);
    throw error;
  }
};

/**
 * Fetches notes from a folder by folder's ID.
 *
 * @param {number} folderId - The ID of the folder to fetch.
 * @returns {Promise<Array>} A Promise that resolves to an array of note objects.
 */
export const fetchNotesFromFolder = async (folderId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/folders/${folderId}/notes`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching notes from folder with ID ${folderId}:`, error);
    throw error;
  }
};

/**
 * Fetches notes.
 *
 * @returns {Promise<Array>} A Promise that resolves to an array of note objects.
 */
export const fetchNotes = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/notes`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching notes:`, error);
    throw error;
  }
};

/**
 * Fetches a note by ID.
 *
 * @param {number} noteId - The ID of the note to fetch.
 * @returns {Promise<Object>} A Promise that resolves to a note object.
 */
export const fetchNote = async (noteId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/notes/${noteId}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching note with ID ${noteId}:`, error);
    throw error;
  }
};

/**
 * Updates an existing note.
 *
 * @param {number} noteId - The ID of the note to update.
 * @param {Object} noteData - The updated data for the note.
 * @returns {Promise<Object>} A Promise that resolves to the updated note object.
 */
export const updateNote = async (noteId, noteData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/notes/${noteId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(noteData),
    });
    return await response.json();
  } catch (error) {
    console.error('Error updating note:', error);
    throw error;
  }
};

/**
 * Deletes an existing note.
 *
 * @param {number} noteId - The ID of the note to delete.
 * @returns {Promise<void>} A Promise that resolves when the note is successfully deleted.
 */
export const deleteClassroom = async (noteId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/notes/${noteId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete note');
    }
  } catch (error) {
    console.error('Error deleting note:', error);
    throw error;
  }
};
