import { NoteProps } from '@nx-react/note';

/**
 * Adds Note to list of Note in localStorage
 * @param {*} title note title
 * @param {*} content body of note
 */
export const addNote = (title: string, content: string) => {
  const notesArr: Partial<NoteProps>[] = localStorage.getItem('note-app')
    ? JSON.parse(localStorage.getItem('note-app') || '')
    : [];

  if (notesArr?.length) {
    const newNote = {
      id: new Date().getTime(),
      title,
      content,
    };

    const newNotesArr = [...notesArr, newNote];

    localStorage.setItem('note-app', JSON.stringify(newNotesArr));
  } else {
    const newNote = {
      id: new Date().getTime(),
      title,
      content,
    };

    const newNotesArr = [newNote];

    localStorage.setItem('note-app', JSON.stringify(newNotesArr));
  }
};

/**
 * Edit Note Func
 * @param {*} id note id
 * @param {*} title new title
 * @param {*} content new content
 */
export const editNote = (id: string, title: string, content: string) => {
  const notesArr: Partial<NoteProps>[] = localStorage.getItem('note-app')
    ? JSON.parse(localStorage.getItem('note-app') || '')
    : [];

  const noteIndex = notesArr.findIndex((note) => note.id === id);

  const selectedNote = notesArr[noteIndex];

  const updatedNote = {
    id: selectedNote.id,
    title,
    content,
  };

  notesArr.splice(noteIndex, 1, updatedNote);

  localStorage.setItem('note-app', JSON.stringify(notesArr));
};

/**
 * Delete Note Func
 * @param {*} id note id
 */
export const deleteNote = (id: string) => {
  const notesArr: Partial<NoteProps>[] = localStorage.getItem('note-app')
    ? JSON.parse(localStorage.getItem('note-app') || '')
    : [];

  const noteIndex = notesArr.findIndex((note) => note.id === id);

  notesArr.splice(noteIndex, 1);

  localStorage.setItem('note-app', JSON.stringify(notesArr));
};
