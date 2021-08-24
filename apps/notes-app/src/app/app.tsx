/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Navbar } from '@nx-react/navbar';
import { Note, NoteProps } from '@nx-react/note';
import { NoteForm } from '@nx-react/note-form';
import './app.css';

export function App() {
  const [showForm, setShowForm] = useState(false);
  const [notes, setNotes] = useState<NoteProps[]>([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const store = localStorage.getItem('note-app')
      ? JSON.parse(localStorage.getItem('note-app') || '')
      : [];

    setNotes(store);
  }, [refresh]);

  return (
    <StyledApp>
      <Navbar showForm={() => setShowForm(true)} />
      <article className="form-wrapper">
        {showForm && (
          <NoteForm
            setRefresh={() => setRefresh(!refresh)}
            hideForm={setShowForm}
          />
        )}
      </article>

      {!notes?.length && !showForm ? (
        <div>
          <p className="nodata-indicator">
            No notes available!
          </p>
        </div>
      ) : (
        <article className="notes-wrapper">
          {notes.map((note) => {
            return (
              <Note
                key={note.id}
                id={note.id}
                title={note.title}
                content={note.content}
                setRefresh={() => setRefresh(!refresh)}
              />
            );
          })}
        </article>
      )}
    </StyledApp>
  );
}

const StyledApp = styled.div`
  margin: 1rem 0;
  max-width: 100%;
  overflow-x: hidden;
  height: 100%;

  .form-wrapper {
    max-width: 60%;
    margin: 1.5rem auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .notes-wrapper {
    max-width: 95%;
    margin: 4rem auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }

  .nodata-indicator {
    margin-top: 4rem;
    text-align: center;
  }
`;

export default App;
