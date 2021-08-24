/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { useState } from 'react';
import styled from 'styled-components';
import { editNote, deleteNote } from '../../../../apps/notes-app/src/utils';

export interface NoteProps {
  title: string;
  id: string;
  content: string;
  setRefresh: () => void;
}

export const Note: React.FC<NoteProps> = ({
  title,
  id,
  content,
  setRefresh,
}) => {
  const [edit, setEdit] = useState(false);

  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  const submitHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    newTitle && newContent && editNote(id, newTitle, newContent);

    setEdit(false);

    setRefresh();
  };

  return (
    <StyledNote>
      {!edit ? (
        <button
          className="edit-btn"
          onClick={() => setEdit(true)}
          type="button"
        >
          Edit
        </button>
      ) : null}
      {!edit ? (
        <button
          className="delete-btn"
          onClick={() => {
            deleteNote(id);
            setRefresh();
          }}
          type="button"
        >
          Delete
        </button>
      ) : null}
      {edit ? (
        <form onSubmit={submitHandler}>
          <h4>Edit Note</h4>
          
          <div>
            <input
              onChange={(e) => setNewTitle(e.target.value)}
              value={newTitle}
              type="text"
              name="note-title"
              id="title"
              placeholder="e.g About Today"
            />
          </div>
          <div>
            <textarea
              onChange={(e) => setNewContent(e.target.value)}
              value={newContent}
              name="note-content"
              id="content"
              placeholder="e.g I woke up 6am..."
            />
          </div>
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <h3>{title}</h3>
          <p>{content}</p>
        </>
      )}
    </StyledNote>
  );
};

const StyledNote = styled.div`
  box-shadow: 2px 5px 10px 2px #ccc;
  padding: 1.5rem 1rem;
  border-radius: 5px;
  min-height: 15rem;
  position: relative;
  width: 100%;
  min-width: 26rem;
  max-width: 26rem;

  & > button {
    color: #fff;
    font-weight: 500;
    border-radius: 4px;
    border: none;
    outline: none;
    position: absolute;
    padding: 0.5rem 0.8rem;
    cursor: pointer;
    transition: opacity 0.7s;

    &:hover {
      opacity: 0.8;
    }
  }

  & .edit-btn {
    background: #000;
    top: 0.3rem;
    right: 0.3rem;
  }

  & .delete-btn {
    background: #e40017;
    top: 0.3rem;
    left: 0.3rem;
  }

  h3 {
    text-align: center;
  }

  p {
    margin-top: 2rem;
    text-align: justify;
  }

  form {
    width: 100%;

    h4 {
      margin-bottom: 1rem;
    }

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
        border: 1px solid #5b6d5b;
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
        padding: 0.5rem 0.8rem;
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
      width: 100%;
      border-radius: 5px;
      transition: opacity 0.7s;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export default Note;
