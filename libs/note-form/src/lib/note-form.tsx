/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { useState } from 'react';
import styled from 'styled-components';
import { addNote } from '../../../../apps/notes-app/src/utils';

export interface NoteFormProps {
  hideForm: (val: boolean) => void;
  setRefresh: () => void;
}

export const NoteForm: React.FC<NoteFormProps> = ({ hideForm, setRefresh }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const SubmitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    title && content && addNote(title, content);

    setTitle('');
    setContent('');

    hideForm(false);
    setRefresh();
  };

  return (
    <StyledNoteForm onSubmit={SubmitHandler}>
      <div>
        <label htmlFor="title">Note Title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          name="note-title"
          id="title"
          placeholder="e.g About Today"
        />
      </div>
      <div>
        <label htmlFor="content">Note Content</label>
        <textarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
          name="note-content"
          id="content"
          placeholder="e.g I woke up 6am..."
        />
      </div>
      <button type="submit">Save Note</button>
    </StyledNoteForm>
  );
};

const StyledNoteForm = styled.form`
  width: 70%;
  margin: auto;
  & > div {
    margin-bottom: 1.5rem;
    label,
    input,
    textarea {
      display: block;
    }
    label {
      font-size: 1rem;
      margin-bottom: 0.3rem;
    }
    input {
      width: 100%;
      border: 1px solid #143157;
      border-radius: 5px;
      font-size: 0.9rem;
      outline: none;
      height: 2.3rem;
      padding: 0 1rem;
    }
    textarea {
      width: 100%;
      resize: none;
      height: 10rem;
      border: 1px solid #5b6d5b;
      border-radius: 5px;
      outline: none;
      padding: 0.5rem 1rem;
      font-size: 1.1rem;
    }
  }
  button {
    border: none;
    outline: none;
    background: #143157;
    color: #fff;
    font-size: 1rem;
    height: 2.6rem;
    width: 10rem;
    border-radius: 5px;
    transition: opacity 0.7s;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export default NoteForm;
